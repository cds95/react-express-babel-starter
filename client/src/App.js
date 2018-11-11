import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { 
    message: ""
  }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/users')
      .then(res => res.json())
      .then(res => this.setState({message: res.message}));
  }

  render() {

    return (
      <div className="App">
        {this.state.message}
      </div>
    );
  }
}

export default App;