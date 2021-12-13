export interface IPawn {
    validMoves: string[];
}

export class Pawn implements IPawn {
    validMoves: string[] = [];
}