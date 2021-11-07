const first = document.getElementById("first");
const second = document.getElementById("second");
const prev = document.getElementById("left");
const next = document.getElementById("right");
const prev1 = document.getElementById("secLeft");
const next1 = document.getElementById("secRight");

prev.addEventListener("click", function () {

  if ((second.style.display = "none")) {
    second.style.display = "flex";
    first.style.display = "none";
  }
});

next.addEventListener("click", function () {

  if ((second.style.display = "none")) {
    second.style.display = "flex";
    first.style.display = "none";
  }
});

prev1.addEventListener("click", function () {

  if ((first.style.display = "none")) {
    first.style.display = "flex";
    second.style.display = "none";
  }
});
next1.addEventListener("click", function () {
 
  if ((first.style.display = "none")) {
    first.style.display = "flex";
    second.style.display = "none";
  }
});