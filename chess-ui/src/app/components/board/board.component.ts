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
    // if there is already a game in context, get the game from the DB and initialize the board
    if (gameId !== null) {
      this.gameService.getGame(gameId).subscribe(game => {
        this.game = new Game(new Board(game.board), game._id, game.moves);
        this.board.initializePieces();
      });
    } else {
      // if not, create a new game
      this.createNewGame();
    }
  }

  /** This method gets called when a space is clicked and handles the logic to either get the valid moves for a white piece or calculate the move for black */
  async onSpaceClicked(spaceStr: string): Promise<void> {
    let space: Position = this.getPositionAt(spaceStr);
    let isTake: boolean = false;
    let isCastle: boolean = false;
    if (space.hasPiece && space.piece.color === 'white') {
      this.onPieceClicked(space);
      // if there is a piece in context and if it's a valid move, then move the piece to that space
    } else if (this.pieceClicked && this.pieceInContext) {
      if (this.pieceInContext.validMoves.includes(spaceStr)) {
        // if white pawn is moving to the 8th rank, show the promotion display and return 
        if (this.pieceInContext.type === 'pawn' && space.rank === 8) {
          return this.showPawnPromotionDisplay(this.spaceInContext, space);
        }
        // if the space has a piece, set take to true and hide the display of the original piece
        if (this.pieceInContext.possibleTakes.includes(spaceStr)) {
          isTake = true
          let original: Piece = space.piece;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        if (this.pieceInContext.type === 'king') {
          // if the piece is a king, then get the move distance of the current move
          let moveDistance: number = space.file.charCodeAt(0) - this.spaceInContext.file.charCodeAt(0);
          // if the move distance is 2 then it's a king side castle 
          if (moveDistance === 2) {
            let h1: Position = this.board.getPosition('h', 1);
            let f1: Position = this.board.getPosition('f', 1);
            isCastle = true;
            this.movePiece(h1, f1);
            this.move1 = this.getMoveLogString(h1, f1, false, true, false);
            // else if the move distance is -2 then it's a queen side castle 
          } else if (moveDistance === -2) {
            let a1: Position = this.board.getPosition('a', 1);
            let d1: Position = this.board.getPosition('d', 1);
            isCastle = true;
            this.movePiece(a1, d1);
            this.move1 = this.getMoveLogString(a1, d1, false, false, true);
          }
        }
        this.movePiece(this.spaceInContext, space);
        if (!isCastle) {
          this.move1 = this.getMoveLogString(this.spaceInContext, space, isTake);
        }
        this.clearValidMoveIndicators();
        this.pieceClicked = false;
        await this.generateCpuMove();
        this.logMoves();
        this.gameService.updateGame(this.game._id, this.game).subscribe();
      }
    }
  }

  /** Generate random CPU move */
  async generateCpuMove(): Promise<void> {
    // wait one second to simulate the computer "thinking" of a move
    await this.delay(1);
    this.board.setCpuMoves();
    let isTake: boolean = false;
    let positionsWithMove: Position[] = this.board.getCpuPositionsWithMoves();
    // Generate a random position from the list of black positions with moves
    let randomPosition = Math.floor(Math.random() * positionsWithMove.length);
    let i: number = 0;
    for (let position of positionsWithMove) {      
      if (i === randomPosition) {
        let moveStr: string = '';
        // get a random move from all the valid moves for the black position 
        let randomMove = Math.floor(Math.random() * position.piece.validMoves.length);
        let j: number = 0;
        for (let validMove of position.piece.validMoves) {
          if (j === randomMove) {
            moveStr = validMove;
          }
          j++;
        }
        let move: Position = this.getPositionAt(moveStr);
        // if the move is a take, set isTake to true and hide the original piece
        if (position.piece.possibleTakes.includes(moveStr)) {
          isTake = true;
          let original: Piece = move.piece;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        this.movePiece(position, move);
        // get the second move for the move log
        this.move2 = this.getMoveLogString(position, move, isTake);
      }
      i++;
    }
  }

  /** Wait for 1 second on the CPU move */
  delay(n: number) {
    return new Promise(function(resolve){
        setTimeout(resolve, n * 1000);
    });
  }

  /** Called when a space is clicked and there is a piece on the space */
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

  /** Called when a piece is clicked from the pawn promotion display */
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
    this.move1 = this.getMoveLogString(this.spaceInContext, space, isTake);
    let piece: Piece = this.getPromotionPiece(type);
    space.piece = piece;
    space.hasPiece = true;
    let domElement = document.getElementById(this.spaceInContext.piece.identifier)! as HTMLImageElement;
    domElement.src = `../../assets/images/white_${type}.png`;
    this.pieceClicked = false;
    this.spaceInContext = space;
  }
  
  /** Return a new piece based on the promotion type */
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

  /** Clear all valid move indicators from the board */
  clearValidMoveIndicators(): void {
    let allSpaces = document.getElementsByClassName('indicator') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < allSpaces.length; i++) {
      let element = allSpaces[i];
      element.style.display = 'none';
    }
  }

  /** Move a piece from one space to another */
  movePiece(origin: Position, destination: Position): void {
    let originDomElement = document.getElementById(origin.piece.identifier)!;
    originDomElement.style.top = `${destination.location.y}px`;
    originDomElement.style.left = `${destination.location.x}px`;
    origin.piece.touched = true;
    destination.piece = origin.piece;
    destination.hasPiece = true;
    origin.hasPiece = false;
  }

  /** Show the pawn promotion display  */
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

  /** Hide the pawn promotion display */
  hidePawnPromotionDisplay(): void {
    let display = document.getElementById('pawn-promotion-container')!;
    display.style.display = 'none';
  }

  /** Get the css class for a given position based on whether or not there is a piece there */
  getPositionClass(spaceStr: string): string {
    let space: Position = this.getPositionAt(spaceStr);
    return space.hasPiece && space.piece.color === 'white' ? 'piece' : 'space';
  }

  /** Get the position object based on the space string */
  getPositionAt(space: string): Position {
    return this.board.getPosition(space[0], parseInt(space[1]));
  }

  /** Deletes the current game and creates a new one */
  onNewGameClicked(): void {
    this.deleteCurrentGame();
    this.createNewGame();
  }

  /** Deletes current game */
  deleteCurrentGame(): void {
    this.gameService.deleteGame(this.game._id).subscribe();
  }

  /** Creates a new game */
  createNewGame(): void {
    let _id: string = uuidv4();
    this.game = new Game(new Board(), _id, []);
    localStorage.setItem('gameId', _id);
    this.board.initializePieces();
    this.gameService.addNewGame(this.game).subscribe();
  }

  /** This method returns the move string to be displayed in the move log  */
  getMoveLogString(origin: Position, destination: Position, isTake: boolean, kingSideCastle: boolean = false, queenSideCastle: boolean = false): string {
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

  /** Log each move */
  logMoves(): void {    
    this.game.moves.push([this.move1, this.move2]);
    console.log(this.game.moves);
  }

  get board(): Board {
    return this.game?.board;
  }
}
