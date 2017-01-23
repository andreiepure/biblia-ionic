import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { IVersetNote } from '../models/verset-note.interface';
import { IVersetLink } from '../models/verset-link.interface';
import { IBook } from "../models/book.interface";
import { IChapter } from "../models/chapter.interface";
import { IVerset } from "../models/verset.interface";

import { MenuItemType } from "../models/menu-item";

import { Dt } from './books/Dt'
import { Fa } from './books/Fa'
import { Fc } from './books/Fc'
import { Ies } from './books/Ies'
import { In } from './books/In'
import { Lc } from './books/Lc'
import { Lv } from './books/Lv'
import { Mc } from './books/Mc'
import { Mt } from './books/Mt'
import { Nm } from './books/Nm'

@Injectable()
export class BibleService {

  private readonly oldTestament : IBook[]; 
  private readonly newTestament : IBook[];

  constructor() {
    this.oldTestament = [
      new Fc(), new Ies(), new Dt(), new Lv(), new Nm()
    ];
    this.newTestament = [
      new Mt(), new Mc(), new Lc(), new In(), new Fa()
    ];
  }

  getBooks(menuItemType: MenuItemType): IBook[] {
    let result: IBook[];
    switch (menuItemType) {
      case MenuItemType.OldTestament: result = this.oldTestament; break;
      case MenuItemType.NewTestament: result = this.newTestament; break;
      case MenuItemType.Extras: result = []; break;
    }

    return result;
    //return books.map((book: IBook) => { return book.longName });
  }

  getChapters(book: IBook): IChapter[] {
    // TODO should do a db query
    return book.chapters;
  }

  getChapterVersets(chapter: IChapter): IVerset[] {
    // TODO should do a db query
    return chapter.versets;
  }

  // Given a verset, it retrieves the links to other versets
  getLinks(verset: IVerset): IVersetLink[] {
    // TODO query
    return verset.links;
  }

  getNotes(verset: IVerset): IVersetNote[] {
    // TODO query
    return verset.notes;
  }

  getLinkedVersets(versetLink: IVersetLink): IVerset[] {
    return [
      {
        links: [],
        notes: [],
        number: 5,
        text: 'X y z'
      },
      {
        links: [],
        notes: [],
        number: 6,
        text: 'X y z'
      },
      {
        links: [],
        notes: [],
        number: 7,
        text: 'x y z'
      }
    ];
  }

  getVerset(bookShortName: string,
    chapterIndex: number,
    versetIndex: number) {

  }
}
