import React, { Component } from 'react';
import apiCalls from '../apiCalls';
import Form from '../Form/Form';
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
        <Form />
        <Reservations resys={this.state.reservations} />
      </div>
    )
  }
}

export default App;
