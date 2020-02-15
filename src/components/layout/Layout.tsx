import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Header from "../header/Header";

import { navbarConstants } from "./Constants";

import "./Layout.scss";
import { navbarActions } from "../../redux/actions/Navbar.Actions";

const Layout = (props: any) => {
  const toggleMenu = () => {
    const toggle =
      props.navColClassName === undefined
        ? navbarConstants.NAVBAR_MINIMIZED
        : props.navColClassName;

    props.toggleNavbar(toggle);
  };

  return (
    <Row className="layout-base">
      <Row className="layout-row">
        <Col className={"navbar-col " + props.navColClassName}>
          <Navbar
            navbarClassName={props.navColClassName}
            iconClassName={props.icon}
            activeClassName={props.active}
          />
        </Col>
        <Col className="content-col">
          <Row className="header-row">
            <Col>
              <Header toggleMenu={toggleMenu} />
            </Col>
          </Row>
          <Row className="content-row">
            <Col className="main-col">{props.children}</Col>
          </Row>
          <Row className="footer-row">
            <Footer />
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

function mapState(state: any) {
  const nav = state.navbarReducer;
  return nav;
}

const actionCreator = {
  toggleNavbar: navbarActions.toggleNavbar
};

export default connect(mapState, actionCreator)(Layout);
