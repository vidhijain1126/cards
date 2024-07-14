const min = 1;
const max = 13;

function randomNum(){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function winner() {
    const player1 = a.reduce((sum, item) => sum + item, 0);
    const player2 = b.reduce((sum, item) => sum + item, 0);
    const player3 = c.reduce((sum, item) => sum + item, 0);
    const player4 = d.reduce((sum, item) => sum + item, 0);

    const scores = {
        "Player1": player1,
        "Player2": player2,
        "Player3": player3,
        "Player4": player4
    };

    const maxScore = Math.max(...Object.values(scores));
    const winners = Object.entries(scores).filter(([player, score]) => score === maxScore);

    return winners;
}

const a = [randomNum(), randomNum(), randomNum(), randomNum()];
const b = [randomNum(), randomNum(), randomNum(), randomNum()];
const c = [randomNum(), randomNum(), randomNum(), randomNum()];
const d = [randomNum(), randomNum(), randomNum(), randomNum()];

console.log(`Player1: ${a} \nPlayer2: ${b} \nPlayer3: ${c} \nPlayer4: ${d}`);
const winners = winner();

if (winners.length > 1) {
    console.log(`\nWinners are ${winners.map(winner => winner[0]).join(', ')}`);
} else {
    console.log(`\nWinner is ${winners[0][0]}`);
}
