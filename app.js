// Constants

// Variables (state)

// Cached Element References

let displayElement = document.getElementById("math-result");

let inputElement1 = document.getElementById("math-input-1");
let inputElement2 = document.getElementById("math-input-2");

let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector("#minus");
let timesBtn = document.querySelector("#times");
let dividedBtn = document.querySelector("#divided");

// Event listeners

// Operator button functions
plusBtn.addEventListener("click", function () {
  let result = parseInt(inputElement1.value) + parseInt(inputElement1.value);
  displayElement.textContent = result;
});

minusBtn.addEventListener("click", function () {
  let result = parseInt(inputElement1.value) - parseInt(inputElement1.value);
  displayElement.textContent = result;
});

timesBtn.addEventListener("click", function () {
  let result = parseInt(inputElement1.value) * parseInt(inputElement1.value);
  displayElement.textContent = result;
});
dividedBtn.addEventListener("click", function () {
  let result = parseInt(inputElement1.value) / parseInt(inputElement1.value);
  displayElement.textContent = result;
});

// equals
// percent
// sign 
// backspace/delete
// clear
// add decimal



// Functions
