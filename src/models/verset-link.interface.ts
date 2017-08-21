/**
 * A link that connects a verset to one or more related versets
 * in a Bible book
 */
export interface IVersetLink {
    readonly id: number;
    readonly sourceVersetId: number;
    readonly targetChapterId: number;
    readonly targetVersetNumberStart: number;
    readonly targetVersetNumberEnd: number;
}