export interface authInitialState {
  errorMsg: string;
  loggedIn: boolean;
  user: userModel;
}

export interface userModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
