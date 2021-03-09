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
    this.getReservations();
  }

  getReservations = () => {
    apiCalls.getAllReservations()
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(resys => this.setState({ reservations: resys }));
  }

  makeReservation = (newRes) => {
    apiCalls.makeNewRes(newRes)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      // // This line makes the app immediately call from the api to reset state based off the api.
      // // Basically, gets immediately after the post
      // .then(() => this.getReservations());

      // // This line works better for testing cypress. It fires after the post has already happened, and then it sets the newRes from the parameter to the state. Technically, a passing test will assume that since the dom has updated from this setState, then the response must have been ok so it passes.
      .then(() => this.setState({ reservations: [...this.state.reservations, newRes] }));
  }

  cancelReservation= (id) => {
    apiCalls.deleteRes(id)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      // // here you could prolly follow the same concept by going with setState instead with filtered results based on the id passed into the parameters. Something like line 52 (maybe not exactly like; I didn't test this part before sending these notes lmaoooooooo):
      // .then(() => this.setState({ reservations: this.state.reservations.filter(res => res.id !== id)}))
      .then(() => this.getReservations());
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form makeNewRes={newRes => this.makeReservation(newRes)} />
        <Reservations resys={this.state.reservations} cancelRes={id => this.cancelReservation(id)} />
      </div>
    )
  }
}

export default App;
