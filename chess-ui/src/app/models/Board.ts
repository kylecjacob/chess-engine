import { Bishop } from "./Bishop";
import { Coordinates } from "./Coordinates";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Position } from "./Position";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

export class Board {
    positions: Position[] = [];

    constructor() {
        this.positions.push(new Position('a', 1, new Coordinates(781, 168), true, new Rook('rook', 'white', 'a1-rook')));
        this.positions.push(new Position('b', 1, new Coordinates(781, 270), true, new Knight('knight', 'white', 'b1-knight')));
        this.positions.push(new Position('c', 1, new Coordinates(781, 372), true, new Bishop('bishop', 'white', 'c1-bishop')));
        this.positions.push(new Position('d', 1, new Coordinates(781, 474), true, new Queen('queen', 'white', 'white-queen')));
        this.positions.push(new Position('e', 1, new Coordinates(781, 576), true, new King('king', 'white', 'white-king')));
        this.positions.push(new Position('f', 1, new Coordinates(781, 678), true, new Bishop('bishop', 'white', 'f1-bishop')));
        this.positions.push(new Position('g', 1, new Coordinates(781, 780), true, new Knight('knight', 'white', 'g1-knight')));
        this.positions.push(new Position('h', 1, new Coordinates(781, 882), true, new Rook('rook', 'white', 'h1-rook')));

        this.positions.push(new Position('a', 2, new Coordinates(679, 168), true, new Pawn('pawn', 'white', 'a2-pawn')));
        this.positions.push(new Position('b', 2, new Coordinates(679, 270), true, new Pawn('pawn', 'white', 'b2-pawn')));
        this.positions.push(new Position('c', 2, new Coordinates(679, 372), true, new Pawn('pawn', 'white', 'c2-pawn')));
        this.positions.push(new Position('d', 2, new Coordinates(679, 474), true, new Pawn('pawn', 'white', 'd2-pawn')));
        this.positions.push(new Position('e', 2, new Coordinates(679, 576), true, new Pawn('pawn', 'white', 'e2-pawn')));
        this.positions.push(new Position('f', 2, new Coordinates(679, 678), true, new Pawn('pawn', 'white', 'f2-pawn')));
        this.positions.push(new Position('g', 2, new Coordinates(679, 780), true, new Pawn('pawn', 'white', 'g2-pawn')));
        this.positions.push(new Position('h', 2, new Coordinates(679, 882), true, new Pawn('pawn', 'white', 'h2-pawn')));

        this.positions.push(new Position('a', 3, new Coordinates(577, 168), false));
        this.positions.push(new Position('b', 3, new Coordinates(577, 270), false));
        this.positions.push(new Position('c', 3, new Coordinates(577, 372), false));
        this.positions.push(new Position('d', 3, new Coordinates(577, 474), false));
        this.positions.push(new Position('e', 3, new Coordinates(577, 576), false));
        this.positions.push(new Position('f', 3, new Coordinates(577, 678), false));
        this.positions.push(new Position('g', 3, new Coordinates(577, 780), false));
        this.positions.push(new Position('h', 3, new Coordinates(577, 882), false));

        this.positions.push(new Position('a', 4, new Coordinates(475, 168), false));
        this.positions.push(new Position('b', 4, new Coordinates(475, 270), false));
        this.positions.push(new Position('c', 4, new Coordinates(475, 372), false));
        this.positions.push(new Position('d', 4, new Coordinates(475, 474), false));
        this.positions.push(new Position('e', 4, new Coordinates(475, 576), false));
        this.positions.push(new Position('f', 4, new Coordinates(475, 678), false));
        this.positions.push(new Position('g', 4, new Coordinates(475, 780), false));
        this.positions.push(new Position('h', 4, new Coordinates(475, 882), false));

        this.positions.push(new Position('a', 5, new Coordinates(373, 168), false));
        this.positions.push(new Position('b', 5, new Coordinates(373, 270), false));
        this.positions.push(new Position('c', 5, new Coordinates(373, 372), false));
        this.positions.push(new Position('d', 5, new Coordinates(373, 474), false));
        this.positions.push(new Position('e', 5, new Coordinates(373, 576), false));
        this.positions.push(new Position('f', 5, new Coordinates(373, 678), false));
        this.positions.push(new Position('g', 5, new Coordinates(373, 780), false));
        this.positions.push(new Position('h', 5, new Coordinates(373, 882), false));

        this.positions.push(new Position('a', 6, new Coordinates(271, 168), false));
        this.positions.push(new Position('b', 6, new Coordinates(271, 270), false));
        this.positions.push(new Position('c', 6, new Coordinates(271, 372), false));
        this.positions.push(new Position('d', 6, new Coordinates(271, 474), false));
        this.positions.push(new Position('e', 6, new Coordinates(271, 576), false));
        this.positions.push(new Position('f', 6, new Coordinates(271, 678), false));
        this.positions.push(new Position('g', 6, new Coordinates(271, 780), false));
        this.positions.push(new Position('h', 6, new Coordinates(271, 882), false));

        this.positions.push(new Position('a', 7, new Coordinates(169, 168), true, new Pawn('pawn', 'black', 'a7-pawn')));
        this.positions.push(new Position('b', 7, new Coordinates(169, 270), true, new Pawn('pawn', 'black', 'b7-pawn')));
        this.positions.push(new Position('c', 7, new Coordinates(169, 372), true, new Pawn('pawn', 'black', 'c7-pawn')));
        this.positions.push(new Position('d', 7, new Coordinates(169, 474), true, new Pawn('pawn', 'black', 'd7-pawn')));
        this.positions.push(new Position('e', 7, new Coordinates(169, 576), true, new Pawn('pawn', 'black', 'e7-pawn')));
        this.positions.push(new Position('f', 7, new Coordinates(169, 678), true, new Pawn('pawn', 'black', 'f7-pawn')));
        this.positions.push(new Position('g', 7, new Coordinates(169, 780), true, new Pawn('pawn', 'black', 'g7-pawn')));
        this.positions.push(new Position('h', 7, new Coordinates(169, 882), true, new Pawn('pawn', 'black', 'h7-pawn')));

        this.positions.push(new Position('a', 8, new Coordinates(67, 168), true, new Rook('rook', 'black', 'a8-rook')));
        this.positions.push(new Position('b', 8, new Coordinates(67, 270), true, new Knight('knight', 'black', 'b8-knight')));
        this.positions.push(new Position('c', 8, new Coordinates(67, 372), true, new Bishop('bishop', 'black', 'c8-bishop')));
        this.positions.push(new Position('d', 8, new Coordinates(67, 474), true, new Queen('queen', 'black', 'black-queen')));
        this.positions.push(new Position('e', 8, new Coordinates(67, 576), true, new King('king', 'black', 'black-king')));
        this.positions.push(new Position('f', 8, new Coordinates(67, 678), true, new Bishop('bishop', 'black', 'f8-bishop')));
        this.positions.push(new Position('g', 8, new Coordinates(67, 780), true, new Knight('knight', 'black', 'g8-knight')));
        this.positions.push(new Position('h', 8, new Coordinates(67, 882), true, new Rook('rook', 'black', 'h8-rook')));
    }

    getPosition(file: string, rank: number): Position {
        return this.positions.find(x => x.file === file && x.rank === rank)!;
    }

    getCpuPositionsWithMoves(): Position[] {
        return this.positions.filter(x => x.hasPiece && x.piece.color === 'black' && x.piece.validMoves.length > 0);
    }

    getCpuMoves(): void {
        this.positions.filter(x => x.hasPiece && x.piece.color === 'black').forEach(position => {
          position.piece.getMoves(this.positions, position);
        });
    }
}