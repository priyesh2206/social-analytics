import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class  Nav2 extends React.Component {


    render() {
return(
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="mr-auto">
         <Link to="/login">LOGIN</Link>
         <Link to="/register">REGISTER</Link>
       </Nav>
     </Navbar.Collapse>
   </Navbar>
);
}
}
export default Nav2;