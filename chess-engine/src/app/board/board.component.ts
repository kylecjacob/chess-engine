import { Component, OnInit } from '@angular/core';
import { Piece } from '../models/Piece';
import { Position } from '../models/Position';
import { Coordinates } from '../models/Coordinates';
import { Pawn } from '../models/Pawn';
import { Rook } from '../models/Rook';
import { Knight } from '../models/Knight';
import { Bishop } from '../models/Bishop';
import { Queen } from '../models/Queen';
import { King } from '../models/King';

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

  constructor() { }

  ngOnInit(): void {
    // let positions: Position[] = this.positions;
    // if (localStorage.positions) {
    //   // localStorage.removeItem('positions');
    //   positions = JSON.parse(localStorage.positions);
    // }
    // console.log(this.positions);
    // console.log(positions);
    // if (positions.length === 0) {
    this.positions.push(new Position('a', 1, new Coordinates(781, 168), true, new Rook('rook', 'white', 'a1-rook')));
    this.positions.push(new Position('b', 1, new Coordinates(781, 270), true, new Knight('knight', 'white', 'b1-knight')));
    this.positions.push(new Position('c', 1, new Coordinates(781, 372), true, new Bishop('bishop', 'white', 'c1-bishop')));
    this.positions.push(new Position('d', 1, new Coordinates(781, 474), true, new Queen('queen', 'white', 'white-queen')));
    this.positions.push(new Position('e', 1, new Coordinates(781, 576), true, new King('king', 'white', 'white-king')));
    this.positions.push(new Position('f', 1, new Coordinates(781, 678), true, new Bishop('bishop', 'white', 'f1-bishop')));
    this.positions.push(new Position('g', 1, new Coordinates(781, 780), true, new Knight('knight', 'white', 'g1-knight')));
    this.positions.push(new Position('h', 1, new Coordinates(781, 882), true, new Rook('rook', 'white', 'h1-rook')));

    this.positions.push(new Position('a', 2, new Coordinates(679, 168), true, new Pawn('pawn', 'white', 'a2-pawn')));
    this.positions.push(new Position('b', 2, new Coordinates(679, 270), true, new Pawn('pawn', 'white', 'b2-pawn')));
    this.positions.push(new Position('c', 2, new Coordinates(679, 372), true, new Pawn('pawn', 'white', 'c2-pawn')));
    this.positions.push(new Position('d', 2, new Coordinates(679, 474), true, new Pawn('pawn', 'white', 'd2-pawn')));
    this.positions.push(new Position('e', 2, new Coordinates(679, 576), true, new Pawn('pawn', 'white', 'e2-pawn')));
    this.positions.push(new Position('f', 2, new Coordinates(679, 678), true, new Pawn('pawn', 'white', 'f2-pawn')));
    this.positions.push(new Position('g', 2, new Coordinates(679, 780), true, new Pawn('pawn', 'white', 'g2-pawn')));
    this.positions.push(new Position('h', 2, new Coordinates(679, 882), true, new Pawn('pawn', 'white', 'h2-pawn')));

    this.positions.push(new Position('a', 3, new Coordinates(577, 168), false));
    this.positions.push(new Position('b', 3, new Coordinates(577, 270), false));
    this.positions.push(new Position('c', 3, new Coordinates(577, 372), false));
    this.positions.push(new Position('d', 3, new Coordinates(577, 474), false));
    this.positions.push(new Position('e', 3, new Coordinates(577, 576), false));
    this.positions.push(new Position('f', 3, new Coordinates(577, 678), false));
    this.positions.push(new Position('g', 3, new Coordinates(577, 780), false));
    this.positions.push(new Position('h', 3, new Coordinates(577, 882), false));

    this.positions.push(new Position('a', 4, new Coordinates(475, 168), false));
    this.positions.push(new Position('b', 4, new Coordinates(475, 270), false));
    this.positions.push(new Position('c', 4, new Coordinates(475, 372), false));
    this.positions.push(new Position('d', 4, new Coordinates(475, 474), false));
    this.positions.push(new Position('e', 4, new Coordinates(475, 576), false));
    this.positions.push(new Position('f', 4, new Coordinates(475, 678), false));
    this.positions.push(new Position('g', 4, new Coordinates(475, 780), false));
    this.positions.push(new Position('h', 4, new Coordinates(475, 882), false));

    this.positions.push(new Position('a', 5, new Coordinates(373, 168), false));
    this.positions.push(new Position('b', 5, new Coordinates(373, 270), false));
    this.positions.push(new Position('c', 5, new Coordinates(373, 372), false));
    this.positions.push(new Position('d', 5, new Coordinates(373, 474), false));
    this.positions.push(new Position('e', 5, new Coordinates(373, 576), false));
    this.positions.push(new Position('f', 5, new Coordinates(373, 678), false));
    this.positions.push(new Position('g', 5, new Coordinates(373, 780), false));
    this.positions.push(new Position('h', 5, new Coordinates(373, 882), false));

    this.positions.push(new Position('a', 6, new Coordinates(271, 168), false));
    this.positions.push(new Position('b', 6, new Coordinates(271, 270), false));
    this.positions.push(new Position('c', 6, new Coordinates(271, 372), false));
    this.positions.push(new Position('d', 6, new Coordinates(271, 474), false));
    this.positions.push(new Position('e', 6, new Coordinates(271, 576), false));
    this.positions.push(new Position('f', 6, new Coordinates(271, 678), false));
    this.positions.push(new Position('g', 6, new Coordinates(271, 780), false));
    this.positions.push(new Position('h', 6, new Coordinates(271, 882), false));

    this.positions.push(new Position('a', 7, new Coordinates(169, 168), true, new Pawn('pawn', 'black', 'a7-pawn')));
    this.positions.push(new Position('b', 7, new Coordinates(169, 270), true, new Pawn('pawn', 'black', 'b7-pawn')));
    this.positions.push(new Position('c', 7, new Coordinates(169, 372), true, new Pawn('pawn', 'black', 'c7-pawn')));
    this.positions.push(new Position('d', 7, new Coordinates(169, 474), true, new Pawn('pawn', 'black', 'd7-pawn')));
    this.positions.push(new Position('e', 7, new Coordinates(169, 576), true, new Pawn('pawn', 'black', 'e7-pawn')));
    this.positions.push(new Position('f', 7, new Coordinates(169, 678), true, new Pawn('pawn', 'black', 'f7-pawn')));
    this.positions.push(new Position('g', 7, new Coordinates(169, 780), true, new Pawn('pawn', 'black', 'g7-pawn')));
    this.positions.push(new Position('h', 7, new Coordinates(169, 882), true, new Pawn('pawn', 'black', 'h7-pawn')));

    this.positions.push(new Position('a', 8, new Coordinates(67, 168), true, new Rook('rook', 'black', 'a8-rook')));
    this.positions.push(new Position('b', 8, new Coordinates(67, 270), true, new Knight('knight', 'black', 'b8-knight')));
    this.positions.push(new Position('c', 8, new Coordinates(67, 372), true, new Bishop('bishop', 'black', 'c8-bishop')));
    this.positions.push(new Position('d', 8, new Coordinates(67, 474), true, new Queen('queen', 'black', 'black-queen')));
    this.positions.push(new Position('e', 8, new Coordinates(67, 576), true, new King('king', 'black', 'black-king')));
    this.positions.push(new Position('f', 8, new Coordinates(67, 678), true, new Bishop('bishop', 'black', 'f8-bishop')));
    this.positions.push(new Position('g', 8, new Coordinates(67, 780), true, new Knight('knight', 'black', 'g8-knight')));
    this.positions.push(new Position('h', 8, new Coordinates(67, 882), true, new Rook('rook', 'black', 'h8-rook')));

    //   for (let position of this.positions) {
    //     localStorage.setObj('positions', JSON.stringify(this.positions));
    //   }
    // } else {
    //   for (let position of positions) {
    //     this.positions.push(new Position(position.file, position.rank, position.location, position.hasPiece, position.piece));
    //   }
    //   // this.positions.push(positions);
    //   console.log(this.positions);
    // }
  }

  onSpaceClicked(spaceStr: string): void {
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
            let h1: Position = this.positions.find(x => x.file === 'h' && x.rank === 1)!;
            let f1: Position = this.positions.find(x => x.file === 'f' && x.rank === 1)!;
            this.movePiece(h1, f1);
          } else if (moveDistance === -2) { // Queen side castle 
            let a1: Position = this.positions.find(x => x.file === 'a' && x.rank === 1)!;
            let d1: Position = this.positions.find(x => x.file === 'd' && x.rank === 1)!;
            this.movePiece(a1, d1);
          }
        }
        this.movePiece(this.spaceInContext, space);
        this.clearValidMoveIndicators();
        this.pieceClicked = false;
        this.generateCpuMove();
      }
    }
  }

  async generateCpuMove(): Promise<void> {
    await this.delay(1);
    this.getCpuMoves();
    let positionsWithMove: Position[] = this.positions.filter(x => x.hasPiece && x.piece.color === 'black' && x.piece.validMoves.length > 0);
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

  getCpuMoves(): void {
    this.positions.filter(x => x.hasPiece && x.piece.color === 'black').forEach(position => {
      position.piece.getMoves(this.positions, position);
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
    piece.getMoves(this.positions, space);
    piece.showIndicators();
  }

  onPromotionPieceClicked(type: string): void {
    this.clearValidMoveIndicators();
    this.hidePawnPromotionDisplay();
    let file: string = this.promotionSpaceInContext.file;
    let rank: number = this.promotionSpaceInContext.rank;
    let space = this.positions.find(x => x.file === file && x.rank === rank)!;
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
    return this.positions.find(x => x.file === space[0] && x.rank.toString() === space[1])!;
  }
}
