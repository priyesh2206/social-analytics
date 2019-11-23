import React from 'react';



export class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  
  componentDidMount(){
 fetch('http://localhost:4000/getranks').then(results => {
            return results.json();
          }).then(data => {
            data.sort((a, b) => a.timeMinutes - b.timeMinutes);
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
            <td>{d.Age}</td>
            <td>{d.timeMinutes}</td>
            <td>{d.timeHours}</td>
            <td>{d.timestamp}</td>
          </tr>
      })
      return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header1">ScoreBoard</div>
        <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
           </div>
    </div>
          <div className="header">Rank Board</div>   
          </div>
              <table id="students">
                <tbody>
                <tr>
                  <th>UserId</th>
                  <th>UserName</th>
                  <th>Age</th>
                  <th>TimeMinutes</th>
                  <th>TimeHours</th>
                  <th>Timestamp</th>
                </tr>  
                {TableToPrint}
                </tbody> 
              </table>
          </div>
      :null
      }
      </div>
       );
    }
    } 
     
export default ScoreBoard;