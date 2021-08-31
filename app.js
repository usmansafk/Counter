//logic
//select b1 b2 b3 and h2 via getElemById()
//click event for each
//when dec- h2--. if h2 < 0 color = red

const number = document.getElementById("num");
const decrease = document.getElementById("minus");
const reset = document.getElementById("reset");
const increase = document.getElementById("add");

let num = 0;
number.textContent = num;
number.style.fontSize = "5rem";

decrease.addEventListener("click", function () {
  number.textContent = `${num--}`;
  if (num < 0) {
    number.style.color = "red";
  }
});

reset.addEventListener("click", function () {
  num = 0;
  number.textContent = `0`;
});

increase.addEventListener("click", function () {
  number.textContent = `${num++}`;
  if (num > 0) {
    number.style.color = "green";
  }
});
