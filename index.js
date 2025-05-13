function getcomputerchoice() {

    const random = Math.floor(Math.random() * 3) ;
    if (random == 0) {
        return "rock";
    }
    if (random == 1) {
        return "paper";
    }
    if (random == 2) {
        return "scissor";
    }


}
function gethumanchoice() {

    let choice=prompt("Enter rock paper or scissors :").toLowerCase();
    while(!["rock","paper","scissor"].includes(choice)){
        choice=("Enter valid input").toLowerCase();
    }

    return choice;



}
function playround(hc, cc) {

    if (hc == cc) {
        console.log("draw");
    }
    else if ((hc == "rock" && cc == "scissor") || (hc == "paper" && cc == "rock")|| (hc =="scissor" && cc == "paper")) {

        console.log("you win");

    }
    else  {
        console.log("You loose");
    }
}

function playgame(){
    const human=gethumanchoice();
    const computer=getcomputerchoice();
     console.log(`You chose: ${human}`);
    console.log(`Computer chose: ${computer}`);
    playround(human, computer);
}


playgame();



    
