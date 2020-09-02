import React from 'react';
import './Card.css'

const Card = (props) => {
  const { name, email } = props;
  return (
    <div id='card' className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://picsum.photos/id/${props.id}/200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
