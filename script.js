const projectSection = document.getElementById("project-sec");
const skillSection = document.getElementById("skill-sec");
const educationSection = document.getElementById("education-sec");
const aboutSection = document.getElementById("about-sec");
projectSection.style.visibility = "hidden";
skillSection.style.visibility = "hidden";
educationSection.style.visibility = "hidden";
aboutSection.style.visibility = "visible";
document.getElementById("project-li").addEventListener("click", () => {
    projectSection.style.visibility = "visible";
    skillSection.style.visibility = "hidden";
    educationSection.style.visibility = "hidden";
    aboutSection.style.visibility = "hidden";
})
document.getElementById("skill-li").addEventListener("click", () => {
    projectSection.style.visibility = "hidden";
    skillSection.style.visibility = "visible";
    educationSection.style.visibility = "hidden";
    aboutSection.style.visibility = "hidden";
})
document.getElementById("education-li").addEventListener("click", () => {
    projectSection.style.visibility = "hidden";
    skillSection.style.visibility = "hidden";
    educationSection.style.visibility = "visible";
    aboutSection.style.visibility = "hidden";
})
document.getElementById("about-btn").addEventListener("click", () => {
    projectSection.style.visibility = "hidden";
    skillSection.style.visibility = "hidden";
    educationSection.style.visibility = "hidden";
    aboutSection.style.visibility = "visible";
})