import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';

export class  Nav2 extends React.Component {


    render() {
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/login'><a className="navbar-brand">LOGIN</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <Link to='/register'><a className="navbar-brand" href="#">REGISTER</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
</nav>


);
}
}
export default Nav2;