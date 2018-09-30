import { AnimeStoreModule } from './anime-store.module';

describe('AnimeStoreModule', () => {
  let animeStoreModule: AnimeStoreModule;

  beforeEach(() => {
    animeStoreModule = new AnimeStoreModule();
  });

  it('should create an instance', () => {
    expect(animeStoreModule).toBeTruthy();
  });
});
