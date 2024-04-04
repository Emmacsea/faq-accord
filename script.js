const minuIcon = document.body.querySelector("#minuscontent1");
const plusIcon = document.body.querySelector("#pluscontent1");
const details = document.body.querySelector("#content1details");

minuIcon.addEventListener("click", () => {
    details.textContent = ``
    minuIcon.className = "hide"
    plusIcon.className = ""
})

plusIcon.addEventListener("click", () => {
    details.textContent = ` Frontend Mentor offers realistic coding challenges to help developers improve their
    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
    all levels and ideal for portfolio building. `
    plusIcon.className = "hide"
    minuIcon.className = ""
})

const plusContent1 = document.body.querySelector("#pluscontentz1");
const plusContent2 = document.body.querySelector("#pluscontentz2");
const plusContent3 = document.body.querySelector("#pluscontentz3");

const minusContent1 = document.body.querySelector("#minuscontentz1");
const minusContent2 = document.body.querySelector("#minuscontentz2");
const minusContent3 = document.body.querySelector("#minuscontentz3");

const display1 = document.body.querySelector("#display1");
const display2 = document.body.querySelector("#display2");
const display3 = document.body.querySelector("#display3");

plusContent1.addEventListener("click", () => {
    display1.textContent = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free
    option providing access to a range of projects suitable for all skill levels.`
    plusContent1.className = "hide";
    minusContent1.className = ""
})

minusContent1.addEventListener("click", () => {
    display1.textContent = ``
    minusContent1.className = "hide";
    plusContent1.className = ""
})

plusContent2.addEventListener("click", () => {
    display2.textContent = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
    way to showcase your skills to potential employers!`
    plusContent2.className = "hide";
    minusContent2.className = "";
})

minusContent2.addEventListener("click", () => {
    display2.textContent = ``
    minusContent2.className = "hide";
    plusContent2.className = "";
})

plusContent3.addEventListener("click", () => {
    display3.textContent = `The best place to get help is inside Frontend Mentor's Discord community. There's a help
    channel where you can ask questions and seek support from other community members.`
    plusContent3.className = "hide";
    minusContent3.className = "";
})

minusContent3.addEventListener("click", () => {
    display3.textContent = ``
    minusContent3.className = "hide";
    plusContent3.className = "";
})