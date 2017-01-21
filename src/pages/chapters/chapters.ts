import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
import { IChapter } from "../../models/chapter.interface";
import { IBook } from "../../models/book.interface";
import { VersetsPage } from "../versets/versets";

@Component({
  selector: 'page-chapters',
  templateUrl: 'chapters.html'
})
export class ChaptersPage {
  public readonly book: IBook;
  public readonly chapters: IChapter[];

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    private bibleService: BibleService) {

    this.book = navParams.get('data');
    // TODO should be sorted
    this.chapters = this.bibleService.getChapters(this.book);
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
}