import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';

export class ScoreBoard extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header1">ScoreBoard</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            <ul>
          <h1>RANKS</h1>
          <h1>HIGHLIGHTS</h1>
          <h1>OPTION</h1>
          <h1>ONSCORED</h1>
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

export default ScoreBoard;