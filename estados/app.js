const paragraph = document.querySelectorAll("p")
const array = Array.from(paragraph) 

array.forEach(p => {
    const conteudoP = p.textContent 
    if(conteudoP.includes("Hoje")){
        p.style.color = "#FF0F0F"
    return
    }
    p.style.color = "#00008B"
})



