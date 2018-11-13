import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation';
import {tareas} from './tareas.json';

class App extends Component {
  constructor(){
    super();
    this.tasks = {
      tareas
    }
  }

  render() {
    console.log(this.tasks.tareas);
    return (
      <div className="App">
          <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
