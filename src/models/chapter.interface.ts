import { IVerset } from "./verset.interface";

/**
 * Definition of the chapter of a Bible book
 */
export interface IChapter {
    readonly index: number;
    readonly description: string;
    readonly versets: IVerset[];
}
