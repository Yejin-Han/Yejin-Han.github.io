const cursor = document.querySelector(".cursor");
const home = document.querySelector("#header>h1");
const gnb = document.querySelector("#gnb");
const menus = gnb.querySelectorAll("a");
const about = document.querySelector("#about");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
const skills = document.querySelector(".skills");
const icons = document.querySelector(".icons");
const wave = document.querySelector(".wave");
const projectTitle = project.querySelector("h2");
const title = document.querySelectorAll(".main-text");
const projectList = project.querySelectorAll("li");

/* 초기 설정 */
document.body.classList.add("default");

/* 커서 디자인, 마우스 따라다니기 */
document.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  requestAnimationFrame(() => {
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
  });
});

/* nav 클릭 시 해당 섹션 위치로 이동하는 애니메이션 */
/* const sect1 = document.querySelector("#about");
const sect2 = document.querySelector("#project");
const sect3 = document.querySelector("#contact"); */
const sectTop1 = about.offsetTop;
const sectTop2 = project.offsetTop;
const sectTop3 = contact.offsetTop;
home.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
menus[0].addEventListener("click", () => {
  window.scrollTo({ top: sectTop1, behavior: "smooth" });
});
menus[1].addEventListener("click", () => {
  window.scrollTo({ top: sectTop2, behavior: "smooth" });
});
menus[2].addEventListener("click", () => {
  window.scrollTo({ top: sectTop3, behavior: "smooth" });
});
/* let offsetTops;
menus.forEach((menu, idx) => {
  if (idx == 0) {
    offsetTops = sectTop1;
  } else if (idx == 1) {
    offsetTops = sectTop2;
  } else if (idx == 2) {
    offsetTops = sectTop3;
  }
  menu.addEventListener("click", (e, offsetTops) => {
    e.preventDefault();
    console.log(idx);
    window.scrollTo({ top: offsetTops, behavior: "smooth" });
  });
}); */

/* .skills에서 마우스 방향에 따라 아이콘 움직이도록 */
let X = 0,
  Y = 0,
  mouseX = 0,
  mouseY = 0,
  degX = 0,
  degY = 0,
  wmouseX = 0,
  wmouseY = 0;
skills.addEventListener("mousemove", (e) => {
  X = e.clientX;
  Y = e.clientY;
  mouseX = window.innerWidth / 2 - X;
  mouseY = window.innerWidth / 2 - Y;
  degX = (mouseX * 12) / 100;
  degY = (mouseY * 12) / 100;
  wmouseX = (degX - wmouseX) * 0.1;
  wmouseY = (degY - wmouseY) * 0.1;
  icons.style.transform = `perspective(600px) rotateX(${wmouseX}deg) rotateY(-${wmouseY}deg)`;
});

/* #project 부분으로 스크롤되면 배경색 변함 */
/* #project main_text에 커서 갖다대면 색 반전, 크기 커짐 */
window.addEventListener("scroll", (e) => {
  const scrollY = window.pageYOffset;
  if (
    scrollY < scrollY + project.getBoundingClientRect().top ||
    scrollY >= scrollY + contact.getBoundingClientRect().top - 550
  ) {
    document.body.style.backgroundColor = "#fff";
    document.body.classList.add("default");
    gnb.style.color = "#222";
    menus.forEach((menu) => {
      menu.style.color = "#222";
    });
    wave.style.color = "#222";
    projectTitle.style.color = "#222";
  } else if (scrollY >= scrollY + project.getBoundingClientRect().top) {
    document.body.style.backgroundColor = "#222";
    document.body.classList.remove("default");
    gnb.style.color = "#fff";
    menus.forEach((menu) => {
      menu.style.color = "#fff";
    });
    wave.style.color = "#fff";
    projectTitle.style.color = "#fff";
  }
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

/* #projectList accordion */
let listHeight = [];
console.log(projectList);
projectList.forEach((list, idx) => {
  console.log(list.childNodes[3].clientHeight);
  listHeight[idx] = list.childNodes[3].clientHeight;
  list.childNodes[3].style.height = 0;
  list.addEventListener("click", () => {
    console.log(list.childNodes[3]);
    list.childNodes[3].classList.add("active");
    list.childNodes[3].style.height = `${listHeight[idx]}px`;
  });
});

/* #contact 배경 효과 */
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
