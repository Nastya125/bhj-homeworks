
const menuLinks = document.querySelectorAll("a.menu__link");
const arrMenuLinks = Array.from(menuLinks);
let count = 0;



for (let i = 0; i < arrMenuLinks.length; i++){
    arrMenuLinks[i].onclick = function() {
        console.log("Клик");
   
    let menuWithSubMenu = arrMenuLinks[i].closest("li.menu__item").querySelector('ul.menu_sub');
    

        if(menuWithSubMenu !== null && count === 0){
            menuWithSubMenu.className += ' menu_active';
            count = 1;
            return false;
        }

        if(menuWithSubMenu !== null && count === 1){
            menuWithSubMenu.className = menuWithSubMenu.className.replace(' menu_active', '');
            count = 0;
            return false
        }


    }
}

