words = document.querySelectorAll(".word");
words.forEach(element=>{
    element.addEventListener("click",()=>{
        words.forEach(el=>{
            el.classList.remove("selected")
        })
        element.classList.add("selected")
    })
})

