import React from 'react';
import './Stage.css';

export default function Stage(props) {
  return (
    <div className="participantsStage">
      <h3>{props.name}</h3>
      <h3><img src={props.avatar} alt='avatar'></img></h3>
    </div>
  )
}