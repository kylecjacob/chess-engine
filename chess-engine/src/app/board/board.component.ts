import { Component, OnInit } from '@angular/core';
import { IPawn, Pawn } from '../models/Pawn';
import { IPiece, Piece } from '../models/Piece';
import { Position } from '../models/Position';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  a2Pawn: IPiece = new Piece('pawn', new Position());
  constructor() { }

  ngOnInit(): void {
  }

  pieceClicked(piece: Piece) {
    if (piece.type === 'pawn') {
      console.log(piece.type, 'clicked at position', piece.position);
      piece.validMoves.push('a3');
      // if (piece.)
    }
  }

}
