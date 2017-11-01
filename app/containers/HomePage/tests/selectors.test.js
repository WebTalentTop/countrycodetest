import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectCountrycode,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectCountrycode', () => {
  const countrycodeSelector = makeSelectCountrycode();
  it('should select the countrycode', () => {
    const countrycode = 'USA';
    const mockedState = fromJS({
      home: {
        countrycode,
      },
    });
    expect(countrycodeSelector(mockedState)).toEqual(countrycode);
  });
});
