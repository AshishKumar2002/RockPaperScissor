let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const Winmsg = document.querySelector("#winmsg");
const user = document.querySelector("#userscore");
const comp = document.querySelector("#compscore");

const ComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =()=>{
    Winmsg.innerText="Game was a draw!!Play again";
    Winmsg.style.backgroundColor = "#081b31";
}

const showWinner =(userwin, userchoice,Compchoice)=>{
    if(userwin){
        userScore++;
        user.innerText = userScore;
        Winmsg.innerText=`You win! ${userchoice} beats ${Compchoice}`;
        Winmsg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp.innerText=compScore;
        Winmsg.innerText = `You lose! ${Compchoice} beats ${userchoice}`;
        Winmsg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice)=>{
    console.log("user choice=", userchoice);
    //generate computer choice

    const Compchoice = ComputerChoice();

    if(userchoice===Compchoice){
        drawGame();
    }else{
        let userwin= true;
        if(userchoice==="rock"){
            //scissors, paper
          userwin =  Compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock, scissors
            userwin = Compchoice==="scissors"?false:true;
        }
        else{
            userwin = Compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,Compchoice);
    }


};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playGame(userchoice);
    });
});