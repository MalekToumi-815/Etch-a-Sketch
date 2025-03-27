//creating default sketch
const container = document.getElementById("container")
resize(16)
//resizing the sketch
function resize(x=0){
    container.innerHTML = ""
    if (x==0)
    while (true){
        x = prompt("Enter new size(note!!:bigger than 16 and smaller than 100): ")
        x = Number(x)
        if (x>=16 && x<=100) break
    }
    for (let i = 0;i < (x*x);i++){
        let box = document.createElement("div")
        box.classList.add("box")
        container.appendChild(box)
    }
    container.style.width = `${x*8}px`
    container.style.height = `${x*8}px`
    //drawing in the sketch
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
    box.addEventListener("mouseover",() => {box.style.backgroundColor = "black"})
    })
    //rubbing the sketch
    document.querySelector("#reset").addEventListener("click",() => {boxes.forEach(box => {box.style.backgroundColor = ""})})
}
document.querySelector("#resize").addEventListener("click",() => resize())