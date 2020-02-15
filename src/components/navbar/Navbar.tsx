import React from "react";

import { homeRoutes } from "../routes/Index";
import { NavLink } from "reactstrap";

import { history } from "../../helpers/History";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

interface INavbar {
  navbarClassName: string;
  activeClassName: string;
  iconClassName: string;
}

const Navbar = (props: INavbar) => {
  const getListStyle = (
    Icon: any,
    path: string,
    name: string,
    index: number
  ) => (
    <NavLink
      to={path}
      className="navlink-item"
      key={index}
      onClick={() => navigateTo(path)}
    >
      <span className={"navlink-span " + isActiveLocation(path)}>
        <FontAwesomeIcon icon={Icon} className={props.iconClassName} />
        {props.activeClassName.includes("min") ? (
          <></>
        ) : (
          <span className="navlink-name-span">{name}</span>
        )}
      </span>
    </NavLink>
  );

  const isActiveLocation = (path: string) => {
    return location.pathname === path ? props.activeClassName : "";
  };

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <li className="nav-list">
      {homeRoutes.children.map(({ path, name, icon: Icon }, index) =>
        getListStyle(Icon, path, name, index)
      )}
    </li>
  );
};

export default Navbar;
