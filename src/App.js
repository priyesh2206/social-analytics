import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import LoginScreen from '../src/login';
import { Login, Register, Submit, myProfile, scoreBoard, Graph, monthlyData, Profile, Faq, Review, Developer } from './component/login';

class App extends Component{
  
  render(){
    return (

      <div>
        <Router>
      <div>
        {/* <Login/>  */}
         <Link  to="/login">LOgin</Link>
        <Link to ="/register"> register</Link>
        <Link to="/myprofile"> Scoreboard </Link> 
        {/* <Link to="/scoreBoard"> Scoreboard </Link>
        {/* <Link to="/scoreBoard"> Scoreboard </Link>
        <Link to="/scoreBoard"> Scoreboard </Link>
        <Link to="/scoreBoard"> Scoreboard </Link>
        <Link to="/scoreBoard"> Scoreboard </Link>
        <Link to="/scoreBoard"> Scoreboard </Link> */} */}
        
      </div>



        <Route exact path="/login" component={Login}/>
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
        </Router>
      </div>

    )
  }
}

export default App;
