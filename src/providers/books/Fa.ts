/**
 * This file has been autogenerated.
 * Do not modify this file as it will be overwritten.
 * You can find the generator in the download-bible project.
 */

import { IBook } from "../../models/book.interface";
import { IChapter } from "../../models/chapter.interface";

export class Fa implements IBook {
    readonly shortName: string;
    readonly longName: string;
    readonly chapters: IChapter[];

    constructor() {
        this.shortName = "FA";
        this.longName = "Faptele Apostolilor";
        this.chapters = [];

        this.populateChapters();
    }

    private populateChapters() {
        this.chapters.push({
            index: 1,
            description: "Facerea lumii şi a omului.",
            versets: [
                {
                    index: 1,
                    text: "Întru'nceput a făcut Dumnezeu cerul şi pământul .",
                    notes: [
                        {
                            letter: "a",
                            text: "&#xCE;n interiorul dimensiunii nem&#x103;rginite &#x15F;i atemporale a lui Dumnezeu, atunci c&#xE2;nd El, prin propria Sa voin&#x163;&#x103; &#x15F;i putere, a hot&#x103;r&#xE2;t ca lumea s&#x103; aib&#x103; un &#xEE;nceput. &#x201E;&#xCE;ntru&apos;nceput&#x201C; (<b>en arh&#xE9;</b>) sugereaz&#x103; c&#x103; Dumnezeu transcende &#xEE;nceputul, c&#x103; El este anterior oric&#x103;rei mi&#x15F;c&#x103;ri. <b>Arh&#xE9;</b> &#xEE;ns&#x103; &#xEE;nseamn&#x103; nu numai &#xEE;nceput, ci &#x15F;i principiu (tradus &#xEE;n Vulgata prin <b>principium</b>), adic&#x103; concep&#x163;ie, regul&#x103;, norm&#x103;, punct de vedere. Textul preconizeaz&#x103; ideea &#xCE;n&#x163;elepciunii creatoare (Pr 8, 22-31), a Logosului (Cuv&#xE2;ntului) creator (In 1, 1-3)."
                        },
                        {
                            letter: "b",
                            text: "Grecescul <b>poi&#xE9;o</b> = &#x201E;a face&#x201C;, &#xEE;l traduce pe ebraicul <b>bara&apos;</b>, un verb care &#xEE;n VT este &#xEE;ntotdeauna folosit pentru a exprima ac&#x163;iunea creatoare a lui Dumnezeu. Vulgata (&#x15F;i unele versiuni moderne) &#xEE;l traduc prin &#x201E;a crea&#x201C;, echivalentul rom&#xE2;nesc al lui &#x201E;a face&#x201C;. Verbul e mult mai explicit &#xEE;n 2 Mac 7, 28: Dumnezeu a f&#x103;cut totul din nimic (ceea ce exclude prezum&#x163;ia unei materii preexistente). Rom&#xE2;nescul &#x201E;a face&#x201C; &#xEE;nseamn&#x103; nu numai a crea (din nimic), ci &#x15F;i a crea &#xEE;n mod organizat, potrivit unui plan, &#xEE;n etape prestabilite &#x15F;i cu o finalitate clar&#x103;. "
                        },
                        {
                            letter: "c",
                            text: "Prin &#x201E;cerul &#x15F;i p&#x103;m&#xE2;ntul&#x201C; (ebraism) se &#xEE;n&#x163;elege rezultatul crea&#x163;iei, cosmosul ordonat, &#x201E;existen&#x163;a &#xEE;ntregului univers&#x201C; (Sf. Vasile cel Mare). Al&#x163;i Sfin&#x163;i P&#x103;rin&#x163;i &#xEE;n&#x163;eleg lumea &#xEE;ngereasc&#x103; &#x15F;i cea material&#x103;."  
                        }
                    ],
                    links: [
                        {
                            targetBookShortName: "Est",
                            targetChapter: 5,
                            targetVersetStart: 11,
                            targetVersetEnd: 11
                        },
                        {
                            targetBookShortName: "Est",
                            targetChapter: 6,
                            targetVersetStart: 6,
                            targetVersetEnd: 6
                        },
                        {
                            targetBookShortName: "Pr",
                            targetChapter: 16,
                            targetVersetStart: 20,
                            targetVersetEnd: 20
                        }
                    ]
                },
                {
                    index: 2,
                    text: "Dar pământul era nedesluşit şi ne'mplinit ; şi întuneric era deasupra genunii; şi Duhul lui Dumnezeu Se purta pe deasupra apelor.",
                    notes: [
                        {
                            letter: "d",
                            text: "Nedeslu&#x15F;it: invizibil sau de-abia vizibil, ca prin abur. Ne&apos;mplinit: ne&apos;ntocmit pe de-a&apos;ntregul; pustiu; gol; de&#x15F;ert, f&#x103;r&#x103; via&#x163;&#x103;. Ebraicul <b>toh&#xFB;-boh&#xFB;</b> sugereaz&#x103; ideea de haos, materie inform&#x103;, creat&#x103; din nimic, dar &#xEE;nc&#x103; neorganizat&#x103;, nedeslu&#x15F;it&#x103;.
                        },
                        {
                            letter: "e",
                            text: "&#xCE;n limba greac&#x103;, acela&#x15F;i cuv&#xE2;nt, pneuma, &#xEE;nseamn&#x103; &#x15F;i &#x201E;v&#xE2;nt&#x201C;, &#x15F;i &#x201E;duh&#x201C;. A&#x15F;adar, mi&#x15F;carea aerului care va face posibil&#x103; ivirea p&#x103;m&#xE2;ntului; Duhul d&#x103;t&#x103;tor de via&#x163;&#x103; al lui Dumnezeu."
                        }
                    ],
                    links: [
                        {
                            targetBookShortName: "Iov",
                            targetChapter: 33,
                            targetVersetStart: 4,
                            targetVersetEnd: 4
                        },
                        {
                            targetBookShortName: "Idt",
                            targetChapter: 16,
                            targetVersetStart: 14,
                            targetVersetEnd: 14
                        },
                    ]
                }
            ]
        });
    }
}