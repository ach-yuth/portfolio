const myself = document.querySelector(".about");
const myDetails = document.querySelector(".btn-about");
const education = document.querySelector(".education");
const popUp = document.querySelector(".x-mark");
const details = document.querySelector(".details");
const index = document.querySelector(".html");
const style = document.querySelector(".css");
const app = document.querySelector(".js");
const button = document.querySelector(".btn-skill");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const head = document.querySelector(".left-home h2");
const extend = document.querySelector(".percentage");
const left = document.querySelector(".index");
const center = document.querySelector(".style");
const right = document.querySelector(".app");

details.addEventListener("click", () => {
  myself.classList.add("active");
  details.innerHTML = "";
});
popUp.addEventListener("click", () => {
  myself.classList.remove("active");
  details.innerHTML = "About Me";
  education.style.display = "none";
});

button.addEventListener("click", () => {
  index.classList.toggle("active");
  style.classList.toggle("active");
  app.classList.toggle("active");
});

body.addEventListener("mouseenter", () => {
  nav.classList.add("active");
});
body.addEventListener("mouseleave", () => {
  nav.classList.remove("active");
});
myDetails.addEventListener("click", () => {
  education.style.display = "inline-block";
});

index.addEventListener("click", () => {
  left.textContent = "EXPERT";
  center.innerHTML = "CSS";
  right.innerHTML = "JS";
  start();
});

function start() {
  extend.classList.add("left");
  extend.classList.remove("medium");
  extend.classList.remove("right");
}

style.addEventListener("click", () => {
  left.innerHTML = "HTML";
  center.innerHTML = "INTERMEDIATE";
  right.innerHTML = "JS";
  run();
});

function run() {
  extend.classList.add("medium");
  extend.classList.remove("right");
  extend.classList.remove("left");
}

app.addEventListener("click", () => {
  left.innerHTML = "HTML";
  center.innerHTML = "CSS";
  right.innerHTML = "BEGINNER";
  end();
});
function end() {
  extend.classList.add("right");
  extend.classList.remove("left");
  extend.classList.remove("medium");
}

head.innerHTML = head.innerText
  .split("")
  .map(
    (letter, idx) =>
      (letter.innerHTML = `<span style="transition-delay:${
        idx * 50
      }ms">${letter}</span>`)
  )
  .join("");
