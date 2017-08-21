/**
 * An item in the main menu
 */
export class MenuItem {
    readonly id: number;
    readonly shortName: string;
    readonly longName: string;

    constructor(id: number, shortName: string, longName: string) {
        this.id = id;
        this.shortName = shortName;
        this.longName = longName;
    }
}