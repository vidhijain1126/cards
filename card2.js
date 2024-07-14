const min = 1;
const max = 13;

function randomNum() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function winner() {
    const obj = {
        "player1": Math.max(...a),
        "player2": Math.max(...b),
        "player3": Math.max(...c),
        "player4": Math.max(...d)
    };

    const maxScore = Math.max(...Object.values(obj));
    const winners = Object.entries(obj).filter(([player, score]) => score === maxScore);

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
