import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { IChapter } from "../../models/chapter.interface";
import { IVerset } from "../../models/verset.interface";

import {
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'page-add-bookmark',
  templateUrl: 'add-bookmark.html'
})
export class AddBookmarkPage {
  public form: FormGroup;
  public verset: IVerset;
  public chapter: IChapter;

  /**
   * The constructor receives one or two parameters:
   * - (mandatory) the verset, so it can show it 
   * - (optional) the existing bookmark, if it exists
   */
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.verset = navParams.get('verset');
    this.chapter = navParams.get('chapter');

    this.form = new FormGroup({
      bookmarkNote: new FormControl("")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBookmarkPage');
  }

  public done() {
    this.viewCtrl.dismiss(this.form.value.bookmarkNote);
  }

}
