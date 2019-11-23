import React from 'react';
var CanvasJSReact = require('../../assets/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


var dataPoints =[];
export class Graph extends React.Component {
    constructor(props) {
      super(props);
     }
     componentDidMount(){ 
       var chart = this.chart;
    const data=[
      {
        "x": 1483228800000,
        "y": 8561.3
      },
      {
        "x": 1485907200000,
        "y": 8879.6
      },
      {
        "x": 1488326400000,
        "y": 9173.75
      },
      {
        "x": 1491004800000,
        "y": 9304.05
      },
      {
        "x": 1493596800000,
        "y": 9621.25
      },
      {
        "x": 1496275200000,
        "y": 9520.9
      },
      {
        "x": 1498867200000,
        "y": 10077.1
      },
      {
        "x": 1501545600000,
        "y": 9917.9
      },
      {
        "x": 1504224000000,
        "y": 9788.6
      },
      {
        "x": 1506816000000,
        "y": 10335.3
      },
      {
        "x": 1509494400000,
        "y": 10226.55
      },
      {
        "x": 1512086400000,
        "y": 10530.7
      }
    ]
        for (var i = 0; i < data.length; i++) {
          dataPoints.push({
            x: new Date(data[i].x),
            y: data[i].y
          });
        }
        chart.render();
      }
     
     
     render() {
      const options = {
        theme: "light2",
        title: {
          text: "Stock Price of NIFTY 50"
        },
        axisY: {
          title: "Price in USD",
          prefix: "$",
          includeZero: false
        },
        data: [{
          type: "line",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "$#,##0.00",
          dataPoints: dataPoints
        }]
      }
        return (
          <div>
             { this.props.isUserLoggedIn ?
          <div>
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header1">Graph</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            <ul>
               <h1>NAME:</h1>
               <h1>SCORED:</h1>
               <h1>LIMIT:</h1>
               <li>Pie Graph</li>
               <li>Line Graph</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
		</div>  
    </div>
    :null}
    </div>
       );
        }
       
      }

export default Graph;