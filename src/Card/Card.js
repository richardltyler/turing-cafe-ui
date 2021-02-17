import React from 'react';
import './Card.css';

const Card = (props) => {
  const { name, date, time, number } = props;
  
  return (
    <article className='card'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h4>{time}</h4>
      <h5>{number}</h5>
      <button>CANCEL</button>
    </article>
  )
}

export default Card;