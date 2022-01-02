import { Piece } from './Piece';
import { Position } from './Position';

export class Queen extends Piece {
    getMoves(positions: Position[], space: Position): void {
        this.getHorizontalAndVerticalMoves(positions, space);
        this.getDiagonalMoves(positions, space);
        this.setMoves();
    }
}