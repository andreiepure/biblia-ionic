import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
import { IChapter } from "../../models/chapter.interface";
import { IVerset } from "../../models/verset.interface";

@Component({
  selector: 'page-versets',
  templateUrl: 'versets.html'
})

export class VersetsPage {

  public readonly chapter: IChapter;
  public readonly versets: IVerset[];

  // TODO should get the previous chapter and the next chapter as well
  // in the NavParams
  constructor(public navCtrl: NavController,
    navParams: NavParams,
    private bibleService: BibleService) {

    this.chapter = navParams.get('data');
    this.versets = this.bibleService.getChapterVersets(this.chapter);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VersetListPage');
  }

}
