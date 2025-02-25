let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");  
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore=userScore+1;
        uscore.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore=compScore+1;
        cscore.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("draw");
    msg.innerText="Draw.Play Again!"
    msg.style.backgroundColor="gold";
    
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice); 
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);  
    if (userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");  
        playGame(userChoice);
    });
});
