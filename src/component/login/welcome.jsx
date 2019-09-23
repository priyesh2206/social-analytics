import React from 'react';
import Nav2 from './navbar';

export class  Welcome extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
                <div>
                        <Nav2/>
                        <h1> WElcome to our extension</h1>
                </div>

            );
    }       
}
export default Welcome;