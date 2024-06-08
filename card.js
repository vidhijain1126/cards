const min = 1
const max = 13
function randomNum(){
    return(Math.floor(Math.random()*(max-min+1))+min)
}
function winner() {
    const player1= a.reduce(function(sum, item) {
        return sum + item;
    }, 0);
    const player2= b.reduce(function(sum, item) {
        return sum + item;
    }, 0);
    const player3= c.reduce(function(sum, item) {
        return sum + item;
    }, 0);
    const player4= d.reduce(function(sum, item) {
        return sum + item;
    }, 0);

    const obj= {
    "Player1": player1,
    "Player2": player2,
    "Player3": player3,
    "Player4": player4
}

const winObj = (Object.entries(obj).reduce((acc, entry)=>{
    return entry[1] > acc[1] ? entry : acc;
}));
const [key, value] = winObj;
    return ([key, value]);
}
const a = [randomNum(), randomNum(), randomNum(), randomNum()]
const b = [randomNum(), randomNum(), randomNum(), randomNum()]
const c = [randomNum(), randomNum(), randomNum(), randomNum()]
const d = [randomNum(), randomNum(), randomNum(), randomNum()]
console.log(`Player1: ${a} \nPlayer2: ${b} \nPlayer3: ${c} \nPlayer4: ${d}`);
const winners = winner();
console.log(`\nWinner is ${winners[0]}`);