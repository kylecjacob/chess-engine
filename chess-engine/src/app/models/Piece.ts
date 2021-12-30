import { Position } from './Position';

export class Piece {
    type: string = '';
    validMoves: Position[] = [];
    color: string = '';
    identifier: string = '';
    possibleTakes: Position[] = [];

    constructor();
    constructor(type: string, color: string, identifier: string);
    constructor(type?: string, color?: string, identifier?: string) {
        this.type = type!;
        this.color = color!;
        this.identifier = identifier!;
    }
}