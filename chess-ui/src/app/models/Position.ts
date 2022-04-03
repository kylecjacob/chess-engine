import { Coordinates } from "./Coordinates";
import { Piece } from "./Piece";

export class Position {
    rank: number = 0;
    file: string = '';
    location: Coordinates = new Coordinates();
    hasPiece: boolean = false;
    piece: Piece;

    constructor();
    constructor(file: string, rank: number, location: Coordinates, hasPiece: boolean, piece: Piece)
    constructor(file: string, rank: number, location: Coordinates, hasPiece: boolean)
    constructor(file?: string, rank?: number, location?: Coordinates, hasPiece?: boolean, piece?: Piece) {
        this.rank = rank!;
        this.file = file!;
        this.location = location!;
        this.hasPiece = hasPiece!;
        this.piece = piece!;
    }

    toString(): string {
        return `${this.file}${this.rank}`;
    }
}