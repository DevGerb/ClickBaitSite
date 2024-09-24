document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const button = document.getElementById("clickButton");
  let count = 0;

  button.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
  });
});
