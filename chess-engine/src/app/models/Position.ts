export class Position {
    rank: number = 0;
    file: string = '';

    constructor();
    constructor(file: string, rank: number)
    constructor(file?: string, rank?: number) {
        this.rank = rank!;
        this.file = file!;
    }
}