import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import LoginScreen from '../src/login';
import { Login, Register, Submit, myProfile, scoreBoard, Graph, monthlyData, Profile, Faq, Review, Developer } from './component/login/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './component/login/welcome';

class App extends Component{
  
  render(){
    return (
<<<<<<< HEAD

      <div>
        <Router>
      <div>
        {/* <Login/>  */}
         <Link  to="/login">LOgin</Link>
        <Link to ="/register"> register</Link>
        <Link to="/myprofile"> Scoreboard </Link> 
        
      </div>



=======
      
      <Router>
       
      
   <div>
        <Route exact path="/" component={Welcome}/>
>>>>>>> 1f9d7c5b91c91a23020d88b833280ef21d5190c3
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
      
  </div>
  
   
    
     </Router>
     
    );
   }
}

export default App;
