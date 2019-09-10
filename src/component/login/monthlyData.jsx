import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';


export class monthlyData extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
          <div>
         <UserNav />
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

export default monthlyData;