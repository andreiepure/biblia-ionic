import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the WrapInnerhtml pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'wrapper'
})
@Injectable()
export class WrapInnerhtmlPipe {

  transform(value, args) {
    return '<span class="wrap-text">' + value + '</span>';
  }
}
