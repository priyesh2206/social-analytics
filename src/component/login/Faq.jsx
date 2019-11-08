import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';

export class Faq extends React.Component {
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
          <div className="header1">FAQs</div>
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
    :null}
    </div>
       );
      }
    }   

export default Faq;