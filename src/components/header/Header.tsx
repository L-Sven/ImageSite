import * as React from "react";
import { Row, Col } from "reactstrap";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.scss";

interface IHeader {
  toggleMenu: Function;
}

const Header = (props: IHeader) => {
  return (
    <Row>
      <Col md={1} className="menu-col">
        <div className="menu-div">
          <FontAwesomeIcon
            icon={faAlignLeft}
            className="image-fluid menu-icon"
            onClick={() => props.toggleMenu()}
          />
        </div>
      </Col>
      <Col md={2} />
      <Col md={3} />
      <Col md={3} />
      <Col md={3} />
    </Row>
  );
};

export default Header;
