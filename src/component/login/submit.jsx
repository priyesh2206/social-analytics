import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './submit.css';

export class Submit extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        data:[],
        Age:[],
        email:[]
      }
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
    
     componentDidMount(){
       const login = localStorage.getItem('isLoggedIn')
       if(login == 'true'){
      fetch(`http://localhost:4000/api/users/age/${localStorage.getItem('userName')}`).then(res=>{return res.json()}).then(data=>{
          this.setState({ 
            Age:data.Age
          })
      })

      fetch(`http://localhost:4000/api/users/email/${localStorage.getItem('userName')}`).then(res=>{return res.json()}).then(data=>{
          this.setState({ 
            email:data.email
          })
      })
    }
      }

    render() {
      console.log(this.props)
      const name=localStorage.getItem('userName');
      const Date=this.myDate();
      const Ages=this.state.Age;
      const limit=this.limit();
      const email= this.state.email
      return (
  
          <div>
          { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="content">
            <div className="card">
          <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => this.flippy = r}
              style={{ width: '400px', height: '400px' }} /// these are optional style, it is not necessary
           >
              <FrontSide
                style={{
                  backgroundColor: '#DFF6F0',
                }}
              >
              <h1 className="threed2"> Profile &nbsp;<i class="fa fa-users"></i></h1>
              <div className="pos">
               <p className="Name">Name : {name}</p>
              <p className="Name">Age : {Ages}Yrs</p> 
              <p className="Name">Email :{email}</p> 
              <p className="Name">Current Day : {Date}</p>
             
              </div>  
              </FrontSide>
              <BackSide
                style={{ backgroundColor: '#175852'}}>
                  <div className="pos">
                <p className="Name">Limit of User 📵 :{limit} </p> 
                <div className="time">
               <p className="Name">
                "The key is in not spending time, but in investing it."🙃
                </p>
                </div>
                </div>  
              </BackSide>
            </Flippy>
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

export default Submit;
