import { Component, OnInit } from '@angular/core';
import { Piece } from '../models/Piece';
import { Position } from '../models/Position';
import { Pawn } from '../models/Pawn';
import { Rook } from '../models/Rook';
import { Knight } from '../models/Knight';
import { Bishop } from '../models/Bishop';
import { Queen } from '../models/Queen';
import { Board } from '../models/Board';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  pieceClicked: boolean = false;
  pieceInContext!: Piece;
  pieces: Piece[] = [];
  positions: Position[] = [];
  spaceInContext: Position = new Position();
  promotionSpaceInContext: Position = new Position();  
  turn: string = '';
  baseUrl: string = 'http://localhost:8000';
  game: Game = new Game(new Board(), '');

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    // localStorage.removeItem('gameId');
    let gameId = localStorage.getItem('gameId');
    if (gameId !== null) {
      console.log('there is already a game in context');
      // show the popup that says 'You have a game in session, would you like to continue?'
      // pull the game from the DB
      await this.http.get<Game>(this.baseUrl + `/api/game/${gameId}`).subscribe(game => {
        console.log('game:', game);
        this.game = new Game(new Board(game.board), game._id);
        console.log('board', this.board);
      });
      // console.log('board:', this.board);
      // set the turn to correct player
      // set the time to where it left off
    } else {
      console.log('new game');
      let _id: string = uuidv4();
      this.game = new Game(new Board(), _id);
      // this.turn = 'white'; // TODO: add color choice
      localStorage.setItem('gameId', _id);
      await this.http.post<Game>(this.baseUrl + '/api/new-game', this.game).subscribe(game => {
        console.log(game);
      });
    }
    // console.log(this.board);
    // create a board object which has positions array
    // is there a game in session? if so create the board from the gme, otherwise create new game
  }

  async onSpaceClicked(spaceStr: string): Promise<void> {
    console.log(this.board);
    let space: Position = this.getPosition(spaceStr);
    if (space.hasPiece && space.piece.color === 'white') {
      this.onPieceClicked(space);
    } else if (this.pieceClicked && this.pieceInContext) { // if not then check if there is a piece in context and if it's a valid move
      if (this.pieceInContext.validMoves.includes(space)) {
        if (this.pieceInContext.type === 'pawn' && space.rank === 8) {
          return this.showPawnPromotionDisplay(this.spaceInContext, space);
        }
        if (this.pieceInContext.possibleTakes.includes(space)) {
          let original: Piece = space.piece;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        if (this.pieceInContext.type === 'king') {
          let moveDistance: number = space.file.charCodeAt(0) - this.spaceInContext.file.charCodeAt(0);
          if (moveDistance === 2) { // King side castle
            let h1: Position = this.board.getPosition('h', 1);
            let f1: Position = this.board.getPosition('f', 1);
            this.movePiece(h1, f1);
          } else if (moveDistance === -2) { // Queen side castle 
            let a1: Position = this.board.getPosition('a', 1);
            let d1: Position = this.board.getPosition('d', 1);
            this.movePiece(a1, d1);
          }
        }
        this.movePiece(this.spaceInContext, space);
        this.clearValidMoveIndicators();
        this.pieceClicked = false;
        // await this.generateCpuMove();
        console.log(this.board);
        await this.http.put<Game>(this.baseUrl + `/api/game/${this.game._id}`, this.game).subscribe(game => {
          // console.log('game returned from db', game.board);
        });
      }
    }
  }

  async generateCpuMove(): Promise<void> {
    await this.delay(1);
    this.board.getCpuMoves();
    let positionsWithMove: Position[] = this.board.getCpuPositionsWithMoves();
    let randomPosition = Math.floor(Math.random() * positionsWithMove.length);
    let i: number = 0;
    for (let position of positionsWithMove) {      
      if (i === randomPosition) {
        let move: Position = new Position(); 
        let randomMove = Math.floor(Math.random() * position.piece.validMoves.length);
        let j: number = 0;
        for (let validMove of position.piece.validMoves) {        
          if (j === randomMove) {
            move = validMove;
          }
          j++;
        }
        if (position.piece.possibleTakes.includes(move)) {
          let original: Piece = move.piece;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        this.movePiece(position, move)
      }
      i++;
    }
  }

  delay(n: number) {
    return new Promise(function(resolve){
        setTimeout(resolve, n * 1000);
    });
  }

  onPieceClicked(space: Position): void {
    this.clearValidMoveIndicators();
    this.hidePawnPromotionDisplay();
    let piece: Piece = space.piece;
    piece.validMoves = [];
    piece.possibleTakes = [];
    piece.possibleMoves = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    this.spaceInContext = space;
    piece.getMoves(this.board.positions, space);
    piece.showIndicators();
  }

  onPromotionPieceClicked(type: string): void {
    this.clearValidMoveIndicators();
    this.hidePawnPromotionDisplay();
    let file: string = this.promotionSpaceInContext.file;
    let rank: number = this.promotionSpaceInContext.rank;
    let space: Position = this.board.getPosition(file, rank);
    if (this.promotionSpaceInContext.hasPiece) {
      let originalPiece = document.getElementById(this.promotionSpaceInContext.piece.identifier)!;
      originalPiece.style.display = 'none';
    }
    this.movePiece(this.spaceInContext, space);
    let piece: Piece = this.getPromotionPiece(type);
    space.piece = piece;
    space.hasPiece = true;
    let domElement = document.getElementById(this.spaceInContext.piece.identifier)! as HTMLImageElement;
    domElement.src = `../../assets/images/white_${type}.png`;
    this.pieceClicked = false;
    this.spaceInContext = space;
  }
  
  getPromotionPiece(type: string): Piece {
    let identifier: string = this.spaceInContext.piece.identifier;
    switch (type) {
      case 'queen':
        return new Queen('queen', 'white', identifier);
      case 'rook':
        return new Rook('rook', 'white', identifier);
      case 'knight':
        return new Knight('knight', 'white', identifier);
      case 'bishop':
        return new Bishop('bishop', 'white', identifier);
    }
    return new Pawn();
  }

  clearValidMoveIndicators(): void {
    let allSpaces = document.getElementsByClassName('indicator') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < allSpaces.length; i++) {
      let element = allSpaces[i];
      element.style.display = 'none';
    }
  }

  movePiece(origin: Position, destination: Position): void {
    let originDomElement = document.getElementById(origin.piece.identifier)!;
    originDomElement.style.top = `${destination.location.y}px`;
    originDomElement.style.left = `${destination.location.x}px`;
    origin.piece.touched = true;
    destination.piece = origin.piece;
    destination.hasPiece = true;
    origin.hasPiece = false;
  }

  showPawnPromotionDisplay(spaceInContext: Position, spaceClicked: Position): void {
    this.promotionSpaceInContext = spaceClicked;
    let display = document.getElementById('pawn-promotion-container')!;
    display.style.display = 'block';
    if (spaceClicked.file.charCodeAt(0) < spaceInContext.file.charCodeAt(0)) {
      display.style.left = `${spaceClicked.location.x - 214}px`;
    } else {
      display.style.left = `${spaceClicked.location.x + 95}px`;
    }
  }

  hidePawnPromotionDisplay(): void {
    let display = document.getElementById('pawn-promotion-container')!;
    display.style.display = 'none';
  }

  getPositionClass(spaceStr: string): string {
    let space: Position = this.getPosition(spaceStr);
    return space.hasPiece && space.piece.color === 'white' ? 'piece' : 'space';
  }

  getPosition(space: string): Position {
    return this.board.getPosition(space[0], parseInt(space[1]));
  }

  get board(): Board {
    return this.game?.board;
  }
}
