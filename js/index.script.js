const cursor = document.querySelector(".cursor");
const title = document.querySelectorAll(".main-text");
const project = document.querySelector("#project");
const wave = document.querySelector(".wave");
const projectTitle = project.querySelector("h2");
const contact = document.querySelector("#contact");

document.addEventListener("mousemove", (e) => {
  const posX = e.pageX;
  const posY = e.pageY;
  requestAnimationFrame(() => {
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
  });
});
title.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });
  elem.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});

project.querySelectorAll("li").forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.querySelector(".real").style.backgroundColor = "#fff";
  });
  elem.addEventListener("mouseleave", () => {
    cursor.querySelector(".real").style.backgroundColor = "#f7788a";
  });
});

window.addEventListener("scroll", (e) => {
  const scrollY = window.pageYOffset;
  if (
    scrollY < scrollY + project.getBoundingClientRect().top ||
    scrollY >= scrollY + contact.getBoundingClientRect().top - 600
  ) {
    project.style.backgroundColor = "#fff";
    project.classList.add("blur");
    wave.style.color = "#222";
    projectTitle.style.color = "#222";
    contact.style.backgroundColor = "#a7eff7";
  } else if (scrollY >= scrollY + project.getBoundingClientRect().top) {
    project.style.backgroundColor = "#222";
    project.classList.remove("blur");
    wave.style.color = "#fff";
    projectTitle.style.color = "#fff";
    contact.style.backgroundColor = "#222";
  }
});
