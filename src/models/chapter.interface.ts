import { IVerset } from "./verset.interface";

/**
 * Definition of the chapter of a Bible book
 */
export interface IChapter {
    // TODO
    readonly bookShortName: string;
    readonly number: number;
    readonly description: string;
    readonly versets: IVerset[];
}
