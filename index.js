let gamesequence=[];
let playersequence=[];
let level=0;
let gamestarted=false;

let colors=["red","yellow","green","blue"];

let body=document.querySelector("body");
body.addEventListener("keypress",function(){
    if(gamestarted==false){
        gamestarted=true;
    }
    console.log("Game started:",gamestarted);
    levelup();

});

function levelup(){
    playersequence=[];
    level++;
    console.log("Level is : ",level);
    let h3=document.querySelector("h3");
    h3.innerHTML=`<b> LEVEL : ${level}`;

    randmidx=Math.floor(Math.random()*4);
    console.log("random index is : ",randmidx);
    randmcolor=colors[randmidx];
    console.log("Random Color is : ",randmcolor);
    randmbtn=document.querySelector(`.${randmcolor}`);
    console.log("Random Button is :",randmbtn);
    
    gamesequence.push(randmcolor);
    console.log(gamesequence);
    btnflash(randmbtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },300);

}

    let allbtns=document.querySelectorAll(".box");
    for(let btn of allbtns){
        btn.addEventListener("click",btnpress);
}

function btnpress(){
    let btn=this;

     let btnclr=btn.getAttribute("id");
    userflash(btn);
    playersequence.push(btnclr);
    check(playersequence.length-1);
}

function userflash(btn){
    btn.classList.add("userflash");
            setTimeout(function(){
            btn.classList.remove("userflash");
            },300);
}
function check(indx){
    if(playersequence[indx]==gamesequence[indx]){
        if(playersequence.length==gamesequence.length){
         console.log("Game is running : ",indx);
            setTimeout(levelup,1000);
        }
    }
    else{
        body.classList.add("bodyclr")
        setTimeout(function(){
        body.classList.remove("bodyclr")
        },300);
        let h3=document.querySelector("h3");
        h3.innerText=`Game Over. Your Score Is: ${level}`;
        reset();
    }
}
function reset(){
    playersequence=[]
    gamesequence=[];
    level=0;
    gamestarted=false;
}

