import React, { Component } from 'react';
import apiCalls from '../apiCalls';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount = () => {
    apiCalls.getAllReservations()
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(resys => this.setState({ reservations: resys }));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        {/* <Reservations /> */}
      </div>
    )
  }
}

export default App;
