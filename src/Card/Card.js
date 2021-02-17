import React from 'react';
import './Card.css';

const Card = (props) => {
  const { name, date, time, number } = props;

  return (
    <article className='card'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h4>{`${time}pm`}</h4>
      <h5>{`Number of Guests: ${number}`}</h5>
      <button>CANCEL</button>
    </article>
  )
}

export default Card;