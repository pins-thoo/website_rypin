const PERSIST = 'PERSIST';

export const SET_TOKEN = `${PERSIST}/SET_TOKEN`;

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});
