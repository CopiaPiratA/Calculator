const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

var completeString = []
var numbersString = []

function clear(){
    numbersString = [];
    completeString = []
    input.value = "";
}
buttons.forEach(button => button.addEventListener("click",()=>{
    completeString.push(button.innerHTML);
    numbersString = completeString.join("");
    input.value = numbersString;
    console.log(numbersString)

        if (numbersString[0] === "+" || numbersString[0]=== "-"
            || numbersString[0]=== "/" ||numbersString[0]=== "*"){
                alert("Select a number first")
                clear()
            }
            if(button.innerHTML === "C"){
                clear()
            }
               else if(button.innerHTML === "="){
                    numbersString = numbersString.slice(0,-1);
                    input.value = numbersString;
                    input.value = eval(numbersString);
                    let result = eval(numbersString);
                    completeString = [result];
                    return result;
                 }
}))