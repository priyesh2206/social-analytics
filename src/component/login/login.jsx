import React from "react";
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'; 
import axios from "axios";
import "./login.css";

const initialState={
  loginOpen:true,
  userName:'',
  password:''
}

export class Login extends React.Component {
  constructor(props) {
    super(props);   
    this.state=initialState;
}


myDate=()=>{
  const a = new Date();
  const days = new Array(7);
  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";
  const day = days[a.getDay()];
  return day;
}
changeState=()=>{
  const fD={
    username:this.state.userName,
    password:this.state.password
  }
  console.log(this.state)
  axios.post('http://localhost:4000/api/users/login',fD).then(data=>{
    if(data.data.success==true){
      localStorage.setItem('isLoggedIn',true);
      localStorage.setItem('userName',fD.username)
      this.props.makeMeLoggedIn();
        const InterVal= setInterval(()=>{
        const days= this.myDate();
        const userRank ={
          username:localStorage.getItem('userName'),
          Age:localStorage.getItem('AGE'),
          timeMinutes:localStorage.getItem('minutes'),
          timeHours:localStorage.getItem('hours'),
          day:days
        }
        axios.post('http://localhost:4000/api/users/rank',userRank).then(data=>{
          console.log("user rank added successfully");
        })
        },60000)
        
    }
  })
}

ChangeUsername=(event)=>{
  this.setState({userName:event.target.value});
}

changePassword=(event)=>{
  this.setState({password:event.target.value});
}

  render() {
    return (
      <div>
        {this.state.loginOpen?(
        <div className="base-container1" ref={this.props.containerRef}>
        
        <div className="header1"><h1>Login</h1>
          <div className="form1">
            <div className="form-group1">
              <input
                 type="text"
                 name="username" 
                 placeholder="username" 
                 onChange={this.ChangeUsername}
              />
            </div>
            <div className="form-group1">
              <input 
                 type="password" 
                 name="password" 
                 placeholder="password" 
                 onChange={this.changePassword}
              />
            </div>
          </div>
          <div>
        <div className="footer">
            <Link to='/submit'> 
                  <button type="button" className="btn" onClick={this.changeState}>
                     Login
                  </button>
            </Link>
            </div>
            <div className="abc">
              <Link to='/register'>
                 <button type="button" className="btn" onClick={this.changeState}>
                    SignUp
                 </button>
              </Link>
          </div>
        </div>
        </div>
        </div>):(
          null
        )
        }
        {/* <section style={ sectionStyle }>
      </section> */}
      </div> 
     
    );
  }
}
export default Login;