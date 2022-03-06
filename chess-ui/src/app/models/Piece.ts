import { Position } from './Position';

export abstract class Piece {
    type: string = '';
    validMoves: Position[] = [];
    color: string = '';
    identifier: string = '';
    possibleTakes: Position[] = [];
    possibleMoves: Position[] = [];
    touched: boolean = false;

    constructor();
    constructor(type: string, color: string, identifier: string);
    constructor(type?: string, color?: string, identifier?: string) {
        this.type = type!;
        this.color = color!;
        this.identifier = identifier!;
    }

    abstract getMoves(positions: Position[], space: Position): void;

    showIndicators(): void {
        // show valid move indicators
        this.validMoves.forEach(space => {
            let id = `${space.file}${space.rank}-ind`
            document.getElementById(id)!.style.display = 'block';
        });
        // show possible take indicators 
        this.possibleTakes.forEach(space => {
            let id = `${space.file}${space.rank}-capture-ind`
            document.getElementById(id)!.style.display = 'block';
        });
        // Remove valid move indicator when possible take 
        this.validMoves.forEach(validMove => {
            this.possibleTakes.forEach(possibleTake => {
              if (validMove.file === possibleTake.file && validMove.rank === possibleTake.rank) {
                let id = `${validMove.file}${validMove.rank}-ind`
                document.getElementById(id)!.style.display = 'none';
              }
            });
        });
    }

    getHorizontalAndVerticalMoves(positions: Position[],  space: Position): void {
        let right: number = 104 - space.file.charCodeAt(0);
        for (let i = 1; i <= right; i++) {
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank)!
            this.possibleMoves.push(potentialMove);
            if (potentialMove.hasPiece) break;
        }
        let left: number = space.file.charCodeAt(0) - 97;
        for (let i = 1; i <= left; i++) {
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank)!
            this.possibleMoves.push(potentialMove);
            if (potentialMove.hasPiece) break;
        }
        let up: number = 8 - space.rank;
        for (let i = 1; i <= up; i++) {
            let potentialMove: Position = positions.find(x => x.file === space.file && x.rank === space.rank + i)!;
            this.possibleMoves.push(potentialMove);
            if (potentialMove.hasPiece) break;
        }
        let down: number = space.rank - 1;
        for (let i = 1; i <= down; i++) {
            let potentialMove: Position = positions.find(x => x.file === space.file && x.rank === space.rank - i)!;
            this.possibleMoves.push(potentialMove);
            if (potentialMove.hasPiece) break;
        }
    }

    getDiagonalMoves(positions: Position[], space: Position): void {
        let right: number = 104 - space.file.charCodeAt(0);
        for (let i = 1; i <= right; i++) { // upper right
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank + i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove);
                if (potentialMove.hasPiece) break;
            }
        }
        for (let i = 1; i <= right; i++) { // lower right
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank - i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove);
                if (potentialMove.hasPiece) break;        
            }
        }
        let left: number = space.file.charCodeAt(0) - 97;
        for (let i = 1; i <= left; i++) { // upper left
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank + i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove);
                if (potentialMove.hasPiece) break;
            }
        }
        for (let i = 1; i <= left; i++) { // lower right
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank - i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove);
                if (potentialMove.hasPiece) break;
            }
        }
    }

    setMoves(): void {
        this.possibleMoves.forEach(move => {
            if (!move) return;
            if (move.file.charCodeAt(0) >= 'a'.charCodeAt(0) && move.file.charCodeAt(0) <= 'h'.charCodeAt(0) && move.rank >= 1 && move.rank <= 8) {    
                this.validMoves.push(move);
            }
            if (move.hasPiece) {
                if (move.piece.color === this.color) {
                    this.validMoves.splice(this.validMoves.indexOf(move));
                } else {
                    this.possibleTakes.push(move);
                }
            }
        });
    }
}