import React from "react";
import "./participant.css";
import "./src/store.js"

const participant = ({ name, avatar, inSession, onStage}) =>  {
    return (
        <div className="participant">
            <img className="avatar" src={avatar} alt="avatar" />
        <div className="information">
            <p>{name}</p>
            <p>{inSession}</p>
            <p>{onStage}</p>        
        </div>
        </div>
    )
}

export default participant;