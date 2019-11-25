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
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to ="/submit"><h6>Profile&nbsp;</h6></Link>
      {/* <Link to ="/myProfile"><h6>MyProfile&nbsp;</h6></Link> */}
      <Link to ="/scoreBoard"><h6>RankBoard&nbsp;</h6></Link>
      <Link to ="/graph"><h6>Graph&nbsp;</h6></Link>
      <Link to ="/monthlyData"><h6>WeeklyData&nbsp;</h6></Link>
      {/* <Link to ="/profile"><h6>PROFILE&nbsp;</h6></Link> */}
      <Link to ="/Faq"><h6>FAQ&nbsp;</h6></Link>
      <Link to ="/review"><h6>Review&nbsp;</h6></Link>
      <Link to ="/developer"><h6>Developer&nbsp;</h6></Link>
    </Nav>
    <button to ="/welcome" onClick={this.logOut}>LOGOUT</button>
  </Navbar.Collapse>
</Navbar>
);
}
}
export default UserNav;