//import { IBook } from "./book.interface";

/**
 * Definition of the chapter of a Bible book
 */
export interface IChapter {
    readonly id: number;
    readonly bookId: number;
    readonly number: number;
    readonly title: string;
}