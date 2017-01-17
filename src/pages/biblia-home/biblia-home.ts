import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BibleService } from "../../providers/bible-service";

@Component({
  selector: 'biblia-home',
  templateUrl: 'biblia-home.html'
})
export class BibliaHomePage {

  constructor(public navCtrl: NavController, private bibleService: BibleService) {

  }

  onClick() {
    this.bibleService.print("Clicked!");
  }
}
