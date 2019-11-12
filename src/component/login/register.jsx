import React  from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'; 
import axios from 'axios';

 

export class Register extends React.Component {
  constructor(props) {
    super(props);
    // this.updateRange = this.updateRange.bind(this);
    // this.updateRangeMin = this.updateRangeMin.bind(this);
    this.state = {file: '',imagePreviewUrl: ''};
    this.state = {
      username:"",
      email:"",
      Age:"",
      password:"",
      password2:"",
      Errors:{}
    }
  }
//*****/fetching User Inputs/*****//
  changeusername=(event)=>{
    this.setState({username:event.target.value});
  }
  changeemail=(event)=>{
    this.setState({email:event.target.value});
  }
  changeAge=(event)=>{
    console.log(event)
    this.setState({Age:event.target.value});
  }
  changepassword=(event)=>{
    this.setState({password:event.target.value});
  }
  changepassword2=(event)=>{
    this.setState({password2:event.target.value});
  }
 //*****/create User/*****/
  onSubmit = e => {
   const newUser = {
     username:this.state.username,
     email:this.state.email,
     Age:this.state.Age,
     password:this.state.password,
     password2:this.state.password2
    }
    console.log(newUser);
    axios.post("http://localhost:4000/api/users/register",newUser).then(data=>{
      console.log("user Added Successfully");
      const {username,Age} = this.state;
      localStorage.setItem('username',username);
      localStorage.setItem('Age',Age);
    })
  };

      render() {
       const {Errors} = this.state;
       
return (
     <div>
          <div className="base-container" ref={this.props.containerRef}>
             <div className="header">Register</div>
                  <div className="content">
                   <div className="image">
                       <img src={require('../../register.png')} />
                   </div>
                   <div >
                      <p>
                        Already Have Account? <Link to ='/login'>LogIn</Link>
                      </p>
                   </div>
                    <div className="form">
         {/* register input Fileds */}
       <form onValidate onSubmit={this.onSubmit}>
       <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                  onChange={this.changeusername}
                  error= {Errors.username}
                  type="text" 
                  name="username" 
                  placeholder="username" 
              />
       </div>
        <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                  onChange={this.changeemail}
                  error={Errors.email}
                  type="text" 
                  name="email" 
                  placeholder="email" 
              />
        </div>
        <div className="form-group">
              <label htmlFor="Age">Age</label>
              <input 
                  onChange={this.changeAge}
                  type="text" 
                  name="age" 
                  placeholder="Age" 
              />
        </div>
        
        <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                  onChange = {this.changepassword}
                  error = {Errors.password}
                  type="text" 
                  name="password" 
                  placeholder="password" 
              />
        </div>
        <div className="form-group">
              <label htmlFor="password2">Confirm-Password</label>
              <input
                  onChange = {this.changepassword2}
                  error = {Errors.password2}
                  type="text" 
                  name="password2" 
                  placeholder="Re-password" 
              />
        </div>
        </form>
      </div>
    </div>    
    <script src="./component/login/main"></script>
    <div className="footer">
         <Link to='/login'> 
               <button type="button" className="btn" onClick={this.onSubmit}>
                 Register
               </button>
         </Link>
    </div>
  </div>
</div>
    );    
  }
}

export default Register;
