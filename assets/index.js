const gameContent = document.getElementById("game-content");
const startBtn = document.getElementById("start-btn");
const startBack = document.getElementById("start-back");
const phonemes = ["a", "be", "ve", "guê", "de", "ié", "io", "gê", "zê", "i", "iê", "ka", "éli", "em", "en", "o", "pê", "ér", "és", "té", "u", "éf", "rá", "tse", "tchê", "chá", "schá", "ъ", "ilê", "ь", "é", "iú", "iá"];
const distanceLeft = ["noventa", "cem-noventa", "duz-noventa", "tre-noventa", "qua-noventa", "qui-noventa"]

function num(max) {
    return Math.floor(Math.random() * max);
}

function addAlienShip() {

    let alienShipHTML = `<figure id="0" class="noventa alien_ship going-down">
                        <img src="assets/imgs/nav alien voando.png">
                        <p>a</p>
                    </figure>`

    for (let a = 1; a < 200; a++) {
        alienShipHTML += `<figure id="${a}" class="${distanceLeft[num(6)]} alien_ship going-down">
                        <img src="assets/imgs/nav alien voando.png">
                        <p>${phonemes[num(32)]}</p>
                      </figure>`;
    }
    
    gameContent.innerHTML += alienShipHTML;
}


function initiateGame(){
    var delay = 0;
    addAlienShip()

    for (let x = 0; x <= 199; x++) {
        let alienShipDelay = document.getElementById(`${x}`);
        alienShipDelay.style.animationDelay = `${delay}s`;
        delay = delay + 8;
        if(delay > 120){
            alienShipDelay.style.animationDuration = "5s";
            delay = delay - 7;
        }else if(delay > 100){
            alienShipDelay.style.animationDuration = "6s";
            delay = delay - 6;
        }else if(delay > 80){
            delay = delay - 6;
        }else if(delay > 60){
            delay = delay - 4;
        }else if(delay > 40){
            delay = delay - 2;
        }else if(delay > 20){
            delay = delay - 1;
        }    
    }
}

function finishGame() {
    const alienShipArriving = document.querySelectorAll(".alien_ship");
    const intervalIds = [];

    alienShipArriving.forEach((alien_ship, index) => {
        const intervalIds = setInterval(() => {
            const alienShipPosition = alien_ship.offsetTop;
            const gameContHei = gameContent.clientHeight;

            if(alienShipPosition >= 230 && gameContHei >= 450){
                
                // startBtn.style.display = "block";
                // startBack.style.display = "flex";
                // for (let x = 0; x <= 199; x++) {
                //     let alienShipDelay = document.getElementById(`${x}`);
                //     alienShipDelay.style.animationPlayState = "paused";
                // }
                console.log("Oi 230")
                
            }else if(alienShipPosition >= 200 && gameContHei >= 400){
                console.log("Oi 200")
                
            }else if(alienShipPosition >= 180 && gameContHei <= 350){
                console.log("Oi 180")

            }
            clearInterval(intervalIds[index])
            
        
        }, 100);
    });
}


startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    startBack.style.display = "none";
    initiateGame();
    finishGame();
})




    









