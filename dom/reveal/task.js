const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element){

    const { top, bottom } = element.getBoundingClientRect();

    if(bottom < 0){
        return false;
    }

    if(top > window.innerHeight){
        return false;
    }

    return true;
}




window.addEventListener('scroll', () => {
    

    for( let visibleReveal of reveal){

        if (isVisible(visibleReveal)) {
                if (!visibleReveal.classList.contains("reveal_active")) {
                    visibleReveal.classList.add("reveal_active");
                } 
        } else {
            if (visibleReveal.classList.contains("reveal_active")) {
                visibleReveal.classList.remove("reveal_active");
            }
        }

    }

}, false); 




