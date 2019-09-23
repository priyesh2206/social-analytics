import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';

export class ScoreBoard extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
          <div>
          <UserNav makeMeLoggedIn={this.props.makeMeLoggedIn}/>
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
        <DropdownMenu>
        <MenuItem text="HOME" location="/myProfile" />
        <MenuItem text="PROFILE" location="/profile" />
        <MenuItem text="REVIEW" location="/review" />
        <MenuItem text="FAQs" location="/faq" />
        <MenuItem text="LOGOUT" location="/" />
        <MenuItem text="DEVELOPERS" location="/developer" />
      </DropdownMenu>
      </div>
      </div>
       );
        }
    }   

export default ScoreBoard;