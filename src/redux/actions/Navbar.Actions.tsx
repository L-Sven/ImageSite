import { navbarConstants } from "../Constants";
import { INavbarAction } from "../../models/redux/interfaces";

export const navbarActions: INavbarAction = {
  toggleNavbar
};

function toggleNavbar(col: string) {
  return async function action(dispatch: any) {
    if (col === "" || col === undefined) dispatch(minimize());

    col === navbarConstants.NAV_COL_MAXIMIZE
      ? dispatch(minimize())
      : dispatch(maximize());
  };

  function maximize() {
    return { type: navbarConstants.NAV_COL_MAXIMIZE };
  }

  function minimize() {
    return { type: navbarConstants.NAV_COL_MINIMIZE };
  }
}
