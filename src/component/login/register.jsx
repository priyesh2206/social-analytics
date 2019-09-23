import React  from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'; 
import Nav2 from './navbar';
 

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}
    this.updateRange = this.updateRange.bind(this)
  }
  updateRange(event) {
    this.setState({value: event.target.value});
  }
  
  

  render() {
        return (
       <div>
         {/* <Nav2 /> */}
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
          <img src={require('../../register.png')} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
               <input id="range" type="range"
                 value={this.state.value}
                  min="0 hours"
                   max="100 "
                   step="1"
                    onChange={this.updateRange}
                        />
                   <p><span id="output">{this.state.value}</span>Hours</p>
                   </div>  
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
           </div> 
          
        </div>
        
        <script src="./component/login/main"></script>
        <div className="footer">
        
          
          <Link to='/login'> <button type="button" className="btn">Register</button></Link>
           
          
          
          
          
        </div>
      </div>
      </div>
    );    
  }
}

export default Register;
