import React from "react";
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'; 
import axios from "axios";
import "./login.scss";

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

getDate=()=>{
  const d1 = new Date();
  const d2= d1.getFullYear()+'-'+(d1.getMonth()+1)+'-'+(d1.getDate());
  return d2;
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
          const dated= this.getDate();
        const userRank ={
          username:localStorage.getItem('userName'),
          Age:localStorage.getItem('AGE'),
          timeMinutes:localStorage.getItem('minutes'),
          timeHours:localStorage.getItem('hours'),
          date:dated
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
      <div className="header1">Login &nbsp;<i class="fa fa-users"></i></div>
      <div className="content1">
        <div className="form1">
          <div className="form-group1">
            <label htmlFor="username">Username <i class="fa fa-user"></i></label>
            <input
               type="text"  
               name="username" 
               placeholder="username" 
               onChange={this.ChangeUsername}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="password">Password <i class="fa fa-lock"></i></label>
            <input 
               type="password" 
               name="password" 
               placeholder="password" 
               onChange={this.changePassword}
            />
          </div>
        </div>
      </div>
        <div>
      <div className="footer1">
          <Link to='/submit'> 
                <button type="button" className="btn" onClick={this.changeState}>
                   Login
                </button>
          </Link>
        </div>
       <div className="footer">
        <div className="Pre">
                      <p>
                        Already Have Account? &nbsp;
                        <Link to='/register'>
               <button type="button" className="btn" onClick={this.changeState}>
                  SignUp
               </button>
            </Link>
                      </p>
                      
                   </div>
            
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