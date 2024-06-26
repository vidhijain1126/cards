const e = [0,0,0,0,9];
const c = ['Hearts', 'Hearts','Hearts','Hearts']
if ((e[0]==e[1] && e[2]==e[3] && e[4]!=e[3])||(e[0]==e[1] && e[4]==e[3] && e[2]!=e[1])||(e[2]==e[1]&& e[4]==e[3] && e[4]!=e[3])){
    console.log("2 pair");
}