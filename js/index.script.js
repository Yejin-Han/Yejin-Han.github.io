const cursor = document.querySelector(".cursor");
const title = document.querySelectorAll(".main-text");
const project = document.querySelector("#project");
const wave = document.querySelector(".wave");
const projectTitle = project.querySelector("h2");
const contact = document.querySelector("#contact");

document.body.classList.add("default");

document.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  requestAnimationFrame(() => {
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
  });
});
title.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    cursor.querySelector(".real").style.backgroundColor = "#fff";
  });
  elem.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    cursor.querySelector(".real").style.backgroundColor = "#f7788a";
  });
});

window.addEventListener("scroll", (e) => {
  const scrollY = window.pageYOffset;
  if (
    scrollY < scrollY + project.getBoundingClientRect().top ||
    scrollY >= scrollY + contact.getBoundingClientRect().top - 550
  ) {
    document.body.style.backgroundColor = "#fff";
    document.body.classList.add("default");
    wave.style.color = "#222";
    projectTitle.style.color = "#222";
  } else if (scrollY >= scrollY + project.getBoundingClientRect().top) {
    document.body.style.backgroundColor = "#222";
    document.body.classList.remove("default");
    wave.style.color = "#fff";
    projectTitle.style.color = "#fff";
  }
});

const random = (min, max) => {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
};

const randomX = random(-400, 400);
const randomY = random(-200, 200);
const randomDelay = random(0, 50);
const randomTime = random(6, 12);
const randomTime2 = random(5, 6);
const randomAngle = random(-30, 150);

const blurs = gsap.utils.toArray(".blur");

const rotate = (target, direction) => {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1],
  });
};

const moveX = (target, direction) => {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1],
  });
};

const moveY = (target, direction) => {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1],
  });
};

blurs.forEach((blur) => {
  gsap.set(blur, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1),
  });
  moveX(blur, 1);
  moveY(blur, -1);
  rotate(blur, 1);
});
