import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { IChapter } from "../../models/chapter.interface";
import { IBook } from "../../models/book.interface";
import { VersetsPage } from "../versets/versets";

@Component({
  selector: 'page-chapters',
  templateUrl: 'chapters.html'
})
export class ChaptersPage {
  private loading: Loading;
  public readonly book: IBook;
  public readonly chapters: IChapter[];

  private options = { name: "bible.db", location: 'default', createFromLocation: 1 };
  private queryNames;

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    private loadingCtrl: LoadingController,
    private sqlite: SQLite) {

    this.book = navParams.get('data');
  }

  /**
   * Next and previous are useful to for the VersetListPage to show nav buttons
   */
  public navigateTo(chapter: IChapter, index: number) {
    this.navCtrl.push(VersetsPage, {
      'previous': this.previous(index),
      'next': this.next(index),
      'data': chapter
    });
  }

  private previous(index: number): number {
    return index > 0
      ? index - 1
      : null;
  }

  private next(index: number): number {
    return index < this.chapters.length -1
      ? index + 1
      : null;
  }

  ionViewWillEnter() {
    if (this.chapters.length == 0) {
      // Starts the process 
      this.loading = this.loadingCtrl.create({
        content: "Răbdare, răbdare, răbdare..."
      });

      this.loading.present();

      // Get the Async information 
      this.getAsyncData();
    }
  }

  ionViewDidLeave () {
      this.loading.dismiss();
  }

  private getAsyncData() {
    let bookId = this.book.id;
    let queryNames = 'SELECT rowid AS id, bookId, number, title FROM Chapters WHERE bookId = ' + bookId;

    console.log(`Chapters - Will query ${queryNames}`);
    console.log('Chapters - Will query ' + queryNames + ' bookId ' + bookId); 

    this.sqlite.create(this.options).then((db: SQLiteObject) => {
      db.executeSql(queryNames, {}).then((data) => {
        let rows = data.rows;
        for (let i = 0; i < rows.length; i++) {
          this.chapters.push(rows.item(i));
        }

        this.loading.dismiss();
      })
    });
  }

}