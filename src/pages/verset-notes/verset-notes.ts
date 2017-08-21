import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

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
    navParams: NavParams) {

    this.chapter = navParams.get('chapter');
    this.verset = navParams.get('verset');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
