import React, { Component } from 'react';

import CardsContainer from './containers/CardsContainer';

import './App.css';

class App extends Component {
  state = {
    colorData: []
  }

  componentDidMount() {
    fetch("https://reqres.in/api/unknown?per_page=12")
    .then(r => r.json())
    .then(o => {
      this.setState({
        colorData: o.data
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <CardsContainer colorData={this.state.colorData} />
      </div>
    );
  }
}

export default App;
