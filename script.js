let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
//1,2
for(let i=0;i<colors.length;i++){
    const render=document.querySelector(".boxes")
    render.insertAdjacentHTML("beforeend", '<div class="box"> </div>')
    const colorBox = document.querySelectorAll(".box")
    for(let i=0;i<colorBox.length;i++){
        colorBox[i].style.backgroundColor=colors[i]
    }
    updateTotal()
}
//3
function updateTotal(){
    const totalBox=document.getElementsByClassName("box")
    const span=document.querySelector(".points")
    span.textContent=totalBox.length
}
//4
const removeBox = document.querySelectorAll(".box")
removeBox.forEach(function(box){
    box.addEventListener("click",function(e){
        box.remove()
        updateTotal()
    })
})