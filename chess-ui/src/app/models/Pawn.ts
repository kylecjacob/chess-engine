import { Piece } from './Piece';
import { Position } from './Position';

export class Pawn extends Piece {
    getMoves(positions: Position[], space: Position): void {
        if (this.color === 'white') {
            if (positions.find(x => x.file === space.file && x.rank === space.rank + 1)) {
                this.possibleMoves.push(positions.find(x => x.file === space.file && x.rank === space.rank + 1)!.toString());            
            }
            if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 1)) {
                this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 1)!.toString());            
            }
            if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 1)) {
                this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 1)!.toString());
            }
            if (space.rank == 2 && !positions.find(x => x.file === space.file && x.rank === space.rank + 1)!.hasPiece) {
                this.possibleMoves.push(positions.find(x => x.file === space.file && x.rank === space.rank + 2)!.toString());
            }
        } else {
            if (positions.find(x => x.file === space.file && x.rank === space.rank - 1)!.toString()) {
                this.possibleMoves.push(positions.find(x => x.file === space.file && x.rank === space.rank - 1)!.toString());
            }
            if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 1)) {
                this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 1)!.toString());            
            }
            if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 1)) {
                this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 1)!.toString());
            }
            if (space.rank == 7 && !positions.find(x => x.file === space.file && x.rank === space.rank - 1)!.hasPiece) {
                this.possibleMoves.push(positions.find(x => x.file === space.file && x.rank === space.rank - 2)!.toString());
            }
        }
        this.possibleMoves.forEach(move => {
            let position = positions.find(x => x.file === move[0] && x.rank === parseInt(move[1]))!;
            if (!position) return;
            if (position.file.charCodeAt(0) >= 'a'.charCodeAt(0) && position.file.charCodeAt(0) <= 'h'.charCodeAt(0) && position.rank >= 1 && position.rank <= 8) {
                this.validMoves.push(move);
            }
            if (position.hasPiece) {
                if (position.piece.color === this.color || position.file === space.file) {
                    this.validMoves.splice(this.validMoves.indexOf(move)); // else if it's black and it's on a diagnal then add it to possile takes
                } else if (position.file.charCodeAt(0) !== space.file.charCodeAt(0)) {
                    this.possibleTakes.push(move);
                }
            } else if (position.file.charCodeAt(0) !== space.file.charCodeAt(0)) {
                this.validMoves.splice(this.validMoves.indexOf(move));
            }
        });
    }
}