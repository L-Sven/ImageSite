import Signin from "../../pages/auth/Signin";
import Home from "../../pages/home/Home";
import { faHome, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import Profile from "../../pages/profile/Profile";
import About from "../../pages/about/About";

export const authRoutes = {
  path: "/",
  name: "Auth",
  icon: null,
  children: [
    {
      path: "/login",
      name: "Sign in",
      component: Signin
    }
  ]
};

export const homeRoutes = {
  path: "/",
  name: "Start",
  icon: null,
  children: [
    {
      path: "/home",
      name: "Home",
      component: Home,
      icon: faHome
    },
    {
      path: "/profile",
      name: "My Profile",
      component: Profile,
      icon: faUser
    },
    {
      path: "/about",
      name: "About us",
      component: About,
      icon: faUsers
    }
  ]
};
