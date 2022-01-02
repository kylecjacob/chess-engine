import { Piece } from './Piece';
import { Position } from './Position';

export class King extends Piece {
    getMoves(positions: Position[], space: Position): void {
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) && x.rank === space.rank + 1)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) && x.rank === space.rank - 1)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank + 1)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + 1 && x.rank === space.rank - 1)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank + 1)!);
        this.possibleMoves.push(positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - 1 && x.rank === space.rank - 1)!);
        this.setMoves();
    }
}