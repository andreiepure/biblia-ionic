//import { IChapter } from "./chapter.interface";

/**
 * Definition of a Bible book (e.g. Genesis)
 */
export interface IBook {
    readonly id: number;
    readonly testamentId: number;
    readonly shortName: string;
    readonly longName: string;
}