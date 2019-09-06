import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Login, Register, Submit, myProfile, scoreBoard, Graph, monthlyData, Profile, Faq, Review, Developer } from './component/login';
//import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'; 
//import Route from 'react-router-dom/Route';
//import { createMemoryHistory } from 'history'




ReactDOM.render(<App/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

{/* <Router  history={createMemoryHistory}>
    <div>
      <Route   path='/'  component={Login} />
      <Route  exact path='/register' component={Register} />
      <Route  exact path='/submit' component={Submit} />
      <Route  exact path='/myProfile' component={myProfile} />
      <Route  exact path='/scoreBoard' component={scoreBoard} />
      <Route  exact path='/graph' component={Graph} />
      <Route  exact path='/monthlyData' component={monthlyData} />
      <Route  exact path='/profile' component={Profile} />
      <Route  exact path='/faq' component={Faq} />
      <Route  exact path='/review' component={Review} />
      <Route  exact path='/developer' component={Developer} />
      
    </div>


</Router> */}