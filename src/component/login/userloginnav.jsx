import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class  UserNav extends React.Component {

  logOut=()=>{
    localStorage.setItem('isLoggedIn',false);
    localStorage.setItem('userName',null);
    localStorage.removeItem('minutes');
    localStorage.removeItem('hours');
    this.props.makeMeLoggedIn();
    let higestInterval = setInterval(function(){
    },0);
    for(let i=higestInterval;i>0;i--){
      clearInterval(i);
    }
  }
    render() {
return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to ="/submit"><h6>SUBMIT&nbsp;</h6></Link>
      <Link to ="/myProfile"><h6>MyProfile&nbsp;</h6></Link>
      <Link to ="/scoreBoard"><h6>RankBoard&nbsp;</h6></Link>
      <Link to ="/graph"><h6>GRAPH&nbsp;</h6></Link>
      <Link to ="/monthlyData"><h6>MonthlyData&nbsp;</h6></Link>
      <Link to ="/profile"><h6>PROFILE&nbsp;</h6></Link>
      <Link to ="/Faq"><h6>FAQ&nbsp;</h6></Link>
      <Link to ="/review"><h6>REVIEW&nbsp;</h6></Link>
      <Link to ="/developer"><h6>DEVELOPER&nbsp;</h6></Link>
      <button to ="/welcome" onClick={this.logOut}>LOGOUT</button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
}
export default UserNav;