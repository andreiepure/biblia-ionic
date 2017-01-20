/**
 * This file has been autogenerated.
 * Do not modify this file as it will be overwritten.
 * You can find the generator in the download-bible project.
 */

import { IBook } from "../../models/book.interface";
import { IChapter } from "../../models/chapter.interface";

export class Nm implements IBook {
    readonly shortName: string;
    readonly longName: string;
    readonly chapters: IChapter[];

    constructor() {
        this.shortName = "Nm";
        this.longName = "Numerele";
        this.chapters = [];
    }
}