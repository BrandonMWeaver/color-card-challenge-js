import React, { Component } from 'react';

import CardsContainer from './containers/CardsContainer';

import './App.css';

class App extends Component {
  state = {
    colors: []
  }
  
  render() {
    return (
      <div className="App">
        <CardsContainer colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
