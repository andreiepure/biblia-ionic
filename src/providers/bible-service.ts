import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { IVersetLink } from '../models/verset-link.interface';
import { IBook } from "../models/book.interface";

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

  private oldTestament : IBook[] = [
    Fc, Ies, Dt, Lv, Nm
  ];

  private newTestament : IBook[] = [
    Mt, Mc, Lc, In, Fa, Nm
  ];

  constructor(public http: Http) {
    console.log('Hello BibleData Provider');
  }

  print(message: string): void {
    console.log('Received the message: ' + message)
  }

  GetBooks(testament: string): IBook[] {
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

  GetChapters(bookShortName: string) {

  }

  GetChapterVersets(bookShortName: string, chapterIndex: number) {

  }

  GetLinkVersets(versetLink: IVersetLink) {

  }

  GetVerset(bookShortName: string,
    chapterIndex: number,
    versetIndex: number) {

  }
}