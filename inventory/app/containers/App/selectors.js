/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'repositories']),
  );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());



const makeSelect__user_name = () =>
  createSelector(selectGlobal, globalState => globalState.get('user_name'));

const makeSelect__user_id = () =>
  createSelector(selectGlobal, globalState => globalState.get('user_id'));

const makeSelect__access_token = () =>
  createSelector(selectGlobal, globalState => globalState.get('access_token'));


const makeSelect__is_authenticated = () =>
  createSelector(selectGlobal, globalState => globalState.get('is_authenticated'));


export {
  makeSelect__access_token,
  makeSelect__user_id,
  makeSelect__user_name,
  makeSelect__is_authenticated,
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
