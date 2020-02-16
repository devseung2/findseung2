import React from "react";
import "../App.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(): JSX.Element {
  return (
    <div id="contact" className="background-color-gray padding-top-btm-4e">
      <div>
        <p className="menu-name font-color-pink">CONTACT</p>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <FontAwesomeIcon icon={faEnvelope} className="icon-size" />
            <p className="font-bold font-1H font-color-bl">Email</p>
            <p className="font-bold font-color-lightgray">
              dev_seung2@naver.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
