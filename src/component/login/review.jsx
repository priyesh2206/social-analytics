import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';
import './review.css';

export class Review extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="threed1">REVIEW &nbsp;<i class="fa fa-star"></i></div>
          <div className="content">
          <div className="image">
            <img src={require('../../assets/review.jpg')} />
        </div>
        <p className="p1">For Review of our extension Please visit the Below link &#9997;
        <br></br>
          <a href="http://localhost:4200/" target="_blank">click it for Review</a>
          </p>
        </div>
      </div>
    </div>
    :null
    }
    </div>
       );
        }
    }   

export default Review;