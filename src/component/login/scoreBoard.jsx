import React from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() 
// {
//     if (this.readyState == 4 && this.status == 200) 
//     {
//         var dataSet = JSON.parse(this.response);
//         //manipulate/visualise the data as you wish
//     }
// };
// xhttp.open("GET", "http://localhost:4000/getusers", true);
// xhttp.send();

export class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: [],
      data:null
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:4000/getusers').then(results => {
      return results.json();
  }).then(data => {
    
    data.map((d) => {
      console.log(d.username);
    })
      
  })
    }

    // if (this.props.data) {
    //   var commentNodes = this.props.data.map(function (comment){
    //       return (
    //         <div>
    //           <h1>{comment.author}</h1>
    //         </div>
    //       );
    //   });
    // }

    render(){
      return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header1">ScoreBoard</div>
            {this.state.Age};       
        <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
           </div>
           
          
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
     
export default ScoreBoard;