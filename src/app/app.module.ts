import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { BibliaHomePage } from '../pages/biblia-home/biblia-home';
import { TabsPage } from '../pages/tabs/tabs';

import { BibleService } from "../providers/bible-service";

@NgModule({
  declarations: [
    MyApp,
    BibliaHomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BibliaHomePage,
    TabsPage
  ],
  providers: [BibleService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
