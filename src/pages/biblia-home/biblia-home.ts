import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
import { MenuItem, MenuItemType } from "../../models/menu-item";
import { BooksPage } from "../books/books";


@Component({
  selector: 'biblia-home',
  templateUrl: 'biblia-home.html'
})
export class BibliaHomePage {

  readonly title: string = "Sfânta Scriptură";

  readonly menuItems: MenuItem[] = [
    new MenuItem(MenuItemType.OldTestament, "Vechiul Testament"),
    new MenuItem(MenuItemType.NewTestament, "Noul Testament"),
    new MenuItem(MenuItemType.Extras, "Anexe")
  ];

  constructor(public navCtrl: NavController, private bibleService: BibleService) {
  }

  navigateTo(menuItem: MenuItem) {
    this.navCtrl.push(BooksPage, {'data': menuItem});
  }
}
