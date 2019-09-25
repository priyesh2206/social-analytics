import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';


export class MonthlyData extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
          <div>
         <UserNav makeMeLoggedIn={this.props.makeMeLoggedIn} />
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header1">Monthly Data</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            
          
          </div>
        </div>
        <div className="image">
        <img src="" alt="User Image" />
        </div>
      </div>
    </div>
       );
        }
    }   

export default MonthlyData;