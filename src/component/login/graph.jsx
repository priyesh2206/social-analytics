import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';

export class Graph extends React.Component {
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
          <div className="header1">Graph</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            <ul>
               <h1>NAME:</h1>
               <h1>SCORED:</h1>
               <h1>LIMIT:</h1>
               <li>Pie Graph</li>
               <li>Line Graph</li>
            </ul>
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

export default Graph;