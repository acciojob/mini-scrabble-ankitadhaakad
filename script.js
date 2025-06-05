const input = document.getElementById("evaluatedText");
const counter = document.getElementById("letterCount");

input.addEventListener("input", function () {
  counter.textContent = input.value.length;
});
