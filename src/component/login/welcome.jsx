import React from 'react';
import Nav2 from './navbar';
import Submit from './submit'
import UserNav from './userloginnav'

export class  Welcome extends React.Component {

    constructor(props){
        super(props);
    }

    getComponent=()=>{
        
        if(localStorage.getItem('isLoggedIn')=="true"){
            return <UserNav makeMeLoggedIn={this.props.makeMeLoggedIn}/> 
        }
        else{
            return( 
                        <div>
                        <Nav2/>
                        <h1> WElcome to our extension</h1>
                        </div>
            )
        }
    }
    render() {
        return(
            <div>
                {this.getComponent()}
            </div>
            );
    }       
}
export default Welcome;