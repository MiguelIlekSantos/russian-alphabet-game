const gameContent = document.getElementById("game-content");
const phonemes = ["a", "be", "ve", "guê", "de", "ié", "io", "gê", "zê", "i", "iê", "ka", "éli", "em", "en", "o", "pê", "ér", "és", "té", "u", "éf", "rá", "tse", "tchê", "chá", "schá", "ъ", "ilê", "ь", "é", "iú", "iá"];
const distanceLeft = ["noventa", "cem-noventa", "duz-noventa", "tre-noventa", "qua-noventa", "qui-noventa"]

function num(max) {
    return Math.floor(Math.random() * max);
}

function addAlienShip() {

    const alienShip = `<figure class="${distanceLeft[num(6)]} alien-ship going-down">
                     <img src="assets/imgs/nav alien voando.png">
                     <p>${phonemes[num(32)]}</p>
                   </figure>`;

    gameContent.innerHTML += alienShip;

}

var playEstate = 1;

while(playEstate == 1){
    addAlienShip();
    
    
}






