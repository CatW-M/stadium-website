import React from "react";
import Player from "./Player";

function Court(props) {
    const playersList = props.players.map((player, idx) => {
        return (
            <Player key={idx} name={player.name} number={player.number} position={player.position} />
        )
    })

    function benchLastPlayer() {
        let playerCopy = [...props.players];
        playerCopy.pop();
        props.setPlayers(playerCopy);
    }

    function addPlayer(e) {
        e.preventDefault();
        let name = document.querySelector('#name').value;
        let number = document.querySelector('#number').value;
        let position = document.querySelector('#position').value;
        const newPlayer = {name, number, position};
        //add player to the list of players
        let temp = [...props.players];
        temp.push(newPlayer);
        props.setPlayers(temp);

    }

    return (
        <div>
            <h1>Court</h1>
            <form onSubmit={addPlayer}>
                <input type="text" name="name" id="name" placeholder="Name"/>
                <input type="text" name="number" id="number" placeholder="Number"/>
                <input type="text" name="position" id="position" placeholder="Position"/>
                <button type="submit">Add Player</button>
            </form>
            <h3>{playersList}</h3>
            <button onClick={benchLastPlayer}>Bench Last Player</button><br/>
          
        </div>

    )
}




export default Court;
