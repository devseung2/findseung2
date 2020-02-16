import React, { useState } from "react";
import "../css/Header.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="menu">
      <Navbar light expand="md" className="nav" fixed="top">
        <NavbarBrand href="/" className="navImg">
          <img src="./img/profile.png" alt="프로필 사진" className="mainImg" />
          <span className="mainTitle">SEUNG2</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} navbar />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className="navItem">
              <NavLink href="#home">HOME</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink href="#about">ABOUT</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink href="#skills">SKILLS</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink href="#projects">PROJECTS</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink href="#contact">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
