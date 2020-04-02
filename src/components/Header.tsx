import React, { useState } from "react";
import "../css/Header.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Container,
  Row,
  Col
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="menu">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Navbar light expand="md" className="nav" fixed="top">
              <Col xs={{ size: 1 }} sm={{ size: 1}} md={{ size: 1, offset : 1 }}>
                <NavbarBrand href="">
                  <img src="./img/profile.png" alt="프로필 사진" className="mainImg" />
                  <span className="mainTitle">SEUNG2</span>
                </NavbarBrand>
              </Col>
              <Col xs={3} sm={2} md={{ size: 1, offset: 1 }}>
                <NavbarToggler onClick={toggle} navbar />
              </Col>
              <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                  <NavItem className="navItem">
                    <NavLink href="#home" onClick={toggle}>HOME</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#about" onClick={toggle}>ABOUT</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#skills" onClick={toggle}>SKILLS</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#projects" onClick={toggle}>PROJECTS</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="#contact" onClick={toggle}>CONTACT</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
