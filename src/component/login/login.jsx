import React from "react";
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav2 from './navbar';

const initialState={
  loginOpen:true
}

export class Login extends React.Component {
  constructor(props) {
    super(props);   
    this.state=initialState;
}

changeState=()=>{
  this.setState({loginOpen:false});
}
  render() {
    return (
    
  
   <div>
  <Nav2 />
        {this.state.loginOpen?(
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text"  name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
          <div>
        <div className="footer">
         <Link to='/submit'> <button type="button" className="btn" onClick={this.changeState}>
            Login
          </button></Link>
          </div>
          <div>
          <Link to='/register'> <button type="button" className="btn" onClick={this.changeState}>
            SignUp
          </button></Link>
        </div>
        </div>
        </div>):(
          null
        )
        }
      </div> 
     
    );
  }
}
export default Login;