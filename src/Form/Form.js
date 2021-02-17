import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className='form'>
        <label>
          Name
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
        </label>

        <label>
          Date
          <input
            type='text'
            placeholder='Date'
            name='date'
            value={this.state.date}
            onChange={event => this.handleChange(event)}
          />
        </label>

        <label>
          Time
          <input
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={event => this.handleChange(event)}
          />
        </label>

        <label>
          Number of Guests
          <input
            type='text'
            placeholder='Number of Guests'
            name='number'
            value={this.state.number}
            onChange={event => this.handleChange(event)}
          />
        </label>

        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form;