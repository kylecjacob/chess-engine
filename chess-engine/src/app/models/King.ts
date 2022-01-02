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
        
        // King side castle
        let h1Rook = positions.find(x => x.file === 'h' && x.rank === 1)!;
        if (!this.touched && h1Rook.hasPiece && !h1Rook.piece.touched) {
            let move1: Position = positions.find(x => x.file === 'f' && x.rank === 1)!;
            let move2: Position = positions.find(x => x.file === 'g' && x.rank === 1)!;
            if (!move1.hasPiece && !move2.hasPiece) {
                this.possibleMoves.push(move2);
            }
        }
        // Queen side castle 
        let a1Rook = positions.find(x => x.file === 'a' && x.rank === 1)!;
        if (!this.touched && a1Rook.hasPiece && !a1Rook.piece.touched) {
            let move1: Position = positions.find(x => x.file === 'd' && x.rank === 1)!;
            let move2: Position = positions.find(x => x.file === 'c' && x.rank === 1)!;
            if (!move1.hasPiece && !move2.hasPiece) {
                this.possibleMoves.push(move2);
            }
        }
        this.setMoves();
    }
}