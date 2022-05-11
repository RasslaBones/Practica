let word = document.querySelectorAll(".word");
word.forEach(element=>{
    element.addEventListener("click",()=>{
        word.forEach(e=>{
            e.classList.remove("selected")
        })
        element.classList.add("selected")
    })
})