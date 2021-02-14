import Actions from 'actions';

export const initialState = Object.freeze({ errors: [] });

function signIn(state = initialState, action) {
  switch (action.type) {
    case Actions.SIGN_IN_REQUEST:
    case Actions.SIGN_IN_SUCCESS:
      return initialState;
    case Actions.SIGN_IN_FAIL:
      return {
        errors: action.errors,
      };
    default:
      return state;
  }
}

export default signIn;
