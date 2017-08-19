import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
import { MenuItem, MenuItemType } from "../../models/menu-item";
import { BooksPage } from "../books/books";

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'biblia-home',
  templateUrl: 'biblia-home.html'
})
export class BibliaHomePage {

  readonly title: string = "Sfânta Scriptură";
// sqlite
  private options = { name: "bible.db", location: 'default', createFromLocation: 1 };
  private queryNames = "SELECT * FROM Books;";
  public names: String[] = ["test1", "test2"];
// sqlite


  readonly menuItems: MenuItem[] = [
    new MenuItem(MenuItemType.OldTestament, "Vechiul Testament"),
    new MenuItem(MenuItemType.NewTestament, "Noul Testament"),
    new MenuItem(MenuItemType.Extras, "Anexe")
  ];

  constructor(public navCtrl: NavController, private bibleService: BibleService,
    private sqlite: SQLite) {

    // sqlite
        this.sqlite.create(this.options).then((db: SQLiteObject) => {
          db.executeSql(this.queryNames, {}).then((data) => {
            let rows = data.rows;
            for (let i = 0; i < rows.length; i++)
              this.names.push(rows.item(i).path);
            console.log("Number of names on database = " + this.names.length);
          })
    });
    // sqlite
  }

  navigateTo(menuItem: MenuItem) {
    this.navCtrl.push(BooksPage, {'data': menuItem});
  }
}
