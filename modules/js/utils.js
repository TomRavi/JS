export function errorInput() {
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i].value) {
      arguments[i].classList.add("error");
    } else {
      arguments[i].classList.remove("error");
    }
  }
}

export function reset() {
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i].value) {
      arguments[i].value = "";
    } else {
      arguments[i].value = "";
    }
  }
}
