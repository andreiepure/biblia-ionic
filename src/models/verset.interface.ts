import { IVersetLink } from './verset-link.interface';
import { IVersetNote } from './verset-note.interface';

/**
 * A Bible verset
 */
export interface IVerset {
    readonly index: number;
    readonly text: string;
    readonly notes: IVersetNote[];
    readonly links: IVersetLink[];
}