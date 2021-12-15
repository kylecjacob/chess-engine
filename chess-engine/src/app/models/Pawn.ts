import { Piece } from './Piece';
import { Position } from './Position';

export class Pawn extends Piece {
    position: Position = new Position();
    validMoves: Position[] = [];
    color: string = '';

    constructor();
    constructor(position: Position, color: string);
    constructor(position?: Position, color?: string) {
        super();
        this.position = position!;
        this.color = color!;
    }
}