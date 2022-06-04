const bars = document.querySelectorAll(".gr")
const hoverText = document.querySelectorAll(".hover-text")
bars.forEach(function(bar){
    bar.addEventListener("mouseenter", function(){
        bar.previousSibling.previousSibling.classList.add("show-hover-text")
        
    })
    bar.addEventListener("mouseleave", function(){
        bar.previousSibling.previousSibling.classList.remove("show-hover-text")
    })
})
