/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectCountrycode = () => createSelector(
  selectHome,
  (homeState) => homeState.get('countrycode')
);

export {
  selectHome,
  makeSelectCountrycode,
};
