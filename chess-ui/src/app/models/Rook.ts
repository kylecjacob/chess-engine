import { Piece } from './Piece';
import { Position } from './Position';

export class Rook extends Piece {
    getMoves(positions: Position[], space: Position): void {
        this.getHorizontalAndVerticalMoves(positions, space);
        this.setMoves(positions);
    }
}