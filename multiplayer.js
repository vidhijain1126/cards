function randomCard() {
  return Math.floor(Math.random() * 54 + 1);
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const color = ["Hearts", "Dimands", "Spade", "Clubs"];
let suits = [];
color.forEach((item) => {
  num.forEach((items) => {
    let temp = { num: items, color: item };
    suits.push(temp);
  });
});
const a = [suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()]];
const a2 = [suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()]];
const a3 = [suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()]];
const a4 = [suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()],suits[randomCard()]];
const c = [a[0].color, a[1].color, a[2].color, a[3].color, a[4].color];
function ranking(a){
const d = [a[0].num, a[1].num, a[2].num, a[3].num, a[4].num];
const e = d.sort((a, b) => a - b);
let royal = [13, 12, 11, 10, 1];
let stright =[11,10,9,8,7]
function checkToAreEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
const z = []
function print(){
e.map((item)=>{
    if(item==1){
        item='a';
        z.push(item);
    }
    else if(item==11){
        item='j';
        z.push(item);
    }
    else if(item==12){
        item='q';
        z.push(item);
    }
    else if(item==13){
        item='k';
        z.push(item);
    }
    else{
        z.push(item);
    }
})   
}    
print()
console.log(z);      
if (checkToAreEqual(royal, e) && (c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4])) {
  console.log("Royal Flush");
  return 1;
}
else if (checkToAreEqual(stright,e) && (c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4])){
    console.log("Stright Flush");
    return 2;
}
else if((e[0]==e[1]&&e[1]==e[2]&&e[2]==e[3])|| (e[3]==e[4]&&e[1]==e[2]&&e[2]==e[3])){
    console.log("4 of a kind");
    return 3;
}
else if((e[0]==e[1]&&e[1]==e[2])&&(e[3]==e[4]) || (e[3]==e[4]&&e[3]==e[2])&&(e[0]==e[1])){
    console.log("Full House");
    return 4;
}
else if(c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4]) {
    console.log("Flush");
    return 5;
}
else if(e[0]+1 == e[1] && e[1]+1 == e[2]&& e[2]+1 == e[3]&& e[3]+1 == e[4]){
    console.log("Sequence");
    return 6;
}
else if((e[0]==e[1]&&e[1]==e[2])|| (e[3]==e[4]&&e[2]==e[3])){
    console.log("3 of a Kind");
    return 7;
}
else if((e[0]==e[1] && e[2]==e[3] && e[4]!=e[3])||(e[0]==e[1] && e[4]==e[3] && e[2]!=e[1])||(e[2]==e[1]&& e[4]==e[3] && e[4]!=e[3])){
    console.log("2 Pair");
    return 8;
}
else if(e[0]==e[1]||e[1]==e[2]||e[2]==e[3]||e[4]==e[3]){
    console.log("Pair");
    return 9;
}
else if(e[4]==13||e[4]==12||e[4]==11||e[4]==10||e[4]==1){
    console.log("High Card");
    return 10;
}
else{
    console.log("no hand ranking");
    return 11;
}
}
function winner() {
    const rankings = {
      "Player1": ranking(a),
      "Player2": ranking(a2),
      "Player3": ranking(a3),
      "Player4": ranking(a4),
    };
  
    const highestRank = Math.min(...Object.values(rankings));
    const winners = Object.entries(rankings)
      .filter(([player, rank]) => rank === highestRank)
      .map(([player]) => player);
  
    return winners;
  }
const winners = winner();
console.log(`\nWinner(s): ${winners.join(', ')}`);
