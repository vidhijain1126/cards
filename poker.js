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
const a = [
  suits[randomCard()],
  suits[randomCard()],
  suits[randomCard()],
  suits[randomCard()],
  suits[randomCard()],
];
const c = [a[0].color, a[1].color, a[2].color, a[3].color, a[4].color];
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
console.log(a);
console.log(e);
if (checkToAreEqual(royal, e) && (c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4])) {
  console.log("Royal Flush");
}
else if (checkToAreEqual(stright,e) && (c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4])){
    console.log("Stright Flush")
}
else if((e[0]==e[1]&&e[1]==e[2]&&e[2]==e[3])|| (e[3]==e[4]&&e[1]==e[2]&&e[2]==e[3])){
    console.log("4 of a kind")
}
else if((e[0]==e[1]&&e[1]==e[2])&&(e[3]==e[4]) || (e[3]==e[4]&&e[3]==e[2])&&(e[0]==e[1])){
    console.log("Full House");
}
else if(c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4]) {
    console.log("Flush");
}
else if(e[0]+1 == e[1] && e[1]+1 == e[2]&& e[2]+1 == e[3]&& e[3]+1 == e[4]){
    console.log("Sequence");
}
else if((e[0]==e[1]&&e[1]==e[2])|| (e[3]==e[4]&&e[2]==e[3])){
    console.log("3 of a Kind")
}
else if((e[0]==e[1] && e[2]==e[3] && e[4]!=e[3])||(e[0]==e[1] && e[4]==e[3] && e[2]!=e[1])||(e[2]==e[1]&& e[4]==e[3] && e[4]!=e[3])){
    console.log("2 Pair");
}
else if(e[0]==e[1]||e[1]==e[2]||e[2]==e[3]||e[4]==e[3]){
    console.log("Pair");
}
else if(e[4]==13||e[4]==12||e[4]==11||e[4]==10||e[4]==1){
    console.log("High Card");
}
else{
    console.log("no hand ranking");
}
