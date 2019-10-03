import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';

export class Submit extends React.Component {
    constructor(props) {
      super(props);
     }
    
    render() {
      console.log(this.props)
        return (

          <div>
          { this.props.isUserLoggedIn ?
          <div>
            <UserNav  makeMeLoggedIn={this.props.makeMeLoggedIn}/>
        
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            <Link to='/myProfile'><button type="button" className="btn">SUBMIT</button></Link>
          <button type="button" className="btn">CANCEL</button>
          </div>
        </div>
       </div>
      </div>
      :null
    }
    </div>
       );
    }
}

export default Submit;
