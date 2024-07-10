const display = document.getElementById("display");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const resultDisplay = document.getElementById("resultDisplay");
let temp;
function calculate(){
    temp = Number(display.value);
    if(display.value == ""){
        resultDisplay.style.color = "red";
        resultDisplay.textContent = "Invalid input found."
    }
    else {
        if(toCelsius.checked){
            resultDisplay.style.color = "green";
            temp = (5/9)*(temp-32);
            resultDisplay.textContent = temp.toFixed(2) + "°C";
        }
        else if(toFahrenheit.checked){
            resultDisplay.style.color = "green";
            temp = (9*temp/5)+32;
            resultDisplay.textContent = temp.toFixed(2) + "°F";
        }
        else{
            resultDisplay.style.color = "red";
            resultDisplay.textContent = "Please select a process."
        }
    }

}