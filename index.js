function getcomputerchoice() {

    const random = Math.floor(Math.random() * 3) + 1;
    if (random = 0) {
        return "rock";
    }
    if (random = 1) {
        return "paper";
    }
    if (random = 2) {
        return "scissor";
    }


}
function gethumanchoice(x) {

    if (x = 0) {
        return "rock";
    }
    if (x = 1) {
        return "paper";
    }
    if (x = 2) {
        return "scissor";
    }




}
function playround(hc, cc) {

    if (hc == cc) {
        console.log("draw");
    }
    else if (hc == "rock" && cc == "scissor") || (hc == "paper" && cc == "rock")|| (hc ==" scissor" && cc == "paper") {

        console.log("you win");

    }
    else  {
        console.log("You loose");
    }





}