//import { IVersetLink } from './verset-link.interface';
//import { IVersetNote } from './verset-note.interface';

/**
 * A Bible verset
 */
export interface IVerset {
    readonly id: number;
    readonly chapterId: number;
    readonly number: number;
    readonly text: string;
}