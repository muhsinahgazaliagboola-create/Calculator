
let expression = "";
function press(value) {
    expression += value

    document.getElementById("screen").textContent = expression

}
function calculate(){
    let answer = Function ( " return (" + expression + ")")();
    document.getElementById("screen").textContent = answer

    expression = String(answer)
    
}

function clearScreen(){
    expression = "";
    document.getElementById("screen").textContent = "";
}
function backSpace(){
    expression = expression.slice(0, -1);
    document.getElementById("screen").textContent = expression || "0"
}