const hole = index => document.getElementById(`hole${index}`);
let winCounter = 0;
let loseCounter = 0;

    for (let i = 1; i < 10; i++) {
        hole(i).onclick = function(){

            if(this.className.includes("hole hole_has-mole")) { 
                winCounter +=1;
                dead.textContent = `${winCounter}`
            } else {
                loseCounter +=1;
                lost.textContent = `${loseCounter}`
            }
            console.log(loseCounter)

            checkWin(winCounter, loseCounter);
        }  
    }
    
    function checkWin(winCounter, loseCounter){
        
        if(winCounter === 10){
            alert("Вы победили");
            location.reload();
        }

        if(loseCounter === 5){
            alert("Вы проиграли!");
            location.reload();
        }
    
    }
