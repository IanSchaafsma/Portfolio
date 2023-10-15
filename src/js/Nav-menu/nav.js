const body = document.getElementById("body--js");
const menuButton = document.getElementById("header__menu--js");
const menuWrapper = document.getElementById("js--mobileMenu");
let menuIcon = document.getElementById("header__menuIcon--js");

menuClicked = 0;

menuButton.onclick = function(){
    menuWrapper.classList.toggle("header__mobileWrapper");
    
    if(menuClicked === 0){
        menuIcon.classList = "fa-solid fa-xmark";
        menuClicked = 1;
        body.style.overflow = "hidden";
    }
    else{
        menuIcon.classList = "fa-solid fa-bars";
        menuClicked = 0;
        body.style.overflow = "visible";

    }
}
