import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import UserNav from './userloginnav';

export class Submit extends React.Component {
    constructor(props) {
      super(props);
     }
    
    render() {
        return (
          <div>
            <UserNav  makeMeLoggedIn={this.props.makeMeLoggedIn}/>
        
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            <Link to='/myProfile'> <button type="button" className="btn">SUBMIT</button></Link>
          <button type="button" className="btn">CANCEL</button>
          </div>
        <DropdownMenu >
        <MenuItem text="HOME" location="/myProfile" />
        <MenuItem text="PROFILE" location="/profile" />
        <MenuItem text="REVIEW" location="/review" />
        <MenuItem text="FAQs" location="/faq" />
        <MenuItem text="LOGOUT" location="/" />
        <MenuItem text="DEVELOPERS" location="/developer" />
      </DropdownMenu>
      </div>
    
      </div>
      </div>
       );
    }
}

export default Submit;
