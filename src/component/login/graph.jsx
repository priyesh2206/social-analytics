// import React from 'react';
// import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
// import UserNav from './userloginnav';
// import ReactFC from 'react-fusioncharts';



// export class Graph extends React.Component {
//       state = { pieConfigs:'',data:[]}
//      componentDidMount(){
//       fetch('http://localhost:4000/getranks')
//       .then(response => response.json())
//       .then(data => this.setState({ data }))
// }
//      render() {
//         return (
//           <div>
//              { this.props.isUserLoggedIn ?
//           <div>
//           <div className="base-container">
//           <div className="header">Social Analytics</div>
//           <div className="header1">Graph</div>
//           <div className="content">
//           <div className="image">
//             <img src={require('../../login.png')} />
//             <ul>
               
//                <li>Pie Graph</li>
             
//             </ul>
//             <ReactFC {...this.state.pieConfigs}/>
            
//           </div>
//         </div>
//         <div className="image">
//         <img src="" alt="User Image" />
//         </div>
//       </div>
//     </div>
//     :null}
//     </div>
    
         
//        );
//         }
//     }   

// export default Graph;
var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('canvasjs');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
var dataPoints =[];
class Graph extends Component {
 
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
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	componentDidMount(){
		var chart = this.chart;
		fetch('http://localhost:4000/getranks')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x:(data[i].x),
					y: data[i].y
				});
			}
			chart.render();
		});
	}
}
 
module.exports = Graph; 