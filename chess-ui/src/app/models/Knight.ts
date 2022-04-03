import { Piece } from './Piece';
import { Position } from './Position';

export class Knight extends Piece {
    getMoves(positions: Position[], space: Position): void {
        if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 2)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 2)!.toString());
        } if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 2)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 2)!.toString());
        }
        if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 2 && x.rank === space.rank + 1)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 2 && x.rank === space.rank + 1)!.toString());
        }
        if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 2 && x.rank === space.rank + 1)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 2 && x.rank === space.rank + 1)!.toString());
        }
        if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 2)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 2)!.toString());
        }
        if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 2)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 2)!.toString());        
        }
        if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 2 && x.rank === space.rank - 1)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 2 && x.rank === space.rank - 1)!.toString());        
        }
        if (positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 2 && x.rank === space.rank - 1)) {
            this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 2 && x.rank === space.rank - 1)!.toString());
        }
        this.setMoves(positions);
    }
}