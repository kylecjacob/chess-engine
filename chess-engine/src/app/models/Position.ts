export interface IPosition {
    rank: string;
    file: string;
}

export class Position implements IPosition {
    rank: string = '';
    file: string = '';
}