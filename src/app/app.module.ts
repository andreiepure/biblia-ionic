import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { BibliaHomePage } from '../pages/biblia-home/biblia-home';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';

import { AddBookmarkPage } from '../pages/add-bookmark/add-bookmark';
import { BooksPage } from '../pages/books/books';
import { ChaptersPage } from "../pages/chapters/chapters";
import { VersetsPage } from "../pages/versets/versets";
import { VersetLinksPage } from "../pages/verset-links/verset-links";
import { VersetNotesPage } from "../pages/verset-notes/verset-notes";
import { TabsPage } from '../pages/tabs/tabs';

import { WrapInnerhtmlPipe } from "../pipes/wrap-innerhtml";

import { BibleService } from "../providers/bible-service";

@NgModule({
  declarations: [
    MyApp,
    BibliaHomePage,
    BookmarksPage,
    AddBookmarkPage,
    BooksPage,
    ChaptersPage,
    VersetsPage,
    VersetLinksPage,
    VersetNotesPage,
    TabsPage,
    WrapInnerhtmlPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BibliaHomePage,
    BookmarksPage,
    AddBookmarkPage,
    BooksPage,
    ChaptersPage,
    VersetsPage,
    VersetLinksPage,
    VersetNotesPage,
    TabsPage
  ],
  providers: [BibleService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
