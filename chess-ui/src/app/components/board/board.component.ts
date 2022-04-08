import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/Piece';
import { Position } from '../../models/Position';
import { Pawn } from '../../models/Pawn';
import { Rook } from '../../models/Rook';
import { Knight } from '../../models/Knight';
import { Bishop } from '../../models/Bishop';
import { Queen } from '../../models/Queen';
import { Board } from '../../models/Board';
import { v4 as uuidv4 } from 'uuid';
import { Game } from '../../models/Game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'chess-board',
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
  game: Game = new Game(new Board(), '', []);
  move1: string = '';
  move2: string = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    let gameId = localStorage.getItem('gameId');
    if (gameId !== null) {
      // show the popup that says 'You have a game in session, would you like to continue?'
      this.gameService.getGame(gameId).subscribe(game => {
        this.game = new Game(new Board(game.board), game._id, game.moves);
        this.board.initializePieces();
      });
    } else {
      this.createNewGame();
    }
  }

  async onSpaceClicked(spaceStr: string): Promise<void> {
    let space: Position = this.getPosition(spaceStr);
    let isTake: boolean = false;
    let isCastle: boolean = false;
    if (space.hasPiece && space.piece.color === 'white') {
      this.onPieceClicked(space);
    } else if (this.pieceClicked && this.pieceInContext) { // if not then check if there is a piece in context and if it's a valid move
      if (this.pieceInContext.validMoves.includes(spaceStr)) {
        if (this.pieceInContext.type === 'pawn' && space.rank === 8) {
          return this.showPawnPromotionDisplay(this.spaceInContext, space);
        }
        if (this.pieceInContext.possibleTakes.includes(spaceStr)) {
          isTake = true
          let original: Piece = space.piece;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        if (this.pieceInContext.type === 'king') {
          let moveDistance: number = space.file.charCodeAt(0) - this.spaceInContext.file.charCodeAt(0);
          if (moveDistance === 2) { // King side castle
            let h1: Position = this.board.getPosition('h', 1);
            let f1: Position = this.board.getPosition('f', 1);
            isCastle = true;
            this.movePiece(h1, f1);
            this.move1 = this.getMove(h1, f1, false, true, false);
          } else if (moveDistance === -2) { // Queen side castle 
            let a1: Position = this.board.getPosition('a', 1);
            let d1: Position = this.board.getPosition('d', 1);
            isCastle = true;
            this.movePiece(a1, d1);
            this.move1 = this.getMove(a1, d1, false, false, true);
          }
        }
        this.movePiece(this.spaceInContext, space);
        if (!isCastle) {
          this.move1 = this.getMove(this.spaceInContext, space, isTake);
        }
        this.clearValidMoveIndicators();
        this.pieceClicked = false;
        await this.generateCpuMove();
        this.logMoves();
        this.gameService.updateGame(this.game._id, this.game).subscribe();
      }
    }
  }

  async generateCpuMove(): Promise<void> {
    await this.delay(1);
    this.board.getCpuMoves();
    let isTake: boolean = false;
    let positionsWithMove: Position[] = this.board.getCpuPositionsWithMoves();
    let randomPosition = Math.floor(Math.random() * positionsWithMove.length);
    let i: number = 0;
    for (let position of positionsWithMove) {      
      if (i === randomPosition) {
        let move: string = '';
        let randomMove = Math.floor(Math.random() * position.piece.validMoves.length);
        let j: number = 0;
        for (let validMove of position.piece.validMoves) {
          if (j === randomMove) {
            move = validMove;
          }
          j++;
        }
        let positionMove = this.getPosition(move);
        if (position.piece.possibleTakes.includes(move)) {
          isTake = true;
          let original: Piece = positionMove.piece;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        this.movePiece(position, positionMove);
        this.move2 = this.getMove(position, positionMove, isTake);
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
    let isTake: boolean = false;
    let file: string = this.promotionSpaceInContext.file;
    let rank: number = this.promotionSpaceInContext.rank;
    let space: Position = this.board.getPosition(file, rank);
    if (this.promotionSpaceInContext.hasPiece) {
      isTake = true;
      let originalPiece = document.getElementById(this.promotionSpaceInContext.piece.identifier)!;
      originalPiece.style.display = 'none';
    }
    this.movePiece(this.spaceInContext, space);
    this.move1 = this.getMove(this.spaceInContext, space, isTake);
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

  createNewGame(): void {
    let _id: string = uuidv4();
    this.game = new Game(new Board(), _id, []);
    localStorage.setItem('gameId', _id);
    this.board.initializePieces();
    this.gameService.addNewGame(this.game).subscribe();
  }

  getMove(origin: Position, destination: Position, isTake: boolean, kingSideCastle: boolean = false, queenSideCastle: boolean = false): string {
    let move: string = '';
    switch (origin.piece.type) {
      case 'pawn':
        move += '';
        break;
      case 'knight':
        move += 'N';
        break;
      case 'rook':
        move += 'R'
        break;
      case 'bishop':
        move += 'B';
        break;
      case 'queen':
        move += 'Q';
        break;
      case 'king':
        move += 'K';
        break;
    }
    if (isTake && origin.piece.type === 'pawn') {
      move += `${origin.file}x`;
    } else if (isTake) {
      move += 'x';
    }
    if (kingSideCastle) {
      move = 'O-O';
    } else if (queenSideCastle) {
      move = 'O-O-O';
    } else {
      move += destination.toString();
    }
    return move;
  }

  logMoves(): void {    
    this.game.moves.push(`${this.game.moves.length + 1}.\u00A0\u00A0\u00A0\u00A0${this.move1}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${this.move2}`);
  }

  get board(): Board {
    return this.game?.board;
  }
}
