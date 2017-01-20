import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IVersetLink } from '../../models/verset-link.interface';

/*
  Generated class for the BookmarkList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookmark-list',
  templateUrl: 'bookmark-list.html'
})
export class BookmarkListPage {

  public readonly title: string = "Semne de carte"

  public readonly bookmarks: IVersetLink[] = [
    { targetBookShortName: "Fc", targetChapter: 1, targetVersetStart: 1, targetVersetEnd: 1 },
    { targetBookShortName: "Mc", targetChapter: 1, targetVersetStart: 2, targetVersetEnd: 2 }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarkListPage');
  }

}
