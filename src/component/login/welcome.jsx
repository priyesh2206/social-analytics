import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import Nav2 from './navbar';

export class  Welcome extends React.Component {


    render() {
return(
    <div>
    <Nav2 />
   
   <h1> WElcome to our extension</h1>
</div>

);
}
}
export default Welcome;