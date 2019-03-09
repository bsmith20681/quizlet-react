import React, { Component } from 'react';
import Flashcard from './components/Flashcard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flashcard />
      </div>
    );
  }
}

export default App;
