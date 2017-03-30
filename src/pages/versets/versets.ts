import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
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

  public readonly chapter: IChapter;
  public readonly versets: IVerset[];

  // TODO should get the previous chapter and the next chapter as well
  // in the NavParams
  constructor(public modalCtrl: ModalController,
    navParams: NavParams,
    private bibleService: BibleService) {

    this.chapter = navParams.get('data');
    this.versets = this.bibleService.getChapterVersets(this.chapter);
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

}
