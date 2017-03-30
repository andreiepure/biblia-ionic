import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
import { IChapter } from "../../models/chapter.interface";
import { IVerset } from "../../models/verset.interface";
import { IVersetNote } from "../../models/verset-note.interface";

@Component({
  selector: 'page-verset-notes',
  templateUrl: 'verset-notes.html'
})
export class VersetNotesPage {
  public readonly verset: IVerset;
  public readonly chapter: IChapter;
  // TODO this has to be observable, as it gets loaded dynamically
  public readonly notes: IVersetNote[];

  constructor(public viewCtrl: ViewController,
    navParams: NavParams,
    private bibleService: BibleService) {

    this.chapter = navParams.get('chapter');
    this.verset = navParams.get('verset');
    this.notes = this.bibleService.getNotes(this.verset);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
