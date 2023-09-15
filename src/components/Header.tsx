import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand style={{ marginLeft: "10px", marginTop: "3px"}} href="/">
          <img src="/assets/images/logo.png" style={{ height: "30px", width: "auto", marginRight: "15px", marginBottom: "5px"}}/>
          Vivaan Singhvi
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/aboutme">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
