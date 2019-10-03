import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';

export class Profile extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
         <UserNav makeMeLoggedIn={this.props.makeMeLoggedIn}/>
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header1">PROFILE</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            <ul>
                <h1>Name:</h1>
                <h1>SCORED:</h1>
                <h1>LIMIT:</h1>
            </ul>
          
          </div>
        </div>
        <div className="image">
        <img src="" alt="User Image" />
        </div>
      </div>
    </div>
    :null
    }
    </div>
       );
        }
    }   

export default Profile;