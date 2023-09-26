const lightButton = document.getElementById("js--lightButton");
const body = document.getElementById("body--js");
const darkSpace = document.getElementById("js--dark")


// let playCount = localStorage.getItem("playcount");
let playCount = 0;

darkSpace.style.visibility = "hidden";
lightButton.style.visibility = "hidden";

Switch = function(){
    if(playCount == 0){
        localStorage.setItem("playcount", 1);
    }
}

playLight = function(){
    if(localStorage.getItem("playcount") == 1){
        darkSpace.style.visibility = "visible";
        lightButton.style.visibility = "visible";
        localStorage.setItem("playcount", 2);
    }
}

lightButton.onclick = () => {
    darkSpace.style.visibility = "hidden";
    lightButton.style.visibility = "hidden";
    body.style.overflow = "visible";
}

Switch();
playLight();