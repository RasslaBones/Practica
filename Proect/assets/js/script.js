const redPlus = () =>{
    plus = document.querySelectorAll(".popular__box__cell__bg__plus");
    plus.forEach(element=>{
        element.style.backgroundColor = "#EF0505";
    })
}
cards = document.querySelectorAll(".popular__box__cell__bg");
cards.forEach(element=>{
    element.addEventListener("onmouseover", redPlus())
})
