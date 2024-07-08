// // opening and closing each when clicks on them

// function openAccordion(event) {
//     console.log(document.getElementsByClassName("accordion-body"))
// }

// function actionShowSec1(){
//     document.getElementById("section1").style.display = "block";
//     document.getElementById("section2").style.display = "none";
//     document.getElementById("section3").style.display = "none";
// }

// function actionShowSec2(){
//     document.getElementById("section1").style.display = "none";
//     document.getElementById("section2").style.display = "block";
// }

// function actionShowSec3(){
//     document.getElementById("section1").style.display = "none";
//     document.getElementById("section2").style.display = "none";
//     document.getElementById("section3").style.display = "block";
// }

// // adding a timer for accordion 2 &3
// let myTimer1 = setTimeout(actionShowSec2, 5000);
// let myTimer2 = setTimeout(actionShowSec3, 10000);

// // stops the timer when clicks on them
// 
// function stopTimer2(){
//     clearTimeout(myTimer1 , myTimer2);
//     document.getElementById("section1").style.display = "none";
//     document.getElementById("section2").style.display = "block";
//     document.getElementById("section3").style.display = "none";
// }
// function stopTimer3(){
//     clearTimeout(myTimer1 , myTimer2);
//     document.getElementById("section1").style.display = "none";
//     document.getElementById("section2").style.display = "none";
//     document.getElementById("section3").style.display = "block";
// }

// const arrays = [1, 2, 3, 4, 5]

// console.group("first loop")
// for (let i = 0; i< arrays.length; i++) {
//     console.log(arrays[i])
// }
// console.groupEnd();

// console.group("second loop")
// for (const arr of arrays) {
//     console.log(arr)
// }
// console.groupEnd();


const accordions = document.querySelectorAll(".accordion");
let myTimeout = setInterval(actionAutoOpen, 3000);

for (const accordion of accordions) {
  accordion.addEventListener("click", function () {
    // stop timer
    clearInterval(myTimeout);
    // accordion & icon color showing
    const activeAccordion = document.querySelector(".accordion.show");
    activeAccordion?.classList.remove("show");
    activeAccordion?.classList.remove("circle");
    accordion.classList.add("show");
    accordion.classList.add("circle");
    // Paragraph showing
    const Paragraph = accordion.querySelector(".text");
    document.querySelector("#demo").innerHTML = Paragraph.textContent;
  });
}

function actionAutoOpen() {
  const activeAccordion = document.querySelector(".accordion.show");
  const activeAccordionIndex = [...accordions].indexOf(activeAccordion);
  let Paragraph;
  if (accordions.length - 1 === activeAccordionIndex) {
    accordions[0].classList.add("show");
    Paragraph = accordions[0].querySelector(".text");
    accordions[0].classList.add("circle");
  } else {
    accordions[activeAccordionIndex + 1].classList.add("show");
    Paragraph = accordions[activeAccordionIndex + 1].querySelector(".text");
    accordions[activeAccordionIndex + 1].classList.add("circle");
  }
  accordions[0].querySelector(".text").classList.add("show");
  activeAccordion?.classList.remove("show");
  activeAccordion?.classList.remove("circle");
  document.querySelector("#demo").innerHTML = Paragraph?.textContent;
}
