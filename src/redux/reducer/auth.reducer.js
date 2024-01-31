import { SIGNIN, SIGNOUT, SIGNUP } from "./../action/auth-action";

const initialState = {
  token: "",
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, token: action.payload };

    case SIGNOUT:
      return { ...initialState };

    case SIGNUP:
      return { ...state };

    default:
      return state;
  }
};

export default Auth;
