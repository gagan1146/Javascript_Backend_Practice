const boxes = Array.from(document.querySelectorAll("#boxes > div"));

boxes.forEach(box => {
    box.style.flex = "1";
    box.style.height = "100px";
    box.style.width = "100px";
    box.style.cursor = "pointer";
    box.style.backgroundColor = box.id;
    box.style.border = "1px solid black";
});

document.getElementById("purple").onclick = function() {
    document.body.style.backgroundColor = "purple";
}
document.getElementById("pink").onclick = function() {
    document.body.style.backgroundColor = "pink";
}
document.getElementById("lightblue").onclick = function() {
    document.body.style.backgroundColor = "lightblue";
}
document.getElementById("white").onclick = function() {
    document.body.style.backgroundColor = "white";
}
document.getElementById("red").onclick = function() {
    document.body.style.backgroundColor = "red";
}
