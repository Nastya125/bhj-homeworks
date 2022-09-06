const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let rotatorIndex = 0;


function switchRotator(){
    for( let i = 0; i < rotator.length; i++) {
        rotator[i].classList.remove('rotator__case_active');
        
    }  

    rotator[rotatorIndex].classList.add('rotator__case_active');
  
      

        if(rotatorIndex + 1 == rotator.length) {
        	rotatorIndex = 0;
      	} else {
        	rotatorIndex ++;
        }
 
}


setInterval(switchRotator, 1000);


    


