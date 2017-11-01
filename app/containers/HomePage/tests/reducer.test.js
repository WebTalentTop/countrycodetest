import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changeCountrycode,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      countrycode: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeCountrycode action correctly', () => {
    const fixture = 'USA';
    const expectedResult = state.set('countrycode', fixture);

    expect(homeReducer(state, changeCountrycode(fixture))).toEqual(expectedResult);
  });
});
