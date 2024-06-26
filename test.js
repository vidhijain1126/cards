//const a = [1,12,123,11,12]
function randomCard(){
    return (Math.floor(Math.random()*54+1));
}
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const color = ['Hearts', 'Dimands','Spade','Clubs']
let suits = []
color.forEach((item)=>{
    num.forEach((items)=>{
        let temp = {num: items, color: item};
        suits.push(temp);
    })
})
const a = [suits[randomCard()], suits[randomCard()], suits[randomCard()], suits[randomCard()], suits[randomCard()]]
const c = [a[0].color, a[1].color, a[2].color, a[3].color, a[4].color]
console.log(a);
//---------Royal Flush---------
let z,y,x,w,v,u;
z=y=x=w=v=u=0;
let p = [];
a.forEach((item)=>{
    if(item.num==1){
        if(y==0){
        z=1;
        p.push(z);
        y++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==13){
        if(x==0){
        z=1;
        p.push(z);
        x++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==12){
        if(w==0){
        z=1;
        p.push(z);
        w++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==11){
        if(v==0){
        z=1;
        p.push(z);
        v++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==10){
        if(u==0){
        z=1;
        p.push(z);
        u++;
        }
        else{
            p.push(z)
        }
    }
    else{
        z=0;
        p.push(z);
    }
})
if(p[0]==1){
    if((p[0]==p[1] && p[1]==p[2] && p[2]==p[3] && p[3]==p[4]) && (c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4])) {
        console.log("royal flush");
    }
}

//------------Stright Flush--------
z=y=x=w=v=u=0;
p = [];
a.forEach((item)=>{
    if(item.num==11){
        if(y==0){
        z=1;
        p.push(z);
        y++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==10){
        if(x==0){
        z=1;
        p.push(z);
        x++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==9){
        if(w==0){
        z=1;
        p.push(z);
        w++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==8){
        if(v==0){
        z=1;
        p.push(z);
        v++;
        }
        else{
            p.push(z)
        }
    }
    else if(item.num==7){
        if(u==0){
        z=1;
        p.push(z);
        u++;
        }
        else{
            p.push(z)
        }
    }
    else{
        z=0;
        p.push(z);
    }
})
if(p[0]==1){
    if((p[0]==p[1] && p[1]==p[2] && p[2]==p[3] && p[3]==p[4]) && (c[0]==c[1] && c[1]==c[2] && c[2]==c[3] && c[3]==c[4])) {
        console.log("stright flush");
    }
}

//------------4 of a kind----------
if((a[0].num==a[1].num && a[1].num==a[2].num && a[2].num==a[3].num) && (a[3].num!=a[4].num && a[4].num!=a[0].num)){
    console.log("4 of a kind");
}
else if((a[0].num==a[1].num && a[1].num==a[2].num && a[4].num==a[3].num) && (a[2].num!=a[1].num && a[2].num!=a[3].num)){
    console.log("4 of a kind");
}
else if((a[0].num==a[4].num && a[2].num==a[3].num && a[3].num==a[4].num) && (a[0].num!=a[1].num||a[1].num!=a[2].num)){
    console.log("4 of a kind");
}
else if((a[0].num==a[4].num && a[1].num==a[2].num && a[1].num==a[0].num) && (a[3].num!=a[2].num||a[4].num!=a[3].num)){
    console.log("4 of a kind");
}
else if((a[2].num==a[3].num && a[1].num==a[2].num && a[4].num==a[3].num) && (a[0].num!=a[4].num||a[0].num!=a[4].num)){
    console.log("4 of a kind");
}

//------------full house-----------
if((a[0].num==a[1].num && a[1].num==a[2].num) && (a[3].num==a[4].num)){
    console.log("full house");
}
else if((a[0].num==a[3].num && a[3].num==a[2].num) && (a[1].num==a[4].num)){
    console.log("full house");
}
else if((a[0].num==a[3].num && a[3].num==a[1].num) && (a[2].num==a[4].num)){
    console.log("full house");
}
else if((a[4].num==a[3].num && a[3].num==a[2].num) && (a[1].num==a[0].num)){
    console.log("full house");
}
else if((a[0].num==a[1].num && a[1].num==a[4].num) && (a[2].num==a[3].num)){
    console.log("full house");
}
else if((a[0].num==a[3].num && a[3].num==a[4].num) && (a[2].num==a[1].num)){
    console.log("full house");
}
else if((a[2].num==a[1].num && a[1].num==a[3].num) && (a[0].num==a[4].num)){
    console.log("full house");
}
else if((a[3].num==a[1].num && a[1].num==a[4].num) && (a[0].num==a[2].num)){
    console.log("full house");
}
else if((a[2].num==a[1].num && a[1].num==a[4].num) && (a[0].num==a[3].num)){
    console.log("full house");
}
else if((a[0].num==a[2].num && a[2].num==a[4].num) && (a[1].num==a[3].num)){
    console.log("full house");
}

//----------sequence---------
const a2 = [a[0].num, a[1].num, a[2].num, a[3].num, a[4].num];
a2.sort((a,b)=>a-b);
if(a2[0]+1 == a2[1] && a2[1]+1 == a2[2]&& a2[2]+1 == a[3]&& a[3]+1 == a[4]){
    console.log("stright");
}

//---------3 of a kind-------
if( a[0].num == a[1].num  &&  a[0].num == a[2].num &&  a[2].num== a[1].num &&  a[3].num!= a[2].num &&  a[4].num!= a[2].num){
    console.log("3 of a kind");
}
else if( a[1].num == a[2].num  &&  a[3].num == a[2].num &&  a[3].num== a[1].num &&  a[0].num!= a[1].num &&  a[4].num!= a[1].num){
    console.log("3 of a kind");
}
else if( a[3].num == a[2].num  &&  a[3].num == a[4].num &&  a[4].num== a[2].num &&  a[0].num!= a[2].num &&  a[1].num!= a[2].num){
    console.log("3 of a kind");
}
else if( a[0].num == a[3].num  &&  a[0].num == a[4].num &&  a[3].num== a[4].num &&  a[1].num!= a[0].num &&  a[0].num!= a[2].num){
    console.log("3 of a kind");
}
else if( a[1].num == a[0].num  &&  a[1].num == a[4].num &&  a[4].num== a[0].num &&  a[0].num!= a[2].num &&  a[3].num!= a[0].num){
    console.log("3 of a kind");
}
else if( a[1].num == a[0].num  &&  a[1].num == a[3].num &&  a[3].num== a[0].num &&  a[0].num!= a[2].num &&  a[4].num!= a[0].num){
    console.log("3 of a kind");
}
else if( a[1].num == a[3].num  &&  a[4].num == a[3].num &&  a[4].num== a[1].num &&  a[0].num!= a[1].num &&  a[2].num!= a[1].num){
    console.log("3 of a kind");
}
else if( a[1].num == a[2].num  &&  a[2].num == a[4].num &&  a[4].num== a[1].num &&  a[0].num!= a[1].num &&  a[3].num!= a[1].num){
    console.log("3 of a kind");
}
else if( a[2].num ==  a[0].num  &&  a[2].num ==  a[4].num &&  a[4].num ==  a[0].num &&  a[0].num!= a[1].num &&  a[3].num!= a[0].num){
    console.log("3 of a kind");
}
else if( a[2].num ==  a[0].num  &&  a[2].num ==  a[3].num &&  a[3].num ==  a[0].num &&  a[0].num!= a[1].num &&  a[4].num!= a[0].num){
    console.log("3 of a kind");
}

//----------2 pair----------
if((a[4].num==a[3].num)&&(a[0].num==a[1].num || a[1].num==a[2].num || a[0].num==a[2].num)){
    console.log("2 pair");
}
else if((a[1].num==a[4].num)&&(a[0].num==a[2].num || a[0].num==a[3].num || a[3].num==a[2].num)){
    console.log("2 pair");
}
else if((a[2].num==a[4].num)&&(a[1].num==a[0].num || a[1].num==a[3].num || a[0].num==a[3].num)){
    console.log("2 pair");
}
else if((a[1].num==a[0].num)&&(a[2].num==a[3].num || a[3].num==a[4].num || a[4].num==a[2].num)){
    console.log("2 pair");
}
else if((a[2].num==a[3].num)&&(a[1].num==a[0].num || a[1].num==a[4].num || a[4].num==a[0].num)){
    console.log("2 pair");
}
else if((a[2].num==a[1].num)&&(a[0].num==a[3].num || a[3].num==a[4].num || a[4].num==a[0].num)){
    console.log("2 pair");
}
else if((a[0].num==a[4].num)&&(a[1].num==a[2].num || a[2].num==a[3].num || a[1].num==a[3].num)){
    console.log("2 pair");
}
else if((a[0].num==a[2].num)&&(a[1].num==a[3].num || a[1].num==a[4].num || a[4].num==a[3].num)){
    console.log("2 pair");
}
else if((a[0].num==a[3].num)&&(a[1].num==a[2].num || a[2].num==a[4].num || a[4].num==a[1].num)){
    console.log("2 pair");
}
else if((a[1].num==a[3].num)&&(a[0].num==a[2].num || a[0].num==a[4].num || a[4].num==a[2].num)){
    console.log("2 pair");
}

//----------pair-------------
if(a[3].num==a[4].num){
    console.log("pair");
}
else if(a[1].num==a[4].num){
    console.log("pair");
}
else if(a[2].num==a[4].num){
    console.log("pair");
}
else if(a[1].num==a[0].num){
    console.log("pair");
}
else if(a[2].num==a[3].num){
    console.log("pair");
}
else if(a[2].num==a[1].num){
    console.log("pair");
}
else if(a[0].num==a[4].num){
    console.log("pair");
}
else if(a[0].num==a[2].num){
    console.log("pair");
}
else if (a[0].num==a[3].num){
    console.log("pair");
}
else if(a[1].num==a[3].num){
    console.log("pair");
}

//----------high card----------
if(a2[4]==13 || a2[4] == 12 || a2[4]==11 || a2[4] == 1){
    console.log("high card");
}