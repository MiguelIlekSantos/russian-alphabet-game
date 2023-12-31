const gameContent = document.getElementById("game-content");
const startBtn = document.getElementById("start-btn");
const startBack = document.getElementById("start-back");
const phonemes = ["a", "be", "ve", "guê", "de", "ié", "io", "gê", "zê", "i", "iê", "ka", "éli", "em", "en", "o", "pê", "ér", "és", "té", "u", "éf", "rá", "tse", "tchê", "chá", "schá", "ъ", "ilê", "ь", "é", "iú", "iá"];
const phonemesRussian = ["a", "б", "в", "г", "д", "e", "ё", "ж", "3", "и", "й", "к", "л", "м", "н", "o", "п", "p", "с", "т", "у", "ф", "x", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];
const distanceLeft = ["noventa", "cem-noventa", "duz-noventa", "tre-noventa", "qua-noventa", "qui-noventa"]
const pointsBox = document.getElementById("points-box")

var points = 0;

function num(max) {
    return Math.floor(Math.random() * max);
}

function addAlienShip() {
    let alienShipHTML = `<figure id="0" class="noventa alien_ship going-down">
    <img src="assets/imgs/nav alien voando.png">
    <p>a</p>
    <p id="p-refe">a</p>
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
    const gameContHei = gameContent.clientHeight;
    
    var contador = 0;
    var a = 0;

    keyboard.addEventListener("click", function um(event){
        if(event.target.tagName === 'DIV'){
            var letter = event.target.innerHTML 

            if(letter == alienShipP[contador].innerHTML){
                for (; a < alienShipArriving.length; a++) {
                    const alienShipPosition = alienShipArriving[a].offsetTop;

                    if (alienShipPosition !== -120) {
                        if(alienShipPosition <= (gameContHei * 0.05)){
                            removeAllClasses(bombArray[0]);
                            bombArray[0].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused"
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.15)){
                            removeAllClasses(bombArray[1]);
                            bombArray[1].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.25)){
                            removeAllClasses(bombArray[2]);
                            bombArray[2].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.35)){
                            removeAllClasses(bombArray[3]);
                            bombArray[3].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.45)){
                            removeAllClasses(bombArray[4]);
                            bombArray[4].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.55)){
                            removeAllClasses(bombArray[5]);
                            bombArray[5].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.65)){
                            removeAllClasses(bombArray[6]);
                            bombArray[6].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.75)){
                            removeAllClasses(bombArray[7]);
                            bombArray[7].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        else if(alienShipPosition <= (gameContHei * 0.85)){
                            removeAllClasses(bombArray[8]);
                            bombArray[8].classList.add(bombDistance(alienShipArriving[a]))
                            alienShipArriving[a].style.animationPlayState = "paused";
                            removeShip(alienShipArriving[a]);
                        }
                        
                        break;
                    }
                }
                ++a;
                ++contador;
            }
        }
    })
}

function bombDistance(alienShip) {
    if(alienShip.classList.contains("noventa")) {
        return "going-right-dez"
    }else if(alienShip.classList.contains("cem-noventa")) {
        return "going-right-cem"
        
    }else if(alienShip.classList.contains("duz-noventa")) {
        return "going-right-duz"
        
    }else if(alienShip.classList.contains("tre-noventa")) {
        return "going-right-tre"
        
    }else if(alienShip.classList.contains("qua-noventa")) {
        return "going-right-qua"
        
    }else if(alienShip.classList.contains("qui-noventa")) {
        return "going-right-qui"
    } 
 
}

function removeAllClasses(element) {
    while (element.classList.length > 0) {
        element.classList.remove(element.classList.item(0));
    }
    element.classList.add("bomb");
}

function removeShip(ship) {
    setTimeout(() => {
        ship.remove();
        ++points;
        pointsBox.innerHTML = points;
    }, 1000);
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
                    if (alienShipDelay) {
                        alienShipDelay.remove();
                    }
                }
                startBtn.click();

            } else if (alienShipPosition >= 230 && gameContHei >= 380 && gameContHei < 420) {
                clearInterval(intervalIds[index])
                for (let x = 0; x <= 199; x++) {
                    let alienShipDelay = document.getElementById(`${x}`);
                    if (alienShipDelay) {
                        alienShipDelay.remove();
                    }
                }
                startBtn.click();

            } else if (alienShipPosition >= 200 && gameContHei >= 350 && gameContHei < 380) {
                clearInterval(intervalIds[index])
                for (let x = 0; x <= 199; x++) {
                    let alienShipDelay = document.getElementById(`${x}`);
                    if (alienShipDelay) {
                        alienShipDelay.remove();
                    }
                }
                startBtn.click();

            } else if (alienShipPosition >= 180 && gameContHei <= 320 && gameContHei < 350) {
                clearInterval(intervalIds[index])
                for (let x = 0; x <= 199; x++) {
                    let alienShipDelay = document.getElementById(`${x}`);
                    if (alienShipDelay) {
                        alienShipDelay.remove();
                    }
                }
                startBtn.click();

            }


        }, 100);
    });
}


startBtn.addEventListener("click", () => {
    points = 0;
    pointsBox.innerHTML = points;
    startBtn.style.display = "none";
    startBack.style.display = "none";
    initiateGame();
    gameSystem();
    finishGame();    
})
