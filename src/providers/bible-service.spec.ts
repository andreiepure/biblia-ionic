import { BibleService }          from './bible-service';
import { IBook } from "../models/book.interface";

import { Dt } from './books/Dt'
import { Fa } from './books/Fa'
import { Fc } from './books/Fc'
import { Ies } from './books/Ies'
import { In } from './books/In'
import { Lc } from './books/Lc'
import { Lv } from './books/Lv'
import { Mc } from './books/Mc'
import { Mt } from './books/Mt'
import { Nm } from './books/Nm'


describe('Services: BibleService', () => {
  let bibleService: BibleService;
  
  beforeEach(() => { bibleService = new BibleService(); });

  it('getBooks with "VT" should return all and only old testament books', () => {
    let responseNames: string[] =
      bibleService.getBooks("VT").map((book) => { return book.shortName; });
    let expectedNames: string[] = [ 'Fc', 'Ies', 'Dt', 'Lv', 'Nm' ];

    let onlyInResponse = responseNames
      .filter((name) => { return expectedNames.indexOf(name) == -1});
    let onlyInExpected = expectedNames
      .filter((name) => { return responseNames.indexOf(name) == -1});

    let difference = onlyInExpected.concat(onlyInResponse);

    expect(difference.length).toBe(0);
  });
});

