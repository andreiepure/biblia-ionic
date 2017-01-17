import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BibleData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BibleService {

  constructor(public http: Http) {
    console.log('Hello BibleData Provider');
  }

  print(message: string): void {
    console.log('Received the message: ' + message)
  }
}
