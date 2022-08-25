const leftSliderArrows = document.querySelector("div.slider__arrow_prev");
const rightSliderArrows = document.querySelector("div.slider__arrow_next"); 
// const activeDots = document.querySelectorAll('div.slider__dot');
const sliders = document.querySelectorAll("div.slider__item")
const arrSliders = Array.from(sliders);

let step = 0;


    leftSliderArrows.onclick = function() {
        console.log("Клик1");
        arrSliders[step].className = "slider__item";
        step -= 1;
            if(step === -1){
                step = 4;
            }
        arrSliders[step].className += ' slider__item_active';
    }

    

    rightSliderArrows.onclick = function() {
        console.log("Клик2");
        arrSliders[step].className = "slider__item";
        step += 1;
            if(step === 5){
                step = 0;
            }
        arrSliders[step].className += ' slider__item_active';
    }





