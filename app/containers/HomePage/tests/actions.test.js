import {
  CHANGE_COUNTRYCODE,
} from '../constants';

import {
  changeCountrycode,
} from '../actions';

describe('Home Actions', () => {
  describe('changeCountrycode', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_COUNTRYCODE,
        name: fixture,
      };

      expect(changeCountrycode(fixture)).toEqual(expectedResult);
    });
  });
});
