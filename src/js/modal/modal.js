
// opening the modal
const header = document.getElementById("js--header");
const projectsPage = document.getElementById("js--projectsPage");
const footer = document.getElementById("js--footer");
const projectPage = document.getElementById("js--projectsCard");
const projectCards = [
  document.getElementById("projectsCard--first"),
  document.getElementById("projectsCard--second"),
  document.getElementById("projectsCard--third"),
  document.getElementById("projectsCard--fourth"),
];

function showProject(projectIndex) {
  projectsPage.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
  projectPage.style.display = "flex";

  projectCards.forEach((card, i) => {
    card.style.display = i === projectIndex ? "flex" : "none";
  });
}

document.getElementById("js--project-1").addEventListener("click", () => showProject(0));
document.getElementById("js--project-2").addEventListener("click", () => showProject(1));
document.getElementById("js--project-3").addEventListener("click", () => showProject(2));
document.getElementById("js--project-4").addEventListener("click", () => showProject(3));


// closing buttons

const exitButton = document.querySelectorAll(".projectsCard__close");
const returnButton = document.querySelectorAll(".projectsCard__return");

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

exitButton[3].onclick = function(){
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

returnButton[3].onclick = function(){
    projectsPage.style.display = "flex";
    header.style.display = "flex";
    footer.style.display = "flex";

    projectPage.style.display = "none";
};

