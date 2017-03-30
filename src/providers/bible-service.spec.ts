import {} from 'jasmine';
import { BibleService }          from './bible-service';
import { MenuItemType } from "../models/menu-item";



describe('Services: BibleService', () => {
  let bibleService: BibleService;
  
  beforeEach(() => { bibleService = new BibleService(); });

  it('getBooks with "VT" should return all and only old testament books', () => {
    let responseNames: string[] =
      bibleService.getBooks(MenuItemType.OldTestament).map((book) => { return book.shortName; });
    let expectedNames: string[] = [ 'Fc', 'Ies', 'Dt', 'Lv', 'Nm' ];

    let onlyInResponse = responseNames
      .filter((name) => { return expectedNames.indexOf(name) == -1});
    let onlyInExpected = expectedNames
      .filter((name) => { return responseNames.indexOf(name) == -1});

    let difference = onlyInExpected.concat(onlyInResponse);

    expect(difference.length).toBe(0);
  });
});

