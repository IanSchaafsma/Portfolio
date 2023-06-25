const project_One = document.getElementById("js--project-1");
const projects = document.getElementsByName("projectCard__seeMore");

const header = document.getElementById("js--header");
const projectsPage = document.getElementById("js--projectsPage");
const footer = document.getElementById("js--footer");

const projectPage = document.getElementById("js--projectsCard");

const exitButton = document.getElementById("js--closeButton");
const returnButton = document.getElementById("js--returnButton");





// clicking on button

project_One.onclick = function(){
    // for(let i = 0; i < projects.length; i++){
    //     projects[i].style.display = "none";
    // }
    projectsPage.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";

    projectPage.style.display = "flex";
}, 

// closing buttons

exitButton.onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};

returnButton.onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};