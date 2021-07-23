export const getIsAuthenticated = (state) => Boolean(state.auth.token);

export const getUser = (state) => state.auth.user;
