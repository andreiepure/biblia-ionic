/**
 * A link that connects a verset to one or more related versets
 * in a Bible book
 */
export interface IVersetLink {
    readonly targetBookShortName: string;
    readonly targetChapter: number;
    readonly targetVersetStart: number;
    readonly targetVersetEnd: number;
}