const image = document.getElementById("cookie");
let count = 0; 
let spead = 0;


let bigSize = 200;
let smallSize = 150;

let lastClick = 0;
let currentTime = new Date().getTime();



const counter = document.getElementById("clicker__counter");

function changeImg(){
    if(image.width == bigSize){
        image.width = smallSize;
    } else {
        image.width = bigSize
    }

    count++
    counter.textContent = `${count}`;



    lastClick = currentTime;
    presentClick = (new Date()).getTime();
    idleTime = parseInt(presentClick) - parseInt(lastClick);
    idleTimeSec = idleTime % 60000 / 1000;

    currentTime = presentClick;


    speedClick = (1 / idleTimeSec).toFixed(2); 
    const speadCounter = document.getElementById("clicker__spead");
    speadCounter.textContent = `${speedClick}`;
    
}




image.onclick = changeImg; 
//image.onclick = howlong; 

