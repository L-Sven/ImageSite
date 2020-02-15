import { navbarConstants } from "../Constants";
import { navbarInitialState } from "../../models/Navbar";

const initalState: navbarInitialState = {
  navColClassName: navbarConstants.NAV_COL_MINIMIZE,
  active: navbarConstants.NAV_ITEM_ACTIVE_MINIMIZE,
  icon: navbarConstants.NAV_ITEM_ICON_MINIMIZE
};

export function toggleNavbar(state = initalState, action: any) {
  switch (action.type) {
    case navbarConstants.NAV_COL_MAXIMIZE:
      return {
        ...state,
        navColClassName: navbarConstants.NAV_COL_MAXIMIZE,
        active: navbarConstants.NAV_ITEM_ACTIVE_MAXIMIZE,
        icon: navbarConstants.NAV_ITEM_ICON_MAXIMIZE
      };

    case navbarConstants.NAV_COL_MINIMIZE:
      return {
        ...state,
        navColClassName: navbarConstants.NAV_COL_MINIMIZE,
        active: navbarConstants.NAV_ITEM_ACTIVE_MINIMIZE,
        icon: navbarConstants.NAV_ITEM_ICON_MINIMIZE
      };

    default:
      return state;
  }
}
