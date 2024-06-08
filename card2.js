const min = 1
const max = 13
function randomNum(){
    return(Math.floor(Math.random()*(max-min+1))+min)
}
function winner() {
const obj = {
    "player1": Math.max(...a),
    "player2": Math.max(...b),
    "player3": Math.max(...c),
    "player4": Math.max(...d)
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