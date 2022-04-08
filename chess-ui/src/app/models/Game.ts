import { Board } from "./Board";

export class Game {
    board: Board;
    _id: string;
    moves: string[];

    constructor();
    constructor(board: Board, _id: string, moves: string[]);
    constructor(board?: Board, _id?: string, moves?: string[]) {
        this.board = board!;
        this._id = _id!;
        this.moves = moves!;
    }
}