import React  from 'react';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom'; 
import Nav2 from './navbar';
 

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valueHour: 0, valueMin: 0};
    this.updateRange = this.updateRange.bind(this);
    this.updateRangeMin = this.updateRangeMin.bind(this);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  updateRange(event) {
    this.setState({value: event.target.value});
  }

  updateRangeMin(event) {
    this.setState({valueMin: event.target.value});
  }
  
  

  render() {
       let {imagePreviewUrl} = this.state;
       let $imagePreview = null;
       if (imagePreviewUrl) {
         $imagePreview = (<img src={imagePreviewUrl} />);
       } else {
         $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
       }
         return (
       <div>
         {/* <Nav2 /> */}
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
          <img src={require('../../register.png')} />
          </div>
          <div className="form">
          <div className="form-group">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image
            </button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
     </div>
              <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
               <input id="range" type="range"
                 value={this.state.value}
                  min="0 hours"
                   max="100 "
                   step="1"
                    onChange={this.updateRange}
                        />
                   <p><span id="output">{this.state.value}</span>Hours</p>
                   </div>  
                   <div className="form-group">
               <input id="range" type="range"
                 valueMin={this.state.value}
                  min="0 minutes"
                   max="100 "
                   step="1"
                    onChange={this.updateRangeMin}
                        />
                   <p><span id="output">{this.state.valueMin}</span>Minutes</p>
                   </div>  
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
           </div> 
          
        </div>
        
        <script src="./component/login/main"></script>
        <div className="footer">
        
          
          <Link to='/login'> <button type="button" className="btn">Register</button></Link>
           
          
          
          
          
        </div>
      </div>
      </div>
    );    
  }
}

export default Register;
