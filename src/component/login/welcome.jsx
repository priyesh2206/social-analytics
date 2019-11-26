import React from 'react';
import Nav2 from './navbar';
import Submit from './submit'
import UserNav from './userloginnav'
import "./welcome.css";

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
                        <div className="base-container">
                        <div className="content">
                        <h1 style={{marginTop:"50px"}}>Hey Folks! &#129312;<br></br>Focus on how to be social, not how to do social.!!&#128512;</h1>
                        </div>
                        </div>
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