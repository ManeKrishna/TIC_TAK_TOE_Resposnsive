document.addEventListener("DOMContentLoaded", () => {
    let blocks = document.querySelectorAll(".box");
    let rebtn = document.querySelector(".Reset");
    let newbtn = document.querySelector(".newgame");
    let turnof = document.querySelector(".turnof");
    let turn = true;

    const clickSound = new Audio('soundss/buttons.wav');
    const clickSoundNewGame = new Audio('soundss/new game button.wav');
    const clickfireSound = new Audio('soundss/firework.wav');
    const clickclapSound = new Audio('soundss/clapping.wav');

    const winpattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

    const resetButton = () => {  
        clickclapSound.pause();
        clickclapSound.currentTime = 0; 
        clickfireSound.pause();
        clickfireSound.currentTime = 0; 
        turn = true;
        turnof.innerText=`PLAYER "O" You first!`
        clickSoundNewGame.play();
        enablebox();
        
    };
    blocks.forEach((box) => {
        box.addEventListener("click", () => {
            clickSound.play();
            if (turn) {
                turnof.innerText = `Player X's turn`;
                box.innerText = "O";
                turn = false;
            } else {
                turnof.innerText = `Player O's turn`;
                box.innerText = "X";
                turn = true;
            }
            box.disabled = true;
            checkWinner();
        });
    });

    const checkWinner = () => {
        for (let pattern of winpattern) {
            let pos1 = blocks[pattern[0]].innerText;
            let pos2 = blocks[pattern[1]].innerText;
            let pos3 = blocks[pattern[2]].innerText;

            if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    turnof.innerText = `Wohoo! Player "${pos1}" won!`;
                    disablebox();      
                    triggerConfetti();
                    clickfireSound.play();
                    clickclapSound.play();
                    return;
                }
            }
        }
    };

    const disablebox = () => {
        blocks.forEach(box => {
            box.disabled = true;
        });
    };

    const enablebox = () => {
        blocks.forEach(box => {
            box.disabled = false;
            box.innerText = "";
        });
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 } 
        });
    };


    rebtn.addEventListener("click", resetButton);
    newbtn.addEventListener("click", resetButton);
});
