import { Component } from '@angular/core';
import { Loading, LoadingController, NavController } from 'ionic-angular';

import { MenuItem } from "../../models/menu-item";
import { BooksPage } from "../books/books";

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'biblia-home',
  templateUrl: 'biblia-home.html'
})
export class BibliaHomePage {

  private loading: Loading;

  readonly title: string = "Sfânta Scriptură";
  readonly menuItems: MenuItem[] = [];

  // sqlite
  private options = { name: "bible.db", location: 'default', createFromLocation: 1 };
  private queryNames = "SELECT rowid AS id, shortName, longName FROM Testaments;";

  constructor(public loadingCtrl: LoadingController,
    public navCtrl: NavController, private sqlite: SQLite) {
  }

  navigateTo(menuItem: MenuItem) {
    this.navCtrl.push(BooksPage, {'data': menuItem});
  }

  ionViewWillEnter() {
    // Starts the process 
    this.loading = this.loadingCtrl.create({
      content: "Răbdare, răbdare, răbdare..."
    });

    this.loading.present();

    // Get the Async information 
    this.getAsyncData();
  }

  private getAsyncData() {
    this.sqlite.create(this.options).then((db: SQLiteObject) => {
      db.executeSql(this.queryNames, {}).then((data) => {
        let rows = data.rows;
        for (let i = 0; i < rows.length; i++) {
          this.menuItems.push(rows.item(i));
        }

        this.loading.dismiss();
      })
    });
  }

}