import { Season } from '../../core/models';

export interface State {
  season: Season;
}

export const initialState: State = {
  season: { id: '' },
};
