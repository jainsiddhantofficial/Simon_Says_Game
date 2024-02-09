let gameSeq=[];
let userSeq=[];
let high=[];
let tns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
console.log("game started");
started=true;

levelUp();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");},250);
}
function userFFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=tns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
function checkAns(idx){
if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length== gameSeq.length){
setTimeout(levelUp,1000);  }
}else {
    h2.innerHTML=`Game over!! Your Score was <b>${level}<b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },250);
    high.push(level);
    reset();
    let h3=document.querySelector("h3");
h3.innerText=`Current High Score is : ${level}`;
}
}
function btnPress(){
    let btn =this;
    userFFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset() {
started =false;
gameSeq=[];
userSeq=[];
level=0;
}
let result=high.reduce((max,level)=> 
{
    if(level>max)
    {
        return level;}
        else{
            return max;
        }
});
