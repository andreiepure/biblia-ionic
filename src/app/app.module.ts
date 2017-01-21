import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { BibliaHomePage } from '../pages/biblia-home/biblia-home';
import { BookmarkListPage } from '../pages/bookmark-list/bookmark-list';

import { BooksPage } from '../pages/books/books';
import { ChapterListPage } from "../pages/chapter-list/chapter-list";
import { VersetListPage } from "../pages/verset-list/verset-list";
import { TabsPage } from '../pages/tabs/tabs';

import { BibleService } from "../providers/bible-service";

@NgModule({
  declarations: [
    MyApp,
    BibliaHomePage,
    BookmarkListPage,
    BooksPage,
    ChapterListPage,
    VersetListPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BibliaHomePage,
    BookmarkListPage,
    BooksPage,
    ChapterListPage,
    VersetListPage,
    TabsPage
  ],
  providers: [BibleService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
