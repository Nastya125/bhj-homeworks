const leftSliderArrows = document.querySelector("div.slider__arrow_prev");
const rightSliderArrows = document.querySelector("div.slider__arrow_next"); 

const arrSliders = Array.from(document.querySelectorAll("div.slider__item"))
const dots = Array.from(document.querySelectorAll("div.slider__dot"));



for(let dot in dots){
  
 dots[0].className = "slider__dot slider__dot_active";
    

  dots[dot].onclick = function(){
        let active = arrSliders.findIndex(slider => slider.className === "slider__item slider__item_active");
        let activeDot = dots.findIndex(dot => dot.className === "slider__dot slider__dot_active");
        
        active = dot;

        arrSliders[activeDot].className = "slider__item"; 
        dots[activeDot].className = "slider__dot";

        arrSliders[active].className = "slider__item slider__item_active";
        dots[active].className = "slider__dot slider__dot_active";

    } 




rightSliderArrows.onclick = function(){
    let active = arrSliders.findIndex(slider => slider.className === "slider__item slider__item_active");
    let activeDot = dots.findIndex(dot => dot.className === "slider__dot slider__dot_active");

    arrSliders[activeDot].className = "slider__item"; 
    dots[activeDot].className = "slider__dot";


    active += 1;

    if (active === arrSliders.length) {
        active = 0;
    }

    arrSliders[active].className = "slider__item slider__item_active";
    dots[active].className = "slider__dot slider__dot_active";


}



leftSliderArrows.onclick = function(){
    let active = arrSliders.findIndex(slider => slider.className === "slider__item slider__item_active");
    let activeDot = dots.findIndex(dot => dot.className === "slider__dot slider__dot_active");

    arrSliders[activeDot].className = "slider__item"; 
    dots[activeDot].className = "slider__dot";

    active -= 1;

    if (active === - 1) {
        active = arrSliders.length - 1;
    }

    arrSliders[active].className = "slider__item slider__item_active";
    dots[active].className = "slider__dot slider__dot_active";

}

}



    



