import React from 'react';
import Card from '../Card/Card';
import './Reservations.css';

const Reservations = ({ resys }) => {
  const resyCards = resys.map(resy => {
    return (
      <Card 
        id={resy.id}
        key={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
      />
    )
  })

  return (
    <section className='res-container'>
      {resyCards}
    </section>
  )
}

export default Reservations;