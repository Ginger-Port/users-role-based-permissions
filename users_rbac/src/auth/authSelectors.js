import { createSelector } from "reselect";

// select auth from auth slice
export const selectAuth = (state) => state?.auth;

export const selectRole = createSelector(selectAuth, (auth) => auth?.role);

// select isAuthenticated from auth slice
export const selectAuthenticationStatus = createSelector(
  selectAuth,
  (auth) => auth?.isAuthenticated
);

// function accepts role as parameter to check with current user role!
export const hasRole = (role) =>
  createSelector(selectRole, (currentRole) => currentRole === role);
