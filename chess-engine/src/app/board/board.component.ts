import { Component, OnInit } from '@angular/core';
import { Pawn } from '../models/Pawn';
import { Piece } from '../models/Piece';
import { Position } from '../models/Position';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  pieceClicked: boolean = false;
  pieceInContext: Piece = new Piece();

  a2Pawn: Pawn = new Pawn(new Position('a', 2), 'white');
  b2Pawn: Pawn = new Pawn(new Position('b', 2), 'white');
  c2Pawn: Pawn = new Pawn(new Position('c', 2), 'white');
  d2Pawn: Pawn = new Pawn(new Position('d', 2), 'white');
  e2Pawn: Pawn = new Pawn(new Position('e', 2), 'white');
  f2Pawn: Pawn = new Pawn(new Position('f', 2), 'white');
  g2Pawn: Pawn = new Pawn(new Position('g', 2), 'white');
  h2Pawn: Pawn = new Pawn(new Position('h', 2), 'white');
  constructor() { }

  ngOnInit(): void {
  }

  spaceClicked(space: string) {
    // if there is a piece here, figure out what piece it is
    // call the corresponding method 
    console.log(space);
  }

  onPawnClicked(piece: Pawn) {
    this.clearValidMoveIndicators();
    if (piece == this.pieceInContext && this.pieceClicked) {
      this.pieceClicked = false
      return;
    }
    this.pieceClicked = true;
    this.pieceInContext = piece;
    // Make sure that there isn't another piece here
    piece.validMoves.push(new Position(piece.position.file, piece.position.rank + 1));
    if (piece.position.rank == 2 && piece.color === 'white') {
      piece.validMoves.push(new Position(piece.position.file, piece.position.rank + 2));
    }
    this.showValidMoveIndicators(piece.validMoves);
  }

  showValidMoveIndicators(spaces: Position[]) {
    spaces.forEach(space => {
      let id = `${space.file}${space.rank}-ind`
      let element = document.getElementById(id)
      if (element) element.style.display = 'block';
    });
  }

  clearValidMoveIndicators() {
    let allSpaces = document.getElementsByClassName('indicator') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < allSpaces.length; i++) {
      let element = allSpaces[i];
      element.style.display = 'none';
    }
  }

}
