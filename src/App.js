import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import { Login, Register, Submit, MyProfile, ScoreBoard, Graph, MonthlyData, Profile, Faq, Review, Developer, Nav2 } from './component/login/index';

import Welcome from './component/login/welcome';

const initialState={
  isUserLoggedIn:false
}


class App extends Component{
  
  constructor(props){
    super(props);
    this.state=initialState;
  }

  makeMeLoggedIn=()=>{
    this.setState({isUserLoggedIn:!this.state.isUserLoggedIn});
  }

  render(){
    console.log(this.state)
    return (
      <Router>
              <div>
                {!this.state.isUserLoggedIn?<Welcome /> : null}
              </div>

              <div>
                    <Route  exact path="/welcome" component={Welcome}/>
                    <Route  exact path="/login" component={()=><Login  makeMeLoggedIn={this.makeMeLoggedIn}/>}/>
                    <Route  exact path='/register' component={()=><Register makeMeLoggedIn={this.makeMeLoggedIn}/>} />
                    <Route  exact path='/submit' component={()=><Submit makeMeLoggedIn={this.makeMeLoggedIn}/>} />
                    <Route  exact path='/myProfile' component={()=><MyProfile makeMeLoggedIn={this.makeMeLoggedIn}/>} />
                    <Route  exact path='/scoreBoard' component={()=><ScoreBoard makeMeLoggedIn={this.makeMeLoggedIn} /> } />
                    <Route  exact path='/graph' component={()=><Graph makeMeLoggedIn={this.makeMeLoggedIn} /> } />
                    <Route  exact path='/monthlyData' component={()=><MonthlyData makeMeLoggedIn={this.makeMeLoggedIn} /> } />
                    <Route  exact path='/profile' component={()=><Profile makeMeLoggedIn={this.makeMeLoggedIn} /> } />
                    <Route  exact path='/faq' component={()=><Faq makeMeLoggedIn={this.makeMeLoggedIn} /> } />
                    <Route  exact path='/review' component={()=><Review makeMeLoggedIn={this.makeMeLoggedIn} /> } />
                    <Route  exact path='/developer' component={()=><Developer makeMeLoggedIn={this.makeMeLoggedIn} /> } />
                  
              </div>
      </Router>

    );
   }
}

export default App;
