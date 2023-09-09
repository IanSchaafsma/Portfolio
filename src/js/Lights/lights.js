const lightButton = document.getElementById("js--lightButton");
const body = document.getElementById("js--body");
const darkSpace = document.getElementById("js--dark")

let playcount = 0; // doesnt work yet

lightButton.onclick = () => {

    if(playcount == 0){
        darkSpace.style.visibility = "hidden";
        lightButton.style.visibility = "hidden";
        body.style.overflow = "visible";
        console.log(playcount);
        playcount = 1;
    }
    else{
        console.log(playcount)
    }
}