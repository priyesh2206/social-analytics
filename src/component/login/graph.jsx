import React from 'react';
import "./graph.css";
var CanvasJSReact = require('../../assets/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export class Graph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
    const user=localStorage.getItem('isLoggedIn')
    if( user == 'true'){
      fetch(`http://localhost:4000/api/users/age/${localStorage.getItem('userName')}`).then(res=>{return res.json()}).then(data=>{
          this.setState({ 
            Age:data.Age
          })
      })
    }     
    }
     render() {
      const name=localStorage.getItem('userName')
      const Date = this.myDate();
      const Age= this.state.Age
      const limit=this.limit()
      const options = {
        theme: "light",
        animationEnabled: true,
        exportFileName: "Data Analysis of week",
        exportEnabled: true,
        title:{
          text: "Analysis Of One Week(Minutes)"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          legendText: "{label}",
          toolTipContent: "{label}: <strong>{y} Min</strong>",
          indexLabel: "{y} Min",
          indexLabelPlacement: "inside",
          dataPoints: [
            { y: 32 , label: "Monday" },
            { y: 48, label: "Tueday" },
            { y: 55, label: "Wednesday" },
            { y: 10, label: "Thusday" },
            { y: 36, label: "Friday" },
            { y: 40, label: "Saturday" },
            { y: 60, label: "Sunday" },
          ]
        }]
      }
      
        return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="threed"><h2>Graph analysis&nbsp;<i class="fa fa-line-chart"></i></h2></div>
         <div className="content">
          <div>
              <p className="Name">Name : {name}</p>
              <p className="Name">Age : {Age}&nbsp;Yrs</p> 
              <p className="Name">Current Day : {Date}</p>
              <p className="Name">Limit of User : {limit} </p>           
          </div> 
      <div>
        <CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
		</div>   
    </div> 
     </div>
     </div>
    :null}
    </div>
       );
        }
       
      }

export default Graph;