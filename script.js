console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false

// func to change turn
const changeTurn = () => {
    return turn === "X"?"0" : "X"
}

// func to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => { 
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerHTML===''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn; 
            }
        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
}) 