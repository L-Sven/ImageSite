import { userConstants } from "../Constants";
import { history } from "../../helpers/History";
import { userModel } from "../../models/Auth";
import { userService } from "../../services/UserService";
import { IUserAction } from "../../models/redux/interfaces";

export const userActions: IUserAction = {
  login,
  logout,
  getUserInformation
};

function login(email: string, password: string) {
  return async function action(dispatch: any) {
    dispatch(request(email));

    let user: userModel = {} as userModel;
    user = await userService.LoginByCredentials(email, password);

    if (user.id === null || user.id === undefined) {
      dispatch(failure("Inloggning misslyckades"));
    } else {
      dispatch(success(user));
      history.push("/home");
    }
  };

  function request(email: string) {
    return { type: userConstants.LOGIN_REQUEST, email };
  }

  function failure(errorMsg: string) {
    return { type: userConstants.LOGIN_FAILURE, errorMsg };
  }

  function success(user: userModel) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
}

function logout() {
  history.push("/login");
  return { type: userConstants.LOGOUT };
}

function getUserInformation() {
  return { type: userConstants.USER_GET_INFORMATION };
}
