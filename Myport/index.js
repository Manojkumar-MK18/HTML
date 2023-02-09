const header = document.querySelector("header");
const icon = document.getElementById("top");
const arrowIcon = document.getElementById("chedown");
console.log(arrowIcon);
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0); 
  const scroolBolean = window.scrollY >= 80 ? true : false;
  if (scroolBolean) {
    icon.style.display = "flex";
    arrowIcon.style.display = "flex";
  } else {
    icon.style.display = "none";
    arrowIcon.style.display = "none";
  }
});
