export class Coordinates {
    x: number = 0;
    y: number = 0;

    constructor();
    constructor(y: number, x: number);
    constructor(y?: number, x?: number) {
        this.x = x!;
        this.y = y!;
    }
}