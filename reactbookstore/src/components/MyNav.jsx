// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
// import { Component } from "react";

const MyNav = ({ location }) => {
  return (
    <Navbar className="navbar" variant="dark">
      <Navbar.Brand href="#home">Barry's Book Bonanza</Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <Link to="/about">
          <div className="nav-link">About</div>
        </Link>
        {location.pathname === "/formlogin" ? (
          ""
        ) : (
          <Link to="/formlogin">
            <div className="nav-link">Log Out</div>
          </Link>
        )}
      </Nav>
      {/*<Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>*/}
    </Navbar>
  );
};

export default withRouter(MyNav);
