import React from 'react';




export class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  
  componentDidMount(){
          fetch('http://localhost:4000/getusers').then(results => {
            return results.json();
          }).then(data => {
              this.setState({
                data: data
              });
          })
    }
    
    render(){
      const TableToPrint = this.state.data.map((d)=>{
          return <tr key={d._id}>
            <td>{d._id}</td>
            <td>{d.username}</td>
            <td>{d.email}</td>
            <td>{d.Age}</td>
            <td>{d.timestamp}</td>
          </tr>
      })
      return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header">Rank Board</div>   
              <div className="content">
                  <div className="image">
                    <img src={require('../../login.png')} />
                  </div>
              </div>
          </div>
              <table id="students">
                <tr>
                  <th>UserId</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>timestamp</th>
                </tr>  
                {TableToPrint} 
              </table>
          </div>
      :null
      }
      </div>
       );
      }
    } 
     
export default ScoreBoard;