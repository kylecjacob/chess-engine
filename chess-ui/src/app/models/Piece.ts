import { Position } from './Position';

export abstract class Piece {
    type: string = '';
    validMoves: string[] = [];
    color: string = '';
    identifier: string = '';
    possibleTakes: string[] = [];
    possibleMoves: string[] = [];
    touched: boolean = false;

    constructor();
    constructor(type: string, color: string, identifier: string, validMoves?: string[], touched?: boolean, possibleMoves?: string[], possibleTakes?: string[]);
    constructor(
        type?: string,
        color?: string,
        identifier?: string,
        validMoves?: string[],
        touched?: boolean,
        possibleMoves?: string[],
        possibleTakes?: string[]) {
            this.type = type!;
            this.color = color!;
            this.identifier = identifier!;
            this.validMoves = validMoves ?? [];
            this.touched = touched ?? false;
            this.possibleMoves = possibleMoves ?? [];
            this.possibleTakes = possibleTakes ?? [];
    }

    abstract getMoves(positions: Position[], space: Position): void;

    showIndicators(): void {
        // show valid move indicators
        this.validMoves.forEach(space => {
            const id = `${space}-ind`
            document.getElementById(id)!.style.display = 'block';
        });
        // show possible take indicators 
        this.possibleTakes.forEach(space => {
            const id = `${space}-capture-ind`
            document.getElementById(id)!.style.display = 'block';
        });
        // Remove valid move indicator when possible take 
        this.validMoves.forEach(validMove => {
            this.possibleTakes.forEach(possibleTake => {
              if (validMove[0] === possibleTake[0] && validMove[1] === possibleTake[1]) {
                let id = `${validMove}-ind`
                document.getElementById(id)!.style.display = 'none';
              }
            });
        });
    }

    getHorizontalAndVerticalMoves(positions: Position[],  space: Position): void {
        let right: number = 104 - space.file.charCodeAt(0);
        for (let i = 1; i <= right; i++) {
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank)!
            this.possibleMoves.push(potentialMove.toString());
            if (potentialMove.hasPiece) break;
        }
        let left: number = space.file.charCodeAt(0) - 97;
        for (let i = 1; i <= left; i++) {
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank)!
            this.possibleMoves.push(potentialMove.toString());
            if (potentialMove.hasPiece) break;
        }
        let up: number = 8 - space.rank;
        for (let i = 1; i <= up; i++) {
            let potentialMove: Position = positions.find(x => x.file === space.file && x.rank === space.rank + i)!;
            this.possibleMoves.push(potentialMove.toString());
            if (potentialMove.hasPiece) break;
        }
        let down: number = space.rank - 1;
        for (let i = 1; i <= down; i++) {
            let potentialMove: Position = positions.find(x => x.file === space.file && x.rank === space.rank - i)!;
            this.possibleMoves.push(potentialMove.toString());
            if (potentialMove.hasPiece) break;
        }
    }

    getDiagonalMoves(positions: Position[], space: Position): void {
        let right: number = 104 - space.file.charCodeAt(0);
        for (let i = 1; i <= right; i++) { // upper right
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank + i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove.toString());
                if (potentialMove.hasPiece) break;
            }
        }
        for (let i = 1; i <= right; i++) { // lower right
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) + i && x.rank === space.rank - i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove.toString());
                if (potentialMove.hasPiece) break;        
            }
        }
        let left: number = space.file.charCodeAt(0) - 97;
        for (let i = 1; i <= left; i++) { // upper left
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank + i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove.toString());
                if (potentialMove.hasPiece) break;
            }
        }
        for (let i = 1; i <= left; i++) { // lower right
            let potentialMove: Position = positions.find(x => x.file.charCodeAt(0) === space.file.charCodeAt(0) - i && x.rank === space.rank - i)!
            if (potentialMove) {
                this.possibleMoves.push(potentialMove.toString());
                if (potentialMove.hasPiece) break;
            }
        }
    }

    setMoves(positions: Position[]): void {
        this.possibleMoves.forEach(move => {
            let position = positions.find(x => x.file === move[0] && x.rank === parseInt(move[1]))!;
            if (!position) return;
            if (position.file.charCodeAt(0) >= 'a'.charCodeAt(0) && position.file.charCodeAt(0) <= 'h'.charCodeAt(0) && position.rank >= 1 && position.rank <= 8) {    
                this.validMoves.push(move);
            }
            if (position.hasPiece) {
                if (position.piece.color === this.color) {
                    this.validMoves.splice(this.validMoves.indexOf(move));
                } else {
                    this.possibleTakes.push(move);
                }
            }
        });
    }
}