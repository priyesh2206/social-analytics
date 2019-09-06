import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

export class Graph extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
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
        <DropdownMenu>
        <MenuItem text="HOME" location="/myProfile" />
        <MenuItem text="PROFILE" location="/profile" />
        <MenuItem text="REVIEW" location="/review" />
        <MenuItem text="FAQs" location="/faq" />
        <MenuItem text="LOGOUT" location="/" />
        <MenuItem text="DEVELOPERS" location="/developer" />
      </DropdownMenu>
      </div>
       );
        }
    }   

export default Graph;