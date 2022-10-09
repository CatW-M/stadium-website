import React from "react";

function Player(props) {
    return (
        <div>
            <h4>{props.name} - #{props.number}</h4>
            <p>Position: {props.position}</p>
        </div>
    )
}




export default Player; 