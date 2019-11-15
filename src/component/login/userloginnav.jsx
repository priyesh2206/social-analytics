import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class  UserNav extends React.Component {

  logOut=()=>{
    localStorage.setItem('isLoggedIn',false);
    localStorage.setItem('userName',null);
    this.props.makeMeLoggedIn();
  }
    render() {
return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to ="/submit">SUBMIT</Link>
      <Link to ="/myProfile">MyProfile</Link>
      <Link to ="/scoreBoard">RankBoard</Link>
      <Link to ="/graph">GRAPH</Link>
      <Link to ="/monthlyData">MonthlyData</Link>
      <Link to ="/profile">PROFILE</Link>
      <Link to ="/Faq">FAQ</Link>
      <Link to ="/review">REVIEW</Link>
      <Link to ="/developer">DEVELOPER</Link>
      <button to ="/welcome" onClick={this.logOut}>LOGOUT</button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
}
export default UserNav;