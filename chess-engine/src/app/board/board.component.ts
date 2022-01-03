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

  a1: Position = new Position('a', 1, new Coordinates(781, 168), true, new Rook('rook', 'white', 'a1-rook'));
  b1: Position = new Position('b', 1, new Coordinates(781, 270), true, new Knight('knight', 'white', 'b1-knight'));
  c1: Position = new Position('c', 1, new Coordinates(781, 372), true, new Bishop('bishop', 'white', 'c1-bishop'));
  d1: Position = new Position('d', 1, new Coordinates(781, 474), true, new Queen('queen', 'white', 'white-queen'));
  e1: Position = new Position('e', 1, new Coordinates(781, 576), true, new King('king', 'white', 'white-king'));
  f1: Position = new Position('f', 1, new Coordinates(781, 678), true, new Bishop('bishop', 'white', 'f1-bishop'));
  g1: Position = new Position('g', 1, new Coordinates(781, 780), true, new Knight('knight', 'white', 'g1-knight'));
  h1: Position = new Position('h', 1, new Coordinates(781, 882), true, new Rook('rook', 'white', 'h1-rook'));

  a2: Position = new Position('a', 2, new Coordinates(679, 168), true, new Pawn('pawn', 'white', 'a2-pawn'));
  b2: Position = new Position('b', 2, new Coordinates(679, 270), true, new Pawn('pawn', 'white', 'b2-pawn'));
  c2: Position = new Position('c', 2, new Coordinates(679, 372), true, new Pawn('pawn', 'white', 'c2-pawn'));
  d2: Position = new Position('d', 2, new Coordinates(679, 474), true, new Pawn('pawn', 'white', 'd2-pawn'));
  e2: Position = new Position('e', 2, new Coordinates(679, 576), true, new Pawn('pawn', 'white', 'e2-pawn'));
  f2: Position = new Position('f', 2, new Coordinates(679, 678), true, new Pawn('pawn', 'white', 'f2-pawn'));
  g2: Position = new Position('g', 2, new Coordinates(679, 780), true, new Pawn('pawn', 'white', 'g2-pawn'));
  h2: Position = new Position('h', 2, new Coordinates(679, 882), true, new Pawn('pawn', 'white', 'h2-pawn'));

  a3: Position = new Position('a', 3, new Coordinates(577, 168), false);
  b3: Position = new Position('b', 3, new Coordinates(577, 270), false);
  c3: Position = new Position('c', 3, new Coordinates(577, 372), false);
  d3: Position = new Position('d', 3, new Coordinates(577, 474), false);
  e3: Position = new Position('e', 3, new Coordinates(577, 576), false);
  f3: Position = new Position('f', 3, new Coordinates(577, 678), false);
  g3: Position = new Position('g', 3, new Coordinates(577, 780), false);
  h3: Position = new Position('h', 3, new Coordinates(577, 882), false);

  a4: Position = new Position('a', 4, new Coordinates(475, 168), false);
  b4: Position = new Position('b', 4, new Coordinates(475, 270), false);
  c4: Position = new Position('c', 4, new Coordinates(475, 372), false);
  d4: Position = new Position('d', 4, new Coordinates(475, 474), false);
  e4: Position = new Position('e', 4, new Coordinates(475, 576), false);
  f4: Position = new Position('f', 4, new Coordinates(475, 678), false);
  g4: Position = new Position('g', 4, new Coordinates(475, 780), false);
  h4: Position = new Position('h', 4, new Coordinates(475, 882), false);

  a5: Position = new Position('a', 5, new Coordinates(373, 168), false);
  b5: Position = new Position('b', 5, new Coordinates(373, 270), false);
  c5: Position = new Position('c', 5, new Coordinates(373, 372), false);
  d5: Position = new Position('d', 5, new Coordinates(373, 474), false);
  e5: Position = new Position('e', 5, new Coordinates(373, 576), false);
  f5: Position = new Position('f', 5, new Coordinates(373, 678), false);
  g5: Position = new Position('g', 5, new Coordinates(373, 780), false);
  h5: Position = new Position('h', 5, new Coordinates(373, 882), false);

  a6: Position = new Position('a', 6, new Coordinates(271, 168), false);
  b6: Position = new Position('b', 6, new Coordinates(271, 270), false);
  c6: Position = new Position('c', 6, new Coordinates(271, 372), false);
  d6: Position = new Position('d', 6, new Coordinates(271, 474), false);
  e6: Position = new Position('e', 6, new Coordinates(271, 576), false);
  f6: Position = new Position('f', 6, new Coordinates(271, 678), false);
  g6: Position = new Position('g', 6, new Coordinates(271, 780), false);
  h6: Position = new Position('h', 6, new Coordinates(271, 882), false);

  a7: Position = new Position('a', 7, new Coordinates(169, 168), true, new Pawn('pawn', 'black', 'a7-pawn'));
  b7: Position = new Position('b', 7, new Coordinates(169, 270), true, new Pawn('pawn', 'black', 'b7-pawn'));
  c7: Position = new Position('c', 7, new Coordinates(169, 372), true, new Pawn('pawn', 'black', 'c7-pawn'));
  d7: Position = new Position('d', 7, new Coordinates(169, 474), true, new Pawn('pawn', 'black', 'd7-pawn'));
  e7: Position = new Position('e', 7, new Coordinates(169, 576), true, new Pawn('pawn', 'black', 'e7-pawn'));
  f7: Position = new Position('f', 7, new Coordinates(169, 678), true, new Pawn('pawn', 'black', 'f7-pawn'));
  g7: Position = new Position('g', 7, new Coordinates(169, 780), true, new Pawn('pawn', 'black', 'g7-pawn'));
  h7: Position = new Position('h', 7, new Coordinates(169, 882), true, new Pawn('pawn', 'black', 'h7-pawn'));

  a8: Position = new Position('a', 8, new Coordinates(67, 168), true, new Rook('rook', 'black', 'a8-rook'));
  b8: Position = new Position('b', 8, new Coordinates(67, 270), true, new Knight('knight', 'black', 'b8-knight'));
  c8: Position = new Position('c', 8, new Coordinates(67, 372), true, new Bishop('bishop', 'black', 'c8-bishop'));
  d8: Position = new Position('d', 8, new Coordinates(67, 474), true, new Queen('queen', 'black', 'black-queen'));
  e8: Position = new Position('e', 8, new Coordinates(67, 576), true, new King('king', 'black', 'black-king'));
  f8: Position = new Position('f', 8, new Coordinates(67, 678), true, new Bishop('bishop', 'black', 'f8-bishop'));
  g8: Position = new Position('g', 8, new Coordinates(67, 780), true, new Knight('knight', 'black', 'g8-knight'));
  h8: Position = new Position('h', 8, new Coordinates(67, 882), true, new Rook('rook', 'black', 'h8-rook'));

  constructor() { }

  ngOnInit(): void {
    this.positions.push(this.a1);
    this.positions.push(this.a2);
    this.positions.push(this.a3);
    this.positions.push(this.a4);
    this.positions.push(this.a5);
    this.positions.push(this.a6);
    this.positions.push(this.a7);
    this.positions.push(this.a8);

    this.positions.push(this.b1);
    this.positions.push(this.b2);
    this.positions.push(this.b3);
    this.positions.push(this.b4);
    this.positions.push(this.b5);
    this.positions.push(this.b6);
    this.positions.push(this.b7);
    this.positions.push(this.b8);

    this.positions.push(this.c1);
    this.positions.push(this.c2);
    this.positions.push(this.c3);
    this.positions.push(this.c4);
    this.positions.push(this.c5);
    this.positions.push(this.c6);
    this.positions.push(this.c7);
    this.positions.push(this.c8);

    this.positions.push(this.d1);
    this.positions.push(this.d2);
    this.positions.push(this.d3);
    this.positions.push(this.d4);
    this.positions.push(this.d5);
    this.positions.push(this.d6);
    this.positions.push(this.d7);
    this.positions.push(this.d8);

    this.positions.push(this.e1);
    this.positions.push(this.e2);
    this.positions.push(this.e3);
    this.positions.push(this.e4);
    this.positions.push(this.e5);
    this.positions.push(this.e6);
    this.positions.push(this.e7);
    this.positions.push(this.e8);

    this.positions.push(this.f1);
    this.positions.push(this.f2);
    this.positions.push(this.f3);
    this.positions.push(this.f4);
    this.positions.push(this.f5);
    this.positions.push(this.f6);
    this.positions.push(this.f7);
    this.positions.push(this.f8);

    this.positions.push(this.g1);
    this.positions.push(this.g2);
    this.positions.push(this.g3);
    this.positions.push(this.g4);
    this.positions.push(this.g5);
    this.positions.push(this.g6);
    this.positions.push(this.g7);
    this.positions.push(this.g8);

    this.positions.push(this.h1);
    this.positions.push(this.h2);
    this.positions.push(this.h3);
    this.positions.push(this.h4);
    this.positions.push(this.h5);
    this.positions.push(this.h6);
    this.positions.push(this.h7);
    this.positions.push(this.h8);
  }

  onSpaceClicked(space: Position): void {
    if (space.hasPiece && space.piece.color === 'white') {
      this.onPieceClicked(space);
    } else if (this.pieceClicked && this.pieceInContext) { // if not then check if there is a piece in context and if it's a valid move
      if (this.pieceInContext.validMoves.includes(space)) {
        if (this.pieceInContext.type === 'pawn' && space.rank === 8) {        
          this.showPawnPromotionDisplay(this.spaceInContext, space);
          return;
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
      }
    }
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
    let piece: Piece;
    if (this.promotionSpaceInContext.hasPiece) {
      let originalPiece = document.getElementById(this.promotionSpaceInContext.piece.identifier)!;
      originalPiece.style.display = 'none';
    }
    switch (type) {
      case 'queen':
        piece = new Queen('queen', 'white', `${file}${rank}-queen`);
        break;
      case 'rook':
        piece = new Rook('rook', 'white', `${file}${rank}-rook`);
        break;
      case 'knight':
        piece = new Knight('knight', 'white', `${file}${rank}-knight`);
        break;
      case 'bishop':
        piece = new Bishop('bishop', 'white', `${file}${rank}-bishop`);
        break;
    }
    // console.log(piece);
    let space = this.positions.find(x => x.file === file && x.rank === rank)!;
    space.piece = piece!;
    space.hasPiece = true;
    this.movePiece(this.spaceInContext, space);
    let domElement = document.getElementById(this.spaceInContext.piece.identifier)! as HTMLImageElement;
    domElement.src = `../../assets/images/white_${type}.png`;
    this.pieceClicked = false;
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
}
