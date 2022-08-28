const leftSliderArrows = document.querySelector("div.slider__arrow_prev");
const rightSliderArrows = document.querySelector("div.slider__arrow_next"); 

const arrSliders = Array.from(document.querySelectorAll("div.slider__item"))
const dots = Array.from(document.querySelectorAll("div.slider__dot"));


function getSliders(position){
    let active = arrSliders.findIndex(slider => slider.className === "slider__item slider__item_active");
    arrSliders[active].className = "slider__item"; 
    dots[active].className = "slider__dot";
   
    active = position;

    if (active > arrSliders.length - 1) {
        active = 0;
    }

    if (active < 0) {
        active = arrSliders.length - 1;
    }

    arrSliders[active].className = "slider__item slider__item_active";
    dots[active].className = "slider__dot slider__dot_active";

}


for(let dot in dots){
  
    dots[0].className = "slider__dot slider__dot_active";

    dots[dot].onclick = function(){
        getSliders(dot);
    } 

    rightSliderArrows.onclick = function(){
        let active = arrSliders.findIndex(slider => slider.className === "slider__item slider__item_active");
        getSliders(active+1);
    }

    leftSliderArrows.onclick = function(){
        let active = arrSliders.findIndex(slider => slider.className === "slider__item slider__item_active");
        getSliders(active-1);
    }

}


    



