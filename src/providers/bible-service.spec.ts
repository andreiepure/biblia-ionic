import { BibleService }          from './bible-service';

describe('Services: BibleService', () => {
  let bibleService: BibleService;
  
  beforeEach(() => { bibleService = new BibleService(); });

  it('it should create the service', () => {
    expect(bibleService.print("hello")).toBe("hello");
  });
});

