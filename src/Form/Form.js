import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitNewRes = event => {
    event.preventDefault();
  
    const newRes = {
      id: Date.now(),
      ...this.state
    };

    if (this.checkAllInputs()) {
      this.props.makeNewRes(newRes);
      this.clearInputs();
    }
  }

  checkAllInputs() {
    return Object.values(this.state).some(value => !!value);
  }

  clearInputs() {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  render() {
    return (
      <form className='form'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitNewRes(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;