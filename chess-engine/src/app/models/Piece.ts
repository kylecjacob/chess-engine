import { Position } from './Position';

export class Piece {
    type: string = '';
    position: Position = new Position();
    validMoves: Position[] = [];
    color: string = '';
    identifier: string = '';

    constructor();
    constructor(type: string, position: Position, color: string, identifier: string);
    constructor(type?: string, position?: Position, color?: string, identifier?: string) {
        this.type = type!;
        this.position = position!;
        this.color = color!;
        this.identifier = identifier!;
    }
}