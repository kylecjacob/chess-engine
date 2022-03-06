import { Piece } from './Piece';
import { Position } from './Position';

export class Bishop extends Piece {
    getMoves(positions: Position[], space: Position): void {
        this.getDiagonalMoves(positions, space);
        this.setMoves();
    }
}