import { Component } from '@angular/core';
import { Loading, LoadingController, ModalController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { IChapter } from "../../models/chapter.interface";
import { IVerset } from "../../models/verset.interface";

import { AddBookmarkPage } from "../add-bookmark/add-bookmark";
import { VersetLinksPage } from "../verset-links/verset-links";
import { VersetNotesPage } from "../verset-notes/verset-notes";

@Component({
  selector: 'page-versets',
  templateUrl: 'versets.html'
})

export class VersetsPage {

  private loading: Loading;

  public readonly chapter: IChapter;
  public readonly versets: IVerset[];

  private options = { name: "bible.db", location: 'default', createFromLocation: 1 };
  private queryNames;

  // TODO should get the previous chapter and the next chapter as well
  // but AFTER the page has been loaded, while the user reads (hm... no)
  constructor(public modalCtrl: ModalController,
    navParams: NavParams,
    private loadingCtrl: LoadingController,
    private sqlite: SQLite) {

    this.chapter = navParams.get('data');
    let chapterId = this.chapter.id;
    this.queryNames = `SELECT rowid AS id, chapterId, number, text FROM Versets WHERE chapterId = ${chapterId}`;
  }

  public showNotes(verset: IVerset) {
    let versetNotesPage = this.modalCtrl.create(VersetNotesPage,
      { verset: verset, chapter: this.chapter }
    );

    versetNotesPage.present();
  }

  public showLinks(verset: IVerset) {
    let versetLinksPage = this.modalCtrl.create(VersetLinksPage,
      { verset: verset, chapter: this.chapter }
    );

    versetLinksPage.present();
  }

  public addBookmark(verset: IVerset) {
    // show show only if a bookmark isn't there already
    // if the bookmark is there, show the bookmark
    // TODO check if bookmark exists

    let addBookmarkModal = this.modalCtrl.create(AddBookmarkPage,
      { verset: verset, chapter: this.chapter }
    );

    addBookmarkModal.onDidDismiss(data => {
     console.log(data);
    });

    addBookmarkModal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VersetListPage');
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
          this.versets.push(rows.item(i));
        }

        this.loading.dismiss();
      })
    });
  }

}