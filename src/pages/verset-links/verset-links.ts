import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BibleService } from "../../providers/bible-service";
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
  // TODO this has to be observable, as it gets loaded dynamically
  public readonly linkedVersets: LinkWithVersets[];

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    private bibleService: BibleService) {

    this.chapter = navParams.get('chapter');
    this.verset = navParams.get('verset');
    let links: IVersetLink[] = this.bibleService.getLinks(this.verset);

    this.linkedVersets = [];
    links.forEach(link => {
      this.linkedVersets.push(new LinkWithVersets(link));   
    });
  }

  toggleDetails(linkedVerset: LinkWithVersets) {
    console.log(linkedVerset);
    if (linkedVerset.showDetails) {
      linkedVerset.showDetails = false;
    }
    else {
      linkedVerset.showDetails = true;
    }
  }

  // we add the linked versets to the links
  ionViewDidLoad() {
    this.linkedVersets.forEach(decoratedLink /* not yet with versets */ => {
      let versets: IVerset[] = this.bibleService.getLinkedVersets(decoratedLink.link);
      versets.forEach(verset => {
        decoratedLink.versets.push(verset);
      });
    });
  }
}

export class LinkWithVersets {
  public readonly link: IVersetLink;
  // has to be observable...
  public readonly versets: IVerset[];

  public showDetails: boolean;

  constructor (link: IVersetLink) {
    this.link = link;
    this.showDetails = false;
    this.versets = [];
  }
}