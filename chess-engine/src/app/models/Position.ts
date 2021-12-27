import { Coordinates } from "./Coordinates";

export class Position {
    rank: number = 0;
    file: string = '';
    location: Coordinates = new Coordinates();

    constructor();
    constructor(file: string, rank: number, location: Coordinates)
    constructor(file?: string, rank?: number, location?: Coordinates) {
        this.rank = rank!;
        this.file = file!;
        this.location = location!;
    }
}