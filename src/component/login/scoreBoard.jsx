import React, { useReducer } from 'react';
import "./ScoreBoard.css"



export class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      Age:[]
    };
  }
  myDate=()=>{
    const a = new Date();
    const days = new Array(7);
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    const day = days[a.getDay()];
    return day;
  }
  getage=()=>{
    const user=localStorage.getItem('isLoggedIn')
    if( user == 'true'){
      fetch(`http://localhost:4000/api/users/age/${localStorage.getItem('userName')}`).then(res=>{return res.json()}).then(data=>{
          this.setState({ 
            Age:data
          })
      })
    }
  }
  componentDidMount(){
 fetch('http://localhost:4000/getranks').then(results => {
            return results.json();
          }).then(data =>{
            data.sort((a, b) => a.timeMinutes - b.timeMinutes);
              this.setState({
                data: data
              });
          })

    const user=localStorage.getItem('isLoggedIn')
    if( user == 'true'){
      fetch(`http://localhost:4000/api/users/age/${localStorage.getItem('userName')}`).then(res=>{return res.json()}).then(data=>{
          this.setState({ 
            Age:data.Age
          })
      })
    }
  }


  limit=()=>{
       const userAge=this.state.Age
       if(userAge>=11 && userAge <=16){
         const limit = "2 hours {as per the Age Concern}"
         return limit 
    }
    else if(userAge >=17 && userAge <=24){
      const limit = "6 hours {as per the Age Concern}"
         return limit 
    }
    else if(userAge >=25 && userAge <= 40){
      const limit = "12 hours {as per the Age Concern}"
         return limit 
    }
    else if(userAge >=41 && userAge <=60){
      const limit ="9 hours {as per the Age Concern}"
      return limit 
    }
    else if(userAge>=61){
      const limit = "5 hours {as per the Age Concern}"
         return limit 
  }
}
    render(){
      const name=localStorage.getItem('userName')
      const Date = this.myDate();
      const Age= this.state.Age
      const limit=this.limit()
      const TableToPrint = this.state.data.map((d)=>{
          return <tr key={d._id}>
            <td>{d.username}</td>
            <td>{d.Age}</td>
            <td>{d.timeMinutes}</td>
          </tr>
      })
      return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
        {/* <div className="content">
        </div> */}
          <div className="threed"><h2>Rank Board  &#x1F396;</h2></div> 
          <div>
              <p className="Name">Name : {name}</p>
              <p className="Name">Age : {Age}&nbsp;Yrs</p> 
              <p className="Name">Current Day : {Date}</p>
              <p className="Name">Limit of User : {limit} </p>           
          </div>  
          </div>
              <table id="students">
                <tbody>
                <tr>
                  <th>UserName&nbsp;<i class="fa fa-user"></i></th>
                  <th>Age</th>
                  <th>TimeMinutes&nbsp; <i class="fa fa-hourglass-start"></i></th>
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