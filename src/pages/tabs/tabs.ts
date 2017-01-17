import { Component } from '@angular/core';

import { BibliaHomePage } from '../biblia-home/biblia-home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BibliaHomePage;
  tab2Root: any = BibliaHomePage;
  tab3Root: any = BibliaHomePage;

  constructor() {

  }
}
