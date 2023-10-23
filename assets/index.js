const gameContent = document.getElementById("game-content");
const startBtn = document.getElementById("start-btn");
const startBack = document.getElementById("start-back");
const phonemes = ["a", "be", "ve", "guê", "de", "ié", "io", "gê", "zê", "i", "iê", "ka", "éli", "em", "en", "o", "pê", "ér", "és", "té", "u", "éf", "rá", "tse", "tchê", "chá", "schá", "ъ", "ilê", "ь", "é", "iú", "iá"];
const phonemesRussian = ["a", "б", "в", "г", "д", "e", "ё", "ж", "3", "и", "й", "к", "л", "м", "н", "o", "п", "p", "с", "t", "у", "ф", "x", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];
const distanceLeft = ["noventa", "cem-noventa", "duz-noventa", "tre-noventa", "qua-noventa", "qui-noventa"]

function num(max) {
    return Math.floor(Math.random() * max);
}

function addAlienShip() {
    let alienShipHTML = `<figure id="0" class="noventa alien_ship going-down">
    <img src="assets/imgs/nav alien voando.png">
    <p id="p">a</p>
    </figure>`

    for (let a = 1; a < 200; a++) {
        var letterNum = num(32);
        alienShipHTML += `<figure id="${a}" class="${distanceLeft[num(6)]} alien_ship going-down">
                             <img src="assets/imgs/nav alien voando.png">
                             <p>${phonemes[letterNum]}</p>
                             <p id="p-refe">${phonemesRussian[letterNum]}</p>
                          </figure>`;
    }

    gameContent.innerHTML += alienShipHTML;
}


function initiateGame() {
    var delay = 0;
    addAlienShip()

    for (let x = 0; x <= 199; x++) {
        let alienShipDelay = document.getElementById(`${x}`);
        alienShipDelay.style.animationDelay = `${delay}s`;
        delay = delay + 8;
        if (delay > 120) {
            alienShipDelay.style.animationDuration = "5s";
            delay = delay - 7;
        } else if (delay > 100) {
            alienShipDelay.style.animationDuration = "6s";
            delay = delay - 6;
        } else if (delay > 80) {
            delay = delay - 6;
        } else if (delay > 60) {
            delay = delay - 4;
        } else if (delay > 40) {
            delay = delay - 2;
        } else if (delay > 20) {
            delay = delay - 1;
        }
    }
}

function gameSystem() {
    const bombArray = document.querySelectorAll(".bomb");
    const alienShipArriving = document.querySelectorAll(".alien_ship");
    const alienShipP = document.querySelectorAll("#p-refe");
    const keyboard = document.getElementById("keyboard");

    alienShipArriving.forEach((alien_ship, index) => {
        const intervalIds = setInterval(() => {
            const alienShipPosition = alien_ship.offsetTop;
                if(alienShipPosition > -120){
                    keyboard.addEventListener("click", (event) => {
                        let letter = event.target.innerHTML 

                        if(letter === alienShipP[index].innerHTML){
                            console.log("Oi")
                            bombArray[1].classList.add("going-right-cem")
                            
                            clearInterval(intervalIds)
                        }
                    })

                }



            
        }, 100);
    });


}

function finishGame() {
    const alienShipArriving = document.querySelectorAll(".alien_ship");
    const intervalIds = [];

    alienShipArriving.forEach((alien_ship, index) => {
        const intervalIds = setInterval(() => {
            const alienShipPosition = alien_ship.offsetTop;
            const gameContHei = gameContent.clientHeight;

            if (alienShipPosition >= 290 && gameContHei >= 420) {
                clearInterval(intervalIds[index])
                for (let x = 0; x <= 199; x++) {
                    let alienShipDelay = document.getElementById(`${x}`);
                    alienShipDelay.remove();
                }
                startBtn.click();

            } else if (alienShipPosition >= 230 && gameContHei >= 380 && gameContHei < 420) {
                clearInterval(intervalIds[index])
                for (let x = 0; x <= 199; x++) {
                    let alienShipDelay = document.getElementById(`${x}`);
                    alienShipDelay.remove();
                }
                startBtn.click();

            } else if (alienShipPosition >= 200 && gameContHei >= 350 && gameContHei < 380) {
                clearInterval(intervalIds[index])
                for (let x = 0; x <= 199; x++) {
                    let alienShipDelay = document.getElementById(`${x}`);
                    alienShipDelay.remove();
                }
                startBtn.click();

            } else if (alienShipPosition >= 180 && gameContHei <= 320 && gameContHei < 350) {
                clearInterval(intervalIds[index])
                for (let x = 0; x <= 199; x++) {
                    let alienShipDelay = document.getElementById(`${x}`);
                    alienShipDelay.remove();
                }
                startBtn.click();

            }


        }, 100);
    });
}


startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    startBack.style.display = "none";
    initiateGame();
    gameSystem();
    finishGame();
})
