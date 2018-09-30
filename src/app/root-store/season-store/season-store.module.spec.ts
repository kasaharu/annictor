import { SeasonStoreModule } from './season-store.module';

describe('SeasonStoreModule', () => {
  let seasonStoreModule: SeasonStoreModule;

  beforeEach(() => {
    seasonStoreModule = new SeasonStoreModule();
  });

  it('should create an instance', () => {
    expect(seasonStoreModule).toBeTruthy();
  });
});
