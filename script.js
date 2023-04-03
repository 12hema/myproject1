let equal_pressed = 0;
let buttton_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};
//input function
buttton_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    input.value += button_class.value;
  });
});
//equal function
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);

    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alert("Invalid Input");
  }
});
//clear function
clear.addEventListener("click", () => {
  input.value = "";
});
//erase function
erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
