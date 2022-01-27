var canMove = false;
var move = null;

var outcomeMessage = [
    "Rock snaps scissors in half",
    "Paper suffocate rock to death",
    "Scissor cuts paper in two",
    "Nobody wins, its a tie!"
];

// function for comparing user choice VS cpu
function compareMoves(mov1, mov2) {
    function encodeMove(x) {
        switch(x) {
            case 'scissors':
                return 2;
            case 'paper':
                return 1;
            case 'rock':
                return 0;
        }

    }

    let num_1, num_2;
    num_1 = encodeMove(mov1);
    num_2 = encodeMove(mov2);

    //from the POV of mov1's user (player)

    console.log(`COMPARING MOVES ${mov1} vs. ${mov2}`);
    console.log(`COMPARING ENCODED MOVES ${num_1} vs. ${num_2}`);
    if(num_1 - 1 == num_2 || num_1 + 2 == num_2) {
        //Player wins

        updateText('Player wins! ' + outcomeMessage[num_1]);
    } else if(num_1 == num_2) {
        // Tie
        updateText('No one wins! ' + outcomeMessage[3]);
    } else {
        //If player doesnt win and tie, then they lose lol
        updateText('Player loses! ' + outcomeMessage[num_2]);
    }

}

// function for getting user choice
function selectMove(choice) {
    console.log("USER MOVE: " + choice);
    if (canMove === true) {
        move = choice;
        canMove = false;
        updateText('Computer: Thinking....');
    }

    window.setTimeout(() => {
        let cpu_move = SuperLeetRPSAI();
        console.log("CPU MOVE: " + cpu_move);
        compareMoves(choice, cpu_move);
    }, 1000);
}


// function for determining the AI moves
function SuperLeetRPSAI(move) {
    let cpu_move = null;

    let random = Math.floor(Math.random() * 100) % 5
    let hacks = false;
    console.log("RANDOM VALUE: " + random);
    //mod 5, possible values are 0,1,2,3,4

    //  60% aimbot
    if (random <= 1) {
        hacks = true;
    }

    // 40% random from 3 choice
    if (hacks !== true) {
        switch (random) {
            case 2:
                cpu_move = 'paper';
                break;
            case 3:
                cpu_move = 'rock';
                break;
            case 4:
                cpu_move = 'scissors';
                break;
        }
    }
    else{
        switch (move) {
        case 'rock':
            cpu_move = 'paper';
            break;
        case 'scissors':
            cpu_move = 'rock';
            break;
        default:
            cpu_move = 'scissors';
            break;
        }
    }

    return cpu_move;
}

// function for updating the result text
function updateText(text) {
    document.getElementById('text').innerHTML = text;
    canMove = true;
}