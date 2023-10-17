const gameContent = document.getElementById("game-content");
const phonemes = ["a", "be", "ve", "guê", "de", "ié", "io", "gê", "zê", "i", "iê", "ka", "éli", "em", "en", "o", "pê", "ér", "és", "té", "u", "éf", "rá", "tse", "tchê", "chá", "schá", "ъ", "ilê", "ь", "é", "iú", "iá"];
const distanceLeft = ["noventa", "cem-noventa", "duz-noventa", "tre-noventa", "qua-noventa", "qui-noventa"]

function num(max) {
    return Math.floor(Math.random() * max);
}

function addAlienShip() {

    var alienShip = `<figure id="0" class="noventa alien-ship going-down">
                        <img src="assets/imgs/nav alien voando.png">
                        <p>a</p>
                    </figure>`

    for (let a = 1; a < 200; a++) {
        alienShip += `<figure id="${a}" class="${distanceLeft[num(6)]} alien-ship going-down">
                        <img src="assets/imgs/nav alien voando.png">
                        <p>${phonemes[num(32)]}</p>
                      </figure>`;
    }
    
    gameContent.innerHTML += alienShip;
}


var delay = 0;

addAlienShip()

for (let x = 0; x <= 199; x++) {
    let alienShip = document.getElementById(`${x}`);
    alienShip.style.animationDelay = `${delay}s`;
    delay = delay + 8;
    if(delay > 100){
        delay = delay - 6;
    }else if(delay > 80){
        delay = delay - 4;
    }else if(delay > 60){
        delay = delay - 2;
    }else if(delay > 40){
        delay = delay - 1;
    }

}











