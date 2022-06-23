function changeBgColor(color){
    colorCode = (color === 'blue')? "#0f62fe" :(color === 'green')? "#008000" : "#000000"
    document.body.style.backgroundColor = colorCode
}
const buttons = document.getElementsByTagName('Button');
Object.values(buttons).map(btn => btn.addEventListener("click", () => changeBgColor(btn.id)))
