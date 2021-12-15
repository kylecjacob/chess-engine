import { Position } from './Position';

export class Piece {
    type: string = '';
    position: Position = new Position();
    validMoves: Position[] = [];
    color: string = '';

    constructor();
    constructor(type: string, position: Position, color: string);
    constructor(type?: string, position?: Position, color?: string) {
        this.type = type!;
        this.position = position!;
        this.color = color!;
    }
}