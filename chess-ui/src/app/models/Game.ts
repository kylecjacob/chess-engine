import { Board } from "./Board";

export class Game {
    board: Board;
    _id: string;

    constructor(board: Board, _id: string) {
        this.board = board;
        this._id = _id;
    }
}