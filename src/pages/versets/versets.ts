import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
import { IChapter } from "../../models/chapter.interface";
import { IVerset } from "../../models/verset.interface";

import { AddBookmarkPage } from "../add-bookmark/add-bookmark";

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

  }

  public showLinks(verset: IVerset) {

  }

  public addBookmark(verset: IVerset) {
    let addBookmarkModal = this.modalCtrl.create(AddBookmarkPage, { data: verset });
    addBookmarkModal.onDidDismiss(data => {
     console.log(data);
    });
    addBookmarkModal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VersetListPage');
  }

}
