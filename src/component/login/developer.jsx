import React from 'react';
import "./developer.css";

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
                   <div className="threed2">DEVELOPER&nbsp;<i class="fa fa-code"></i></div>
                     <div className="content">
                       <p className="pd"> Made With 💙 by Amrita Arora ,&nbsp;Rashi Gupta,&nbsp;Priyesh Rathore.</p>
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