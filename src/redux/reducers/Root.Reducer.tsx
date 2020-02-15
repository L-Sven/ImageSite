import { combineReducers } from "redux";

import { authentication as authReducer } from "./Auth.Reducer";
import { toggleNavbar as navbarReducer } from "./Navbar.Reducer";

const rootReducer = combineReducers({
  authReducer,
  navbarReducer
});

export default rootReducer;
