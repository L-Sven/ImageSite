import React from "react";
import { Col, Media } from "reactstrap";
import placeholder from "../../images/placeholder100x50.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <Col md={1} className="powered-by-col">
        <small>Powered by:</small>
      </Col>
      <Col md={1} className="media-col">
        <Media
          src={placeholder}
          alt="some placeholder"
          className="media-size"
        />
      </Col>
    </>
  );
};

export default Footer;
