export function multiply(number1, number2) {
  if (!number1 && !number2) {
    return `Please enter a valid number`;
  } else {
    return "Answer is : " + number1 * number2;
  }
}

export function addition(number1, number2) {
  if (!number1 && !number2) {
    return `Please enter a valid number`;
  } else {
    const sum = parseInt(number1) + parseInt(number2);
    return "Answer is  : " + sum;
  }
}
