const number = document.getElementById("value");
const decrease = document.getElementById("minus");
const reset = document.getElementById("reset");
const increase = document.getElementById("add");

let count = 0;
number.textContent = count;

decrease.addEventListener("click", function () {
  if (count < 0) {
    number.style.color = "red";
  }
  number.textContent = `${count--}`;
});

reset.addEventListener("click", function () {
  count = 0;
  number.textContent = `0`;
  if (count == 0) {
    number.style.color = "black";
  }
});

increase.addEventListener("click", function () {
  if (count > 0) {
    number.style.color = "green";
  }
  number.textContent = `${count++}`;
});
