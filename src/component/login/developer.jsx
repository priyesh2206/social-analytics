import React from 'react';
import UserNav from './userloginnav';

export class Developer extends React.Component {
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
                   <div className="header1">DEVELOPER</div>
                     <div className="content">
                        <div className="image">
                            <img src={require('../../login.png')} />
                        </div>
                     </div>
             </div>
             </div>
               :null
              }
          </div>
         );
      }
    }   

export default Developer;