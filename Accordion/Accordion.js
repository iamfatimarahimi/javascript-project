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
// function stopTimer1(){
//     clearTimeout(myTimer1 , myTimer2);
//     document.getElementById("section2").style.display = "block";

// }
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


const Paragraph = document.getElementsByClassName("text")
const demo = document.getElementById("demo")
const accordions = document.querySelectorAll(".accordion");
    for (const accordion of accordions) {
    accordion.addEventListener("click", function() { 
        const activeAccordion = document.querySelector(".accordion.show")
        activeAccordion.classList.remove("show")
        accordion.classList.add("show")
    })
    function actionAutoOpen(){
        for(let i = 0; i<accordions.length; i++){
           const accordionO = accordions[i];
            accordionO.classList.add("show")
            
        }
        // accordionO.classList.add("show")
        // demo.innerHTML = Paragraph.text;
    }
    demo.innerText = Paragraph.text;
}

let myTimer = setTimeout(actionAutoOpen, 3000);