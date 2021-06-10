import { multiply, addition } from "./helper.js";
import { errorInput, reset } from "./utils.js";

var numberOne = document.getElementById("numberOne");
var numberTwo = document.getElementById("numberTwo");

document.getElementById("onMultiply").addEventListener("click", () => {
  errorInput(numberOne, numberTwo);
  document.getElementById("printResult").innerHTML = multiply(
    numberOne.value,
    numberTwo.value
  );
  reset(numberOne, numberTwo);
});

document.getElementById("onAddition").addEventListener("click", () => {
  errorInput(numberOne, numberTwo);
  document.getElementById("printResult").innerHTML = addition(
    numberOne.value,
    numberTwo.value
  );
  reset(numberOne, numberTwo);
});
