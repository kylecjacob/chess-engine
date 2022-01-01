import { Component, OnInit } from '@angular/core';
import { Piece } from '../models/Piece';
import { Position } from '../models/Position';
import { Coordinates } from '../models/Coordinates';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  pieceClicked: boolean = false;
  pieceInContext: Piece = new Piece();
  pieces: Piece[] = [];
  positions: Position[] = [];
  spaceInContext: Position = new Position();

  a1: Position = new Position('a', 1, new Coordinates(781, 168), true, new Piece('rook', 'white', 'a1-rook'));
  b1: Position = new Position('b', 1, new Coordinates(781, 270), true, new Piece('knight', 'white', 'b1-knight'));
  c1: Position = new Position('c', 1, new Coordinates(781, 372), true, new Piece('bishop', 'white', 'c1-bishop'));
  d1: Position = new Position('d', 1, new Coordinates(781, 474), true, new Piece('queen', 'white', 'white-queen'));
  e1: Position = new Position('e', 1, new Coordinates(781, 576), true, new Piece('king', 'white', 'white-king'));
  f1: Position = new Position('f', 1, new Coordinates(781, 678), true, new Piece('bishop', 'white', 'f1-bishop'));
  g1: Position = new Position('g', 1, new Coordinates(781, 780), true, new Piece('knight', 'white', 'g1-knight'));
  h1: Position = new Position('h', 1, new Coordinates(781, 882), true, new Piece('rook', 'white', 'h1-rook'));

  a2: Position = new Position('a', 2, new Coordinates(679, 168), true, new Piece('pawn', 'white', 'a2-pawn'));
  b2: Position = new Position('b', 2, new Coordinates(679, 270), true, new Piece('pawn', 'white', 'b2-pawn'));
  c2: Position = new Position('c', 2, new Coordinates(679, 372), true, new Piece('pawn', 'white', 'c2-pawn'));
  d2: Position = new Position('d', 2, new Coordinates(679, 474), true, new Piece('pawn', 'white', 'd2-pawn'));
  e2: Position = new Position('e', 2, new Coordinates(679, 576), true, new Piece('pawn', 'white', 'e2-pawn'));
  f2: Position = new Position('f', 2, new Coordinates(679, 678), true, new Piece('pawn', 'white', 'f2-pawn'));
  g2: Position = new Position('g', 2, new Coordinates(679, 780), true, new Piece('pawn', 'white', 'g2-pawn'));
  h2: Position = new Position('h', 2, new Coordinates(679, 882), true, new Piece('pawn', 'white', 'h2-pawn'));

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

  a7: Position = new Position('a', 7, new Coordinates(169, 168), true, new Piece('pawn', 'black', 'a7-pawn'));
  b7: Position = new Position('b', 7, new Coordinates(169, 270), true, new Piece('pawn', 'black', 'b7-pawn'));
  c7: Position = new Position('c', 7, new Coordinates(169, 372), true, new Piece('pawn', 'black', 'c7-pawn'));
  d7: Position = new Position('d', 7, new Coordinates(169, 474), true, new Piece('pawn', 'black', 'd7-pawn'));
  e7: Position = new Position('e', 7, new Coordinates(169, 576), true, new Piece('pawn', 'black', 'e7-pawn'));
  f7: Position = new Position('f', 7, new Coordinates(169, 678), true, new Piece('pawn', 'black', 'f7-pawn'));
  g7: Position = new Position('g', 7, new Coordinates(169, 780), true, new Piece('pawn', 'black', 'g7-pawn'));
  h7: Position = new Position('h', 7, new Coordinates(169, 882), true, new Piece('pawn', 'black', 'h7-pawn'));

  a8: Position = new Position('a', 8, new Coordinates(67, 168), true, new Piece('rook', 'black', 'a8-rook'));
  b8: Position = new Position('b', 8, new Coordinates(67, 270), true, new Piece('knight', 'black', 'b8-knight'));
  c8: Position = new Position('c', 8, new Coordinates(67, 372), true, new Piece('bishop', 'black', 'c8-bishop'));
  d8: Position = new Position('d', 8, new Coordinates(67, 474), true, new Piece('queen', 'black', 'black-queen'));
  e8: Position = new Position('e', 8, new Coordinates(67, 576), true, new Piece('king', 'black', 'black-king'));
  f8: Position = new Position('f', 8, new Coordinates(67, 678), true, new Piece('bishop', 'black', 'f8-bishop'));
  g8: Position = new Position('g', 8, new Coordinates(67, 780), true, new Piece('knight', 'black', 'g8-knight'));
  h8: Position = new Position('h', 8, new Coordinates(67, 882), true, new Piece('rook', 'black', 'h8-rook'));

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
      switch (space.piece.type) {
        case 'pawn':
          this.onPawnClicked(space);
          break;
        case 'knight':
          this.onKnightClicked(space);
          break;
        case 'rook':
          this.onRookClicked(space);
          break;
        case 'bishop':
          this.onBishopClicked(space);
          break;
        case 'queen':
          this.onQueenClicked(space);
          break;
        case 'king':
          this.onKingClicked(space);
          break;
      }
    } else if (this.pieceClicked && this.pieceInContext) { // if not then check if there is a piece in context and if it's a valid move
      if (this.pieceInContext.validMoves.includes(space)) {
        if (this.pieceInContext.possibleTakes.includes(space)) {
          let original: Piece = space.piece;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        this.spaceInContext.hasPiece = false;
        this.spaceInContext = space;
        space.piece = this.pieceInContext;
        let piece = document.getElementById(this.pieceInContext.identifier)!;
        piece.style.top = `${space.location.y}px`;
        piece.style.left = `${space.location.x}px`;
        this.clearValidMoveIndicators();
        this.pieceClicked = false;
        space.hasPiece = true;
      }
    }
  }

  onPawnClicked(space: Position): void {
    this.clearValidMoveIndicators();
    let piece: Piece = space.piece;
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    this.spaceInContext = space;
    let possibleMoves: Position[] = [];
    if (piece.color === 'white') {
      possibleMoves.push(this.positions.find(x => x.file === space.file && x.rank === space.rank + 1)!);
      possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 1)!);
      possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 1)!);
      if (space.rank == 2) {
        possibleMoves.push(this.positions.find(x => x.file === space.file && x.rank === space.rank + 2)!);
      }
    } else {
      possibleMoves.push(this.positions.find(x => x.file === space.file && x.rank === space.rank - 1)!);
      possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 1)!);
      possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 1)!);
      if (space.rank == 7) {
        possibleMoves.push(this.positions.find(x => x.file === space.file && x.rank === space.rank - 2)!);
      }
    }
    possibleMoves.forEach(move => {
      if (!move) return;
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {
        piece.validMoves.push(move);
      }
      if (move.hasPiece) {
        if (move.piece.color === piece.color || move.file === space.file) {
          piece.validMoves.splice(piece.validMoves.indexOf(move)); // else if it's black and it's on a diagnal then add it to possile takes
        } else if (move.file.charCodeAt(0) !== space.file.charCodeAt(0)) {
          piece.possibleTakes.push(move);
        }
      } else if (move.file.charCodeAt(0) !== space.file.charCodeAt(0)) {
        piece.validMoves.splice(piece.validMoves.indexOf(move));
      }      
    });
    console.log()
    if (piece.possibleTakes.length > 0) {
      this.showPossibleTakeIndicators(piece.possibleTakes);
    }
    this.showValidMoveIndicators(piece.validMoves);
    this.removeValidMoveIndicatorsWhenTakeIndicator(piece);
  }

  onKnightClicked(space: Position): void {
    this.clearValidMoveIndicators();
    let piece: Piece = space.piece;
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    this.spaceInContext = space;
    let possibleMoves: Position[] = [];
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 2 && x.rank === space.rank + 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 2 && x.rank === space.rank + 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 2 && x.rank === space.rank - 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 2 && x.rank === space.rank - 1)!);
    possibleMoves.forEach(move => {
      if (!move) return;
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
        piece.validMoves.push(move);
      }
      if (move.hasPiece) {
        if (move.piece.color === piece.color) {
          piece.validMoves.splice(piece.validMoves.indexOf(move));
        } else {
          piece.possibleTakes.push(move);
        }
      }
    });
    if (piece.possibleTakes.length > 0) {
      this.showPossibleTakeIndicators(piece.possibleTakes);
    }
    this.showValidMoveIndicators(piece.validMoves);
    this.removeValidMoveIndicatorsWhenTakeIndicator(piece);
  }

  onRookClicked(space: Position): void {
    this.clearValidMoveIndicators();
    let piece: Piece = space.piece;
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    this.spaceInContext = space;
    let possibleMoves: Position[] = [];
    let right: number = 104 - space.file.charCodeAt(0);
    for (let i = 1; i <= right; i++) {
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank)!
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    let left: number = space.file.charCodeAt(0) - 97;
    for (let i = 1; i <= left; i++) {
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank)!
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    let up: number = 8 - space.rank;
    for (let i = 1; i <= up; i++) {
      let potentialMove: Position = this.positions.find(x => x.file === space.file && x.rank === space.rank + i)!;
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    let down: number = space.rank - 1;
    for (let i = 1; i <= down; i++) {
      let potentialMove: Position = this.positions.find(x => x.file === space.file && x.rank === space.rank - i)!;
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    possibleMoves.forEach(move => {
      if (!move) return;
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
        piece.validMoves.push(move);
      }
      if (move.hasPiece) {
        if (move.piece.color === piece.color) {
          piece.validMoves.splice(piece.validMoves.indexOf(move));
        } else {
          piece.possibleTakes.push(move);
        }
      }
    });
    if (piece.possibleTakes.length > 0) {
      this.showPossibleTakeIndicators(piece.possibleTakes);
    }
    this.showValidMoveIndicators(piece.validMoves);
    this.removeValidMoveIndicatorsWhenTakeIndicator(piece);
  }

  onBishopClicked(space: Position): void {
    this.clearValidMoveIndicators();
    let piece: Piece = space.piece;
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    this.spaceInContext = space;
    let possibleMoves: Position[] = [];
    let right: number = 104 - space.file.charCodeAt(0);
    for (let i = 1; i <= right; i++) { // upper right
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank + i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;
      }
    }
    for (let i = 1; i <= right; i++) { // lower right
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank - i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;        
      }
    }
    let left: number = space.file.charCodeAt(0) - 97;
    for (let i = 1; i <= left; i++) { // upper left
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank + i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;
      }
    }
    for (let i = 1; i <= left; i++) { // lower right
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank - i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;
      }
    }    
    possibleMoves.forEach(move => {
      if (!move) return;
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
        piece.validMoves.push(move);
      }
      if (move.hasPiece) {
        if (move.piece.color === piece.color) {
          piece.validMoves.splice(piece.validMoves.indexOf(move));
        } else {
          piece.possibleTakes.push(move);
        }
      }
    });
    if (piece.possibleTakes.length > 0) {
      this.showPossibleTakeIndicators(piece.possibleTakes);
    }
    this.showValidMoveIndicators(piece.validMoves);
    this.removeValidMoveIndicatorsWhenTakeIndicator(piece);
  }

  onQueenClicked(space: Position): void {
    this.clearValidMoveIndicators();
    let piece: Piece = space.piece;
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    this.spaceInContext = space;
    let possibleMoves: Position[] = [];
    let right: number = 104 - space.file.charCodeAt(0);
    for (let i = 1; i <= right; i++) { // upper right
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank + i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;
      }
    }
    for (let i = 1; i <= right; i++) { // lower right
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank - i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;        
      }
    }
    let left: number = space.file.charCodeAt(0) - 97;
    for (let i = 1; i <= left; i++) { // upper left
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank + i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;
      }
    }
    for (let i = 1; i <= left; i++) { // lower right
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank - i)!
      if (potentialMove) {
        possibleMoves.push(potentialMove);
        if (potentialMove.hasPiece) break;
      }
    }
    for (let i = 1; i <= right; i++) {
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank)!
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    for (let i = 1; i <= left; i++) {
      let potentialMove: Position = this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank)!
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    let up: number = 8 - space.rank;
    for (let i = 1; i <= up; i++) {
      let potentialMove: Position = this.positions.find(x => x.file === space.file && x.rank === space.rank + i)!;
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    let down: number = space.rank - 1;
    for (let i = 1; i <= down; i++) {
      let potentialMove: Position = this.positions.find(x => x.file === space.file && x.rank === space.rank - i)!;
      possibleMoves.push(potentialMove);
      if (potentialMove.hasPiece) break;
    }
    possibleMoves.forEach(move => {
      if (!move) return;
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
        piece.validMoves.push(move);
      }
      if (move.hasPiece) {
        if (move.piece.color === piece.color) {
          piece.validMoves.splice(piece.validMoves.indexOf(move));
        } else {
          piece.possibleTakes.push(move);
        }
      }
    });
    if (piece.possibleTakes.length > 0) {
      this.showPossibleTakeIndicators(piece.possibleTakes);
    }
    this.showValidMoveIndicators(piece.validMoves);
    this.removeValidMoveIndicatorsWhenTakeIndicator(piece);
  }

  onKingClicked(space: Position): void {
    this.clearValidMoveIndicators();
    let piece: Piece = space.piece;
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    this.spaceInContext = space;
    let possibleMoves: Position[] = [];
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) && x.rank === space.rank + 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) && x.rank === space.rank - 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 1)!);
    possibleMoves.forEach(move => {
      if (!move) return;
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
        piece.validMoves.push(move);
      }
      if (move.hasPiece) {
        if (move.piece.color === piece.color) {
          piece.validMoves.splice(piece.validMoves.indexOf(move));
        } else {
          piece.possibleTakes.push(move);
        }
      }
    });
    if (piece.possibleTakes.length > 0) {
      this.showPossibleTakeIndicators(piece.possibleTakes);
    }
    this.showValidMoveIndicators(piece.validMoves);
    this.removeValidMoveIndicatorsWhenTakeIndicator(piece);
  }

  showValidMoveIndicators(spaces: Position[]): void {
    spaces.forEach(space => {
      let id = `${space.file}${space.rank}-ind`
      document.getElementById(id)!.style.display = 'block';
    });
  }

  showPossibleTakeIndicators(spaces: Position[]): void {
    spaces.forEach(space => {
      let id = `${space.file}${space.rank}-capture-ind`
      document.getElementById(id)!.style.display = 'block';
    });
  }

  clearValidMoveIndicators(): void {
    let allSpaces = document.getElementsByClassName('indicator') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < allSpaces.length; i++) {
      let element = allSpaces[i];
      element.style.display = 'none';
    }
  }

  removeValidMoveIndicatorsWhenTakeIndicator(piece: Piece): void {
    piece.validMoves.forEach(validMove => {
      piece.possibleTakes.forEach(possibleTake => {
        if (validMove.file === possibleTake.file && validMove.rank === possibleTake.rank) {
          let id = `${validMove.file}${validMove.rank}-ind`
          document.getElementById(id)!.style.display = 'none';
        }
      });
    });
  }

}
