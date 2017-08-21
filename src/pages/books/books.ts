import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { IBook } from "../../models/book.interface";
import { MenuItem } from "../../models/menu-item";
import { ChaptersPage } from "../chapters/chapters";


@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})
export class BooksPage {
  private loading: Loading;
  public readonly books: IBook[];
  public readonly menuItem: MenuItem;

  private options = { name: "bible.db", location: 'default', createFromLocation: 1 };
  private queryNames;

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    private loadingCtrl: LoadingController,
    private sqlite: SQLite) {

    this.menuItem = navParams.get('data');
    let testamentId = this.menuItem.id;
    this.queryNames = `SELECT rowid AS id, testamentId, shortName, longName FROM Books WHERE testamentId = ${testamentId}`;
  }

  navigateTo(book: IBook) {
    this.navCtrl.push(ChaptersPage, {'data': book});
  }

  ionViewWillEnter() {
    // Starts the process 
    this.loading = this.loadingCtrl.create({
      content: "Răbdare, răbdare, răbdare..."
    });

    this.loading.present();

    // Get the Async information 
    this.getAsyncData();
  }

  private getAsyncData() {
    this.sqlite.create(this.options).then((db: SQLiteObject) => {
      db.executeSql(this.queryNames, {}).then((data) => {
        let rows = data.rows;
        for (let i = 0; i < rows.length; i++) {
          this.books.push(rows.item(i));
        }

        this.loading.dismiss();
      })
    });
  }
}