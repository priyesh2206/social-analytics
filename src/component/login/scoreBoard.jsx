import React from 'react';




export class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
=======
      data:[]
>>>>>>> dd63efab0ec7104533728ce9dfaaf31b5ae3fa92
    };
  }
  
  componentDidMount(){
<<<<<<< HEAD
    fetch('http://localhost:4000/getusers').then(results => {
      return results.json();
  }).then(data =>{
    data.map((d) =>{
      console.log(d);
    })
      
  })
=======
          fetch('http://localhost:4000/getusers').then(results => {
            return results.json();
          }).then(data => {
              this.setState({
                data: data
              });
          })
>>>>>>> dd63efab0ec7104533728ce9dfaaf31b5ae3fa92
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
<<<<<<< HEAD
          <div className="header1">ScoreBoard</div>       
        <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
           </div>
           
          
    </div>
          <div className="image">
        <img src="" alt="User Image" />
        </div>
=======
          <div className="header">Rank Board</div>   
              <div className="content">
                  <div className="image">
                    <img src={require('../../login.png')} />
                  </div>
              </div>
          </div>
              <table id="students">
                <tbody>
                <tr>
                  <th>UserId</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>timestamp</th>
                </tr>  
                {TableToPrint}
                </tbody> 
              </table>
          </div>
      :null
      }
>>>>>>> dd63efab0ec7104533728ce9dfaaf31b5ae3fa92
      </div>
       );
      }
    } 
     
export default ScoreBoard;