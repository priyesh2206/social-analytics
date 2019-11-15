import React from 'react';




export class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:4000/getusers').then(results => {
      return results.json();
  }).then(data => {
    
    data.map((d) => {
      console.log(d);
    })
      
  })
    }
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