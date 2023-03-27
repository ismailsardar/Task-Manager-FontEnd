import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../../assets/img/logo.svg";

const MasterLayout = () => {
  return (
    <>
      <Navbar className="fixed-top px-0 shadow-sm">
        <Container fluid={true}>
          <Navbar.Brand>
            <a className="icon-nav m-0 h5" ><AiOutlineMenuUnfold/></a>
            <img className="nav-logo mx-2" src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MasterLayout;
