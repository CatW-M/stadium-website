    //Court
    //LockerRoom
    //Basketball
    //Players
    //Concessions
    //Fans
    //Sponsors
    //Mascot
    //Press
    //TicketCounters
    //Security

import React, { useState } from "react";
import Court from "./Court";


function Stadium() {
    const [players, setPlayers] = useState([
        {name: 'Jared Hayes', position: 'SF', number: '36'},
        {name: 'Corey Murphy', position: 'SG', number: '14'},
        {name: 'Calvin Moldenhauer', position: 'Center', number: '3'},
        {name: 'Alejandro Moreno', position: 'PG', number: '7'},
        {name: 'Lucy Wang', position: 'PF', number: '52'}
    ]);

return (
<div>
    <Court players={players} setPlayers={setPlayers}/>
</div>
);
}






export default Stadium;