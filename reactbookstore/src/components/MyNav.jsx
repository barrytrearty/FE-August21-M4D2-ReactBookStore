// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
// import { Component } from "react";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Barry's Books</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#browse">Browse</Nav.Link>
      </Nav>
      {/*<Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>*/}
    </Navbar>
  );
};

export default MyNav;
