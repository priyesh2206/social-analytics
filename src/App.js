import React from 'react';
import './App.css';
import { Login, Register} from './component/login/index';
import jquery from './component/login/jquery.txt';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      rangeVal: 0
    };
    this.updateRange = this.updateRange.bind(this);
  }
  
  updateRange(val) {
    this.setState({
      rangeVal: val
    })
  } 
    
  

  changeState() {
    
    const { isLogginActive } = this.state;
  
    
    if (isLogginActive) {
    
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
    
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { rangeVal } = this.state;
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "Login" : "Register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} range={rangeVal} updateRange={this.updateRange}/>
            )}
          </div>
          <RightSide current={current} currentActive={currentActive} containerRef={ref => (this.rightSide = ref)} onClick={this.changeState.bind(this)}/>
          
        </div>
      </div>


    )
  }
}

 const RightSide = props => {
    return (
      <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
      
    );
  };

export default App;
