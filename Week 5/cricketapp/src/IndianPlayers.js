function IndianPlayers() {

    const players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja",
        "R Ashwin",
        "Mohammed Shami"
    ];

    const oddPlayers = [];
    const evenPlayers = [];

    players.forEach((player, index) => {
        if ((index + 1) % 2 === 0)
            evenPlayers.push(player);
        else
            oddPlayers.push(player);
    });

    const T20players = ["Virat", "Rohit", "Surya"];
    const RanjiTrophyplayers = ["Pujara", "Rahane", "Iyer"];

    const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

    return (
        <div>

            <h2>Odd Team Players</h2>
            <ul>
                {oddPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Even Team Players</h2>
            <ul>
                {evenPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Merged Players</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

        </div>
    );
}

export default IndianPlayers;