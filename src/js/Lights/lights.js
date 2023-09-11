const lightButton = document.getElementById("js--lightButton");
const body = document.getElementById("js--body");
const darkSpace = document.getElementById("js--dark")


lightButton.onclick = () => {

    if(localStorage.getItem("playcount") == 1){
        darkSpace.style.visibility = "hidden";
        lightButton.style.visibility = "hidden";
        body.style.overflow = "visible";
        console.log(playcount);
        playcount = 0;
        localStorage.setItem("playcount", playcount)
    }
    else{
        playcount = 1;
    }
}