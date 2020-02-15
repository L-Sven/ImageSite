import { userConstants } from "../Constants";
import { authInitialState } from "../../models/Auth";

const initialState: authInitialState = {
  errorMsg: "",
  loggedIn: false,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
};

export function authentication(state = initialState, action: any) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        email: action.email
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };

    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        password: "",
        email: action.email,
        errorMsg: action.errorMsg
      };

    case userConstants.LOGOUT:
      return {
        initialState
      };

    default:
      return state;
  }
}
