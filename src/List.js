import React from 'react';
import Participant from './Participant'
import './participantList.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-participants'>
        {props.cards.map((participant) =>  
          <Participant
            key={participant.id} 
            name={participant.name}
            avatar={participant.avatar}
            inSession={participant.inSession}
            onStage={participant.onStage}
          />
        )}
      </div>
    </section>
  )
}
