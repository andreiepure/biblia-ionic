import { IChapter } from "./chapter.interface";

/**
 * Definition of a Bible book (e.g. Genesis)
 */
export interface IBook {
    readonly shortName: string;
    readonly longName: string;
    readonly chapters: IChapter[];
}