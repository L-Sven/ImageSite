export interface IActionCreator {
  userActions: IUserAction;
  navbarActions: INavbarAction;
}

export interface IUserAction {
  login: Function;
  logout: Function;
  getUserInformation: Function;
}

export interface INavbarAction {
  toggleNavbar: Function;
}
