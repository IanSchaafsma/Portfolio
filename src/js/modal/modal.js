const project_One = document.getElementById("js--project-1");
const project_Two = document.getElementById("js--project-2");
const project_Three = document.getElementById("js--project-3");


const projects = document.getElementsByName("projectCard__seeMore");

const header = document.getElementById("js--header");
const projectsPage = document.getElementById("js--projectsPage");
const footer = document.getElementById("js--footer");

const projectPage = document.getElementById("js--projectsCard");

const exitButton = document.querySelectorAll(".projectsCard__close");
const returnButton = document.querySelectorAll(".projectsCard__return");

const projectCard1 = document.getElementById("projectsCard--first");
const projectCard2 = document.getElementById("projectsCard--second");
const projectCard3 = document.getElementById("projectsCard--third");
const projectCard4 = document.getElementById("projectsCard--fourth");



// clicking on button opens modal

project_One.onclick = function(){
    // for(let i = 0; i < projects.length; i++){
    //     projects[i].style.display = "none";
    // }
    projectsPage.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";

    projectPage.style.display = "flex";

    projectCard1.style.display = "flex";
    projectCard2.style.display = "none";
    projectCard3.style.display = "none";
    projectCard4.style.display = "none";
};

project_Two.onclick = function(){
    projectsPage.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";

    projectPage.style.display = "flex";

    projectCard1.style.display = "none";
    projectCard2.style.display = "flex";
    projectCard3.style.display = "none";
    projectCard4.style.display = "none";

};

project_Three.onclick = function(){
    projectsPage.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";

    projectPage.style.display = "flex";
    
    projectCard1.style.display = "none";
    projectCard2.style.display = "none";
    projectCard3.style.display = "flex";
    projectCard4.style.display = "none";

};











// closing buttons

exitButton[0].onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};

exitButton[1].onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};

exitButton[2].onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};

returnButton[0].onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};

returnButton[1].onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};

returnButton[2].onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};