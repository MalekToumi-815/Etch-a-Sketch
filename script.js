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
//resizing the container
document.querySelector("#resize").addEventListener("click",() => resize())
//making the toolbar options appear and disappear
const options = document.querySelector("#options");
const toolbar = document.querySelector("#toolbar");
const triangle = document.querySelector(".clip-triangle")
triangle.addEventListener("click", () => {
    if (toolbar.style.maxWidth === "135px" && options.style.visibility === "visible") {
        toolbar.style.maxWidth = "35px";
        options.style.visibility = "hidden"
        triangle.innerHTML = ">"
    } else {
        toolbar.style.maxWidth = "135px";
        options.style.visibility = "visible" 
        triangle.innerHTML = "<"
    }
});
