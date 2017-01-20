import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { IVersetLink } from '../models/verset-link.interface';
import { IBook } from "../models/book.interface";
import { MenuItem } from "../models/menu-item";

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

/*
  Generated class for the BibleData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
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

  print(message: MenuItem): void {
    console.log('Received the message: ' + message)
  }

  getBooks(testament: string): IBook[] {
    var books;
    if (testament == "VT") {
      books = this.oldTestament;
    }
    else if (testament == "NT") {
      books = this.newTestament;
    }
    else {
      throw ("Unknown testament");
    }

    return books;
    //return books.map((book: IBook) => { return book.longName });
  }

  getChapters(bookShortName: string) {

  }

  getChapterVersets(bookShortName: string, chapterIndex: number) {

  }

  getLinkVersets(versetLink: IVersetLink) {

  }

  getVerset(bookShortName: string,
    chapterIndex: number,
    versetIndex: number) {

  }
}
