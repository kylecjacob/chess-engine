import { IPosition, Position } from "./Position";

export interface IPiece {
    type: string;
    position: Position;
    validMoves: string[];
}

export class Piece implements IPiece {
    type: string = '';
    position: IPosition = new Position();
    validMoves: string[] = [];

    constructor(type: string, position: Position) {
        this.type = type;
        this.position = position;
    }
}