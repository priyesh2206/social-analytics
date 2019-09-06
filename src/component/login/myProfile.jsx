import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';




export class myProfile extends React.Component {
    constructor(props) {
      super(props);
     
     
     
    }

   

    render() {
    return (
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
<div>
    <DropdownMenu>
        <Link to="/myProfile"><MenuItem text="HOME"  /></Link>
        <Link to="/profile"> <MenuItem text="PROFILE" /></Link>
        <Link to="/review"> <MenuItem text="REVIEW"/></Link>
        <Link to="/faq" ><MenuItem text="FAQs" /></Link>
        <Link to="/" >  <MenuItem text="LOGOUT"/></Link>
      <  Link to="/developer"><MenuItem text="DEVELOPERS" /></Link>
      </DropdownMenu>
    
    </div>
    </div>
   );
    }
}

export default myProfile;






  

  

