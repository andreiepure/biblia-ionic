import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { IChapter } from "../../models/chapter.interface";
import { IVerset } from "../../models/verset.interface";
import { IVersetLink } from "../../models/verset-link.interface";

@Component({
  selector: 'page-verset-links',
  templateUrl: 'verset-links.html'
})
export class VersetLinksPage {
  public readonly verset: IVerset;
  public readonly chapter: IChapter;

  private readonly links: IVersetLink[];

  private options = { name: "bible.db", location: 'default', createFromLocation: 1 };
  private queryLinks;

  constructor(public viewCtrl: ViewController,
    navParams: NavParams) {

    this.chapter = navParams.get('chapter');
    this.verset = navParams.get('verset');

    // TODO make query based on verset, don't know why I passed chapter as well...
    // maybe to go back?
  }

  toggleDetails() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // we add the linked versets to the links
  ionViewDidLoad() {
  }
}