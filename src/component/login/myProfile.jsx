import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';



export class MyProfile extends React.Component {
    constructor(props) {
      super(props);
      }

   render() {
    return (
      <div>
         { this.props.isUserLoggedIn ?
      <div>
        <UserNav makeMeLoggedIn={this.props.makeMeLoggedIn} />
       <div className="base-container" ref={this.props.containerRef}> 
      <div className="header">DashBoard</div>
      <div className="content">
      <div className="image">
        <img src={require('../../login.png')} />
        </div>
      <Link to='/scoreBoard'><button type="button" className="btn">SCOREBOARD</button></Link>
      <Link to='/graph'><button type="button" className="btn">GRAPH</button></Link>
      <Link to='/monthlyData'><button type="button" className="btn">MONTHLY DATA</button></Link>
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

export default MyProfile;






  

  

