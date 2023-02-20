const header = document.querySelector("header");
const icon = document.getElementById("top");
const arrowIcon = document.getElementById("chedown");

window.addEventListener("scroll", function () {
  // const scroolBolean = window.scrollY >= 80 ? true : false;
  // if (scroolBolean) {
  //   icon.style.display = "flex";
  //   arrowIcon.style.display = "flex";
  // } else {
  //   icon.style.display = "none";
  //   arrowIcon.style.display = "none";
  // }
});

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

document.addEventListener("scroll", onScroll);
