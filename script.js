//player X is active when player = false, player O is active when player = true.
//the game starts with player X
let player = false;
let winner;
//initialises the click history
let clicked = [];

//array of win scenarios
const win_scenarios = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const player_x_score = document.getElementById("player-x-score");
const player_o_score = document.getElementById("player-o-score");
//initialises player-specific click histories
let playerXHistory = [];
let playerOHistory = [];

function checkWinner(playerHistory) {
    playerHistory.sort((a,b) => a - b);

    for (let scenarios of win_scenarios) {
        if (scenarios.every(num => playerHistory.includes(num))) {
            return true;
        }
    }
    return false;
}



function main(buttonNumber) {
    //checks if the space is already taken by another player
    if (playerXHistory.includes(buttonNumber) || playerOHistory.includes(buttonNumber)) {
        alert("This space is already taken!");
    }
    else{
        //adds appropriate symbol
        if (player === true) {
            document.getElementById(buttonNumber).innerText = "O";
            playerOHistory.push(buttonNumber);
            
            if (checkWinner(playerOHistory)) {
                alert("Player O wins!");
                return;
            }
        }
        else {
            document.getElementById(buttonNumber).innerText = "X";
            playerXHistory.push(buttonNumber);
            
            if (checkWinner(playerXHistory)) {
                alert("Player X wins!");
                return;
            }
        }

        //switches turns
        player = !player;
    }
}