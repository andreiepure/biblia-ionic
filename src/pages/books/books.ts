import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
import { IBook } from "../../models/book.interface";
import { MenuItem } from "../../models/menu-item";
import { ChapterListPage } from "../chapter-list/chapter-list";

@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})
export class BooksPage {
  public readonly books: IBook[];
  public readonly menuItem: MenuItem;

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    private bibleService: BibleService) {

    this.menuItem = navParams.get('data');
    this.books = this.bibleService.getBooks(this.menuItem.type);
  }

  navigateTo(book: IBook) {
    this.navCtrl.push(ChapterListPage, {'data': book});
  }
}
