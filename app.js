console.log("Welcome Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("popsound.mp3")
let gameovr = new Audio("gameovr.mp3")
let turn ="X"
 let isgameovr = false;

//function to chnge the turn
const changeTurn =() =>{
    return turn === "X"? "0":"X"
}

//func to check win
const checkWin = ()=>{
    let boxtext= document.getElementsByClassName('boxtext')
let wins= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
wins.forEach(e =>{
if((boxtext[e[0]].innerText === boxtext[e[0]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !=="")){
document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
isgameovr= true;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="20px"
}

})
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText= turn;
           turn = changeTurn();
            audioTurn.play();
            checkWin();
            
            if(!isgameovr){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
        
        }
       
    })
    gameovr.play();
})

// add on click listner to reset 
reset.addEventListener('click', ()=> {
   
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
       
    })
    document.querySelector('.info').innerText =  "Turn of X"
    isgameovr= false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})