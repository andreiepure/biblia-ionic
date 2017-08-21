import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IVersetLink } from '../../models/verset-link.interface';

/*
  Generated class for the BookmarkList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})
export class BookmarksPage {

  public readonly title: string = "Semne de carte"

  public readonly bookmarks: IVersetLink[] = [
    { id: 1, sourceVersetId: 1, targetChapterId: 2, targetVersetNumberStart: 2, targetVersetNumberEnd: 2 }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarkListPage');
  }

}
