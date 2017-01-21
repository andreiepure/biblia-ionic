import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.verset = navParams.get('data');

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
