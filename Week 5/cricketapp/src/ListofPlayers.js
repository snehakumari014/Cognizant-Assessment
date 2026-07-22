function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 75 },
        { name: "Hardik Pandya", score: 55 },
        { name: "Ravindra Jadeja", score: 80 },
        { name: "R Ashwin", score: 45 },
        { name: "Mohammed Shami", score: 60 },
        { name: "Jasprit Bumrah", score: 72 },
        { name: "Suryakumar Yadav", score: 68 },
        { name: "Ishan Kishan", score: 90 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            <ul>
                {
                    players.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

            <h2>Players with score below 70</h2>

            <ul>
                {
                    below70.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default ListofPlayers;