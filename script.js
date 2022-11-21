const span= document.getElementById("span")
const increase=document.querySelector(".increase")
const reset =document.querySelector(".reset")
const decrease =document.querySelector(".decrease")
increase.addEventListener("click",increaseClicked)
decrease.addEventListener("click",decreaseClicked)
reset.addEventListener("click",resetClicked)
let counter = 0;
function increaseClicked() {
    counter=counter+1
    span.innerText=counter
}
function decreaseClicked() {
    counter=counter-1
    span.innerText=counter

}
function resetClicked() {
    counter=0
    span.innerText=counter

}
