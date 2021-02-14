const AUTH = 'AUTH';

export const SIGN_IN_REQUEST = `${AUTH}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${AUTH}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAIL = `${AUTH}/SIGN_IN_FAIL`;

export const signIn = (credentials) => ({
  type: SIGN_IN_REQUEST,
  credentials,
});

export const signInSuccess = (token) => ({
  type: SIGN_IN_SUCCESS,
  token,
});

export const signInFail = (errors) => ({
  type: SIGN_IN_FAIL,
  errors,
});
