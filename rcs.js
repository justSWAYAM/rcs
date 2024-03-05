let UserScore = 0;
let CompScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserTotal = document.querySelector("#UserScore");
const CompTotal = document.querySelector("#CompScore");
const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const RandomnIndex = Math.floor(Math.random()*3);
    return options[RandomnIndex];
}
const DrawGame =() => {
    console.log("Draw Game");
    msg.innerText = "Draw Game";
    msg.style.backgroundColor = "#081b31";

};


const ShowWinner = (UserWin,UserChoice,CompChoice) => {
    if(UserWin){
        UserScore ++;
        UserTotal.innerText = UserScore;
    console.log("Winner");
    msg.innerText = `Winner , Your ${UserChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "orange";
    }

    else {
        CompScore ++;
        CompTotal.innerText = CompScore;
        console.log("Loser");
        msg.innerText = `Loser , Computer's ${CompChoice} beats ${UserChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame =(UserChoice) => {
    console.log("UserChoice = ",UserChoice);
    const CompChoice = genCompChoice();
    console.log("CompChoice = ",CompChoice);
    
    if(UserChoice ===CompChoice) { DrawGame(); }
    else {
        let UserWin = true;
        if(UserChoice === "rock") {
          UserWin = CompChoice ===" paper"  
          UserWin = false;  
    }
    else if(UserChoice === "paper") {
      if( UserWin = CompChoice ===" scissors"){
        UserWin = false;
    }
        else  if(CompChoice ==="rock") {
            UserWin = true;
        }

    } else {
       UserWin =CompChoice === "rock" 
       UserWin = false;
    }
    ShowWinner(UserWin , UserChoice, CompChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
            const UserChoice = choice.getAttribute("id");
        console.log("choice was clicked",UserChoice);
        playgame(UserChoice);
    }); 
});