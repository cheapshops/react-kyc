import React, { Component } from 'react';
import './App.css';
import './index.css';
import KycForm from './containers/KycForm'

class App extends Component {
  render() {
    return (
      <div style={{width:"80%",margin:"0 auto"}}>
        <KycForm/>
      </div>
    );
  }
}

export default App;
