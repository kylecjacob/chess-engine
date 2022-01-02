import { Piece } from './Piece';
import { Position } from './Position';

export class Pawn extends Piece {
    getMoves(positions: Position[], space: Position): void {
        this.possibleMoves.push(positions.find(x => x.file === space.file && x.rank === space.rank + 1)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 1)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 1)!);
        if (space.rank == 2) {
            this.possibleMoves.push(positions.find(x => x.file === space.file && x.rank === space.rank + 2)!);
        }
        this.possibleMoves.forEach(move => {
            if (!move) return;
            if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {
                this.validMoves.push(move);
            }
            if (move.hasPiece) {
                if (move.piece.color === this.color || move.file === space.file) {
                    this.validMoves.splice(this.validMoves.indexOf(move)); // else if it's black and it's on a diagnal then add it to possile takes
                } else if (move.file.charCodeAt(0) !== space.file.charCodeAt(0)) {
                    this.possibleTakes.push(move);
                }
            } else if (move.file.charCodeAt(0) !== space.file.charCodeAt(0)) {
                this.validMoves.splice(this.validMoves.indexOf(move));
            }
        });
    }
}