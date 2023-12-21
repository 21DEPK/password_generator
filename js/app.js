const range = document.querySelector("input[type='range']");
const res = document.querySelector(".container input");
const generate = document.getElementById("generate");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^<>?/|{]}[&*()";
const copy = document.getElementById('copy');

range.addEventListener("input", () => {
  document.querySelector(".range button").innerText = range.value;
});
generate.addEventListener("click", () => {
  let inputString = "";
  let result = "";
  let constraints = [];
  checkboxes.forEach((box) => {
    constraints.push(box.checked);
  });
  if (constraints[0]) {
    inputString += upperAlphabets;
  }
  if (constraints[1]) {
    inputString += lowerAlphabets;
  }
  if (constraints[2]) {
    inputString += numbers;
  }
  if (constraints[3]) {
    inputString += symbols;
  }
  for (let i = 0; i < range.value; i++) {
    if (inputString[Math.floor(Math.random() * inputString.length)]) {
      result += inputString[Math.floor(Math.random() * inputString.length)];
    }
  }
  res.value = result;
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(res.value);
    copy.innerText = 'check';
    copy.setAttribute('title','Copied!');
    setTimeout(() => {
        copy.innerText = 'content_copy';
        copy.setAttribute('title','');
    }, 3000);
});
