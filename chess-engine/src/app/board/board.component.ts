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
  pieceInContext?: Piece = new Piece();
  pieces: Piece[] = [];
  positions: Position[] = [];

  a1: Position = new Position('a', 1, new Coordinates(781, 168));
  b1: Position = new Position('b', 1, new Coordinates(781, 270));
  c1: Position = new Position('c', 1, new Coordinates(781, 372));
  d1: Position = new Position('d', 1, new Coordinates(781, 474));
  e1: Position = new Position('e', 1, new Coordinates(781, 576));
  f1: Position = new Position('f', 1, new Coordinates(781, 678));
  g1: Position = new Position('g', 1, new Coordinates(781, 780));
  h1: Position = new Position('h', 1, new Coordinates(781, 882));

  a2: Position = new Position('a', 2, new Coordinates(679, 168));
  b2: Position = new Position('b', 2, new Coordinates(679, 270));
  c2: Position = new Position('c', 2, new Coordinates(679, 372));
  d2: Position = new Position('d', 2, new Coordinates(679, 474));
  e2: Position = new Position('e', 2, new Coordinates(679, 576));
  f2: Position = new Position('f', 2, new Coordinates(679, 678));
  g2: Position = new Position('g', 2, new Coordinates(679, 780));
  h2: Position = new Position('h', 2, new Coordinates(679, 882));

  a3: Position = new Position('a', 3, new Coordinates(577, 168));
  b3: Position = new Position('b', 3, new Coordinates(577, 270));
  c3: Position = new Position('c', 3, new Coordinates(577, 372));
  d3: Position = new Position('d', 3, new Coordinates(577, 474));
  e3: Position = new Position('e', 3, new Coordinates(577, 576));
  f3: Position = new Position('f', 3, new Coordinates(577, 678));
  g3: Position = new Position('g', 3, new Coordinates(577, 780));
  h3: Position = new Position('h', 3, new Coordinates(577, 882));

  a4: Position = new Position('a', 4, new Coordinates(475, 168));
  b4: Position = new Position('b', 4, new Coordinates(475, 270));
  c4: Position = new Position('c', 4, new Coordinates(475, 372));
  d4: Position = new Position('d', 4, new Coordinates(475, 474));
  e4: Position = new Position('e', 4, new Coordinates(475, 576));
  f4: Position = new Position('f', 4, new Coordinates(475, 678));
  g4: Position = new Position('g', 4, new Coordinates(475, 780));
  h4: Position = new Position('h', 4, new Coordinates(475, 882));

  a5: Position = new Position('a', 5, new Coordinates(373, 168));
  b5: Position = new Position('b', 5, new Coordinates(373, 270));
  c5: Position = new Position('c', 5, new Coordinates(373, 372));
  d5: Position = new Position('d', 5, new Coordinates(373, 474));
  e5: Position = new Position('e', 5, new Coordinates(373, 576));
  f5: Position = new Position('f', 5, new Coordinates(373, 678));
  g5: Position = new Position('g', 5, new Coordinates(373, 780));
  h5: Position = new Position('h', 5, new Coordinates(373, 882));

  a6: Position = new Position('a', 6, new Coordinates(271, 168));
  b6: Position = new Position('b', 6, new Coordinates(271, 270));
  c6: Position = new Position('c', 6, new Coordinates(271, 372));
  d6: Position = new Position('d', 6, new Coordinates(271, 474));
  e6: Position = new Position('e', 6, new Coordinates(271, 576));
  f6: Position = new Position('f', 6, new Coordinates(271, 678));
  g6: Position = new Position('g', 6, new Coordinates(271, 780));
  h6: Position = new Position('h', 6, new Coordinates(271, 882));

  a7: Position = new Position('a', 7, new Coordinates(169, 168));
  b7: Position = new Position('b', 7, new Coordinates(169, 270));
  c7: Position = new Position('c', 7, new Coordinates(169, 372));
  d7: Position = new Position('d', 7, new Coordinates(169, 474));
  e7: Position = new Position('e', 7, new Coordinates(169, 576));
  f7: Position = new Position('f', 7, new Coordinates(169, 678));
  g7: Position = new Position('g', 7, new Coordinates(169, 780));
  h7: Position = new Position('h', 7, new Coordinates(169, 882));

  a8: Position = new Position('a', 8, new Coordinates(67, 168));
  b8: Position = new Position('b', 8, new Coordinates(67, 270));
  c8: Position = new Position('c', 8, new Coordinates(67, 372));
  d8: Position = new Position('d', 8, new Coordinates(67, 474));
  e8: Position = new Position('e', 8, new Coordinates(67, 576));
  f8: Position = new Position('f', 8, new Coordinates(67, 678));
  g8: Position = new Position('g', 8, new Coordinates(67, 780));
  h8: Position = new Position('h', 8, new Coordinates(67, 882));

  constructor() { }

  ngOnInit(): void {
    this.pieces.push(new Piece('rook', this.a1, 'white', 'a1-rook'));
    this.pieces.push(new Piece('rook', this.h1, 'white', 'h1-rook'));
    this.pieces.push(new Piece('rook', this.a8, 'black', 'a8-rook'));
    this.pieces.push(new Piece('rook', this.h8, 'black', 'h8-rook'));

    this.pieces.push(new Piece('knight', this.b1, 'white', 'b1-knight'));
    this.pieces.push(new Piece('knight', this.g1, 'white', 'g1-knight'));
    this.pieces.push(new Piece('knight', this.b8, 'black', 'b8-knight'));
    this.pieces.push(new Piece('knight', this.g8, 'black', 'g8-knight'));

    this.pieces.push(new Piece('bishop', this.c1, 'white', 'c1-bishop'));
    this.pieces.push(new Piece('bishop', this.f1, 'white', 'f1-bishop'));
    this.pieces.push(new Piece('bishop', this.c8, 'black', 'c8-bishop'));
    this.pieces.push(new Piece('bishop', this.f8, 'black', 'f8-bishop'));

    this.pieces.push(new Piece('queen', this.d1, 'white', 'white-queen'));
    this.pieces.push(new Piece('queen', this.d8, 'black', 'black-queen'));

    this.pieces.push(new Piece('king', this.e1, 'white', 'white-king'));
    this.pieces.push(new Piece('king', this.e8, 'black', 'black-king'));

    this.pieces.push(new Piece('pawn', this.a2, 'white', 'a2-pawn'));
    this.pieces.push(new Piece('pawn', this.b2, 'white', 'b2-pawn'));
    this.pieces.push(new Piece('pawn', this.c2, 'white', 'c2-pawn'));
    this.pieces.push(new Piece('pawn', this.d2, 'white', 'd2-pawn'));
    this.pieces.push(new Piece('pawn', this.e2, 'white', 'e2-pawn'));
    this.pieces.push(new Piece('pawn', this.f2, 'white', 'f2-pawn'));
    this.pieces.push(new Piece('pawn', this.g2, 'white', 'g2-pawn'));
    this.pieces.push(new Piece('pawn', this.h2, 'white', 'h2-pawn'));

    this.pieces.push(new Piece('pawn', this.a7, 'black', 'a7-pawn'));
    this.pieces.push(new Piece('pawn', this.b7, 'black', 'b7-pawn'));
    this.pieces.push(new Piece('pawn', this.c7, 'black', 'c7-pawn'));
    this.pieces.push(new Piece('pawn', this.d7, 'black', 'd7-pawn'));
    this.pieces.push(new Piece('pawn', this.e7, 'black', 'e7-pawn'));
    this.pieces.push(new Piece('pawn', this.f7, 'black', 'f7-pawn'));
    this.pieces.push(new Piece('pawn', this.g7, 'black', 'g7-pawn'));
    this.pieces.push(new Piece('pawn', this.h7, 'black', 'h7-pawn'));

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

  isPieceOnSpace(space: Position): boolean {
    for (let i = 0; i < this.pieces.length; i++) {
      if (this.pieces[i].position.file === space.file && this.pieces[i].position.rank === space.rank) {
        return true;
      }
    }
    return false;
  }

  onSpaceClicked(space: Position): void {
    this.pieces.forEach(piece => {
      if (piece.position.file === space.file && piece.position.rank === space.rank) {
        switch (piece.type) {
          case 'pawn':
            this.onPawnClicked(piece);
            break;
          case 'knight':
            this.onKnightClicked(piece);
            break;
        }
      }
    });
    // if not then check if there is a piece in context and if it's a valid move
    if (this.pieceClicked && this.pieceInContext) {
      if (this.pieceInContext.validMoves.includes(space)) {
        if (this.pieceInContext.possibleTakes.includes(space)) {
          let original: Piece = this.pieces.find(x => x.position.file === space.file && x.position.rank === space.rank)!;
          document.getElementById(original.identifier)!.style.display = 'none';
        }
        this.pieceInContext.position = space;
        let piece = document.getElementById(this.pieceInContext.identifier)!;
        piece.style.top = `${space.location.y}px`;
        piece.style.left = `${space.location.x}px`;
        this.clearValidMoveIndicators();
        this.pieceClicked = false;
        this.pieceInContext = undefined;
      }
    }
  }

  onPawnClicked(piece: Piece): void {
    this.clearValidMoveIndicators();
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    let possibleMoves: Position[] = [];
    if (piece.color === 'white') {
      possibleMoves.push(this.positions.find(x => x.file === piece.position.file && x.rank === piece.position.rank + 1)!);
      if (piece.position.rank == 2) {
        possibleMoves.push(this.positions.find(x => x.file === piece.position.file && x.rank === piece.position.rank + 2)!);
      }
    } else {
      possibleMoves.push(this.positions.find(x => x.file === piece.position.file && x.rank === piece.position.rank - 1)!);
      if (piece.position.rank == 7) {
        possibleMoves.push(this.positions.find(x => x.file === piece.position.file && x.rank === piece.position.rank - 2)!);
      }
    }
    possibleMoves.forEach(move => {
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
        piece.validMoves.push(move);
      }
      this.pieces.forEach(x => {
        if (x.position.file === move.file && x.position.rank === move.rank) {
          piece.validMoves.splice(piece.validMoves.indexOf(x.position));
        } else if (x.position.rank === move.rank && (x.position.file.charCodeAt(0) === move.file.charCodeAt(0) + 1 || x.position.file.charCodeAt(0) === move.file.charCodeAt(0) - 1)) {
          piece.possibleTakes.push(x.position);
        }
      });
    });
    if (piece.possibleTakes.length > 0) {
      this.showPossibleTakeIndicators(piece.possibleTakes);
    }
    this.showValidMoveIndicators(piece.validMoves);
    this.removeValidMoveIndicatorsWhenTakeIndicator(piece);
  }

  onKnightClicked(piece: Piece): void {
    this.clearValidMoveIndicators();
    piece.validMoves = [];
    piece.possibleTakes = [];
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    let possibleMoves: Position[] = [];
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) + 1 && x.rank === piece.position.rank + 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) - 1 && x.rank === piece.position.rank + 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) - 2 && x.rank === piece.position.rank + 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) + 2 && x.rank === piece.position.rank + 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) + 1 && x.rank === piece.position.rank - 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) - 1 && x.rank === piece.position.rank - 2)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) - 2 && x.rank === piece.position.rank - 1)!);
    possibleMoves.push(this.positions.find(x => x.file.charCodeAt(0) === piece.position.file.charCodeAt(0) + 2 && x.rank === piece.position.rank - 1)!);
    possibleMoves.forEach(move => {
      if (!move) return;
      if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
        piece.validMoves.push(move);
      }
      this.pieces.forEach(x => {
        if (x.position.file === move.file && x.position.rank === move.rank) {
          if (x.color === piece.color) {
            piece.validMoves.splice(piece.validMoves.indexOf(x.position));
          } else {
            piece.possibleTakes.push(x.position);
          }
        }
      });
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
