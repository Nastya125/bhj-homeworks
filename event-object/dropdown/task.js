const dropdownList = document.querySelector(".dropdown__list");
let button = document.querySelector(".dropdown__value");

const items = Array.from(document.querySelectorAll(".dropdown__item"));
const namesOfLink = Array.from(document.querySelectorAll("a.dropdown__link"));


function drop(){
    if(dropdownList.className === "dropdown__list dropdown__list_active"){
        dropdownList.className = "dropdown__list"; 
    } else {
        dropdownList.className = "dropdown__list dropdown__list_active";
    }
}


button.addEventListener("click", drop);



namesOfLink.forEach( function (item) {
        item.onclick = function(){
            dropdownList.className = "dropdown__list";
            button.textContent = item.textContent; 
            return false;
        }  
    }
)
    

    



