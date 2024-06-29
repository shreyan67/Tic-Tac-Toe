
console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
let scoreX = 0;
let scoreO = 0;
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.gameInfo').classList.toggle('dark-mode');
  };
  
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  const highlightWinningCombination = (winningBoxes) => {
    winningBoxes.forEach(index => {
      document.getElementsByClassName('box')[index].classList.add('winner');
    });
  };
  
  

const updateScoreboard = () => {
  document.getElementById('scoreX').innerText = scoreX;
  document.getElementById('scoreO').innerText = scoreO;
};

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
music.play();
// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
   
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
           
            if (boxtext[e[0]].innerText === "X") {
                scoreX++;
              } else {
                scoreO++;
              }
              updateScoreboard();
              gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            highlightWinningCombination([e[0], e[1], e[2]]);
        }
    })
}
// Game Logic
music.play();
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');


    element.addEventListener('click', ()=>{
        
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
           
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})


// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        
        
    });
    
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    updateScoreboard();
    Array.from(boxes).forEach(box => {
        box.classList.remove('winner'); 
   
})
})

