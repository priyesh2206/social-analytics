import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import { Login, Register, Submit, MyProfile, ScoreBoard, Graph, MonthlyData, Profile, Faq, Review, Developer, Nav2 } from './component/login/index';


import Welcome from './component/login/welcome';

if(localStorage.getItem('isLoggedIn')==null)
localStorage.setItem('isLoggedIn',false);

const getState=()=>{
  if(localStorage.getItem('isLoggedIn')=="false"){
    return false;
  }
  else{
    return true;
  }
}
const initialState={
  isUserLoggedIn:getState()
}


class App extends Component{
  
  constructor(props){
    super(props);
  
    this.state=initialState
  }

  
  makeMeLoggedIn=()=>{
    this.setState({isUserLoggedIn:getState()});
  }

  render(){
    console.log(this.state.isUserLoggedIn);
    return (
      <Router>
              <div>
                <Welcome makeMeLoggedIn={this.makeMeLoggedIn} /> 
              </div>

              <div>
                    <Route  exact path="/welcome" component={()=><Welcome makeMeLoggedIn={this.makeMeLoggedIn}/>}/>
                    <Route  exact path="/login" component={()=><Login  makeMeLoggedIn={this.makeMeLoggedIn}/>}/>
                    <Route  exact path='/register' component={()=><Register makeMeLoggedIn={this.makeMeLoggedIn}/>} />
                    <Route  exact path='/submit' component={()=><Submit makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn}/>} />
                    <Route  exact path='/myProfile' component={()=><MyProfile makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn}/>} />
                    <Route  exact path='/scoreBoard' component={()=><ScoreBoard makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn} /> } />
                    <Route  exact path='/graph' component={()=><Graph makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn} /> } />
                    <Route  exact path='/monthlyData' component={()=><MonthlyData makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn}/> } />
                    <Route  exact path='/profile' component={()=><Profile makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn} /> } />
                    <Route  exact path='/faq' component={()=><Faq makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn}/> } />
                    <Route  exact path='/review' component={()=><Review makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn} /> } />
                    <Route  exact path='/developer' component={()=><Developer makeMeLoggedIn={this.makeMeLoggedIn} isUserLoggedIn={this.state.isUserLoggedIn} /> } />
                  
              </div>
      </Router>

    );
   }
}

export default App;
