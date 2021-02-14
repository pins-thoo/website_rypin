import Actions from 'actions';

export const initialState = Object.freeze(null);

function token(state = initialState, action) {
  switch (action.type) {
    case Actions.SIGN_IN_SUCCESS:
    case Actions.SET_TOKEN:
      return action.token;
    case Actions.SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}

export default token;
