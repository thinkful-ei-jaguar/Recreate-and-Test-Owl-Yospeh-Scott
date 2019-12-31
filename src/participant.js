import React from "react";
import "./Participant.css";


export default function Participant(props) {
    return (
        <div className="participant">
            <img className="avatar" src={props.avatar} alt="avatar" />
        <div className="information">
            <p>{props.name}</p>
            <p>{props.inSession}</p>
            <p>{props.onStage}</p>        
        </div>
        </div>
    )
}
