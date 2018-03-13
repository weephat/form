import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        value: '',
    }
}
handleBlur() {
  console.log(this.state.value)
}
handleChange(event) {
  this.setState({value: event.target.value})
}  
 handleSubmit(event){ 
   event.preventDefault();
   const formData = {};
   
     for (const data in this.refs) {
       formData[data] = this.refs[data].value;
     }
   console.log(formData)
 
  
 }
  render() {
    return (
      
        <div class="box">
        value: {this.state.value}
          <form onSubmit={this.handleSubmit.bind(this)}>
          Name:
  <input type="text" ref="username" placeholder={this.onChange} className="form-control"/>
          Comment:
          <textarea rows="4" cols="50" name="comment" onBlur={this.handleChange.bind(this)}>Enter text here...</textarea>

  <button type="submit" className="btn-danger btn-sm">Submit</button>
          </form>
        </div>
    );
  }
  
}

export default App;
