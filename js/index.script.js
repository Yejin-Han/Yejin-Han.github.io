/* 변수 선언 */
const cursor = document.querySelector(".cursor");
const petalContainer = document.querySelector(".petal_container");
const home = document.querySelector("#header>h1");
const gnb = document.querySelector("#gnb");
const menus = gnb.querySelectorAll("a");
const sects = document.querySelectorAll("section");
const heading = document.querySelectorAll(".heading");
const about = document.querySelector("#about");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
const profileArea = document.querySelector(".content_left");
const profileImg = profileArea.querySelector("img");
const skills = document.querySelector(".skills");
const icons = document.querySelector(".icons");
const textSVG = document.querySelector("#textSVG");
const textPath = document.querySelector("#textPath");
const projectTitle = project.querySelector("h2");
const title = document.querySelectorAll(".main-text");
const projectList = project.querySelectorAll(".list");
const aboutTop = about.getBoundingClientRect().top;
const profileTop = profileArea.getBoundingClientRect().top;
const profileBottom = profileArea.getBoundingClientRect().bottom;
const prevBtn = document.querySelector(".swiper-button-prev");
const nextBtn = document.querySelector(".swiper-button-next");

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

/* 꽃잎 날리는 효과 */
const total = 30;
gsap.set("img", { xPercent: "-50%", yPercent: "-50%" });

const Rand = (min, max) => {
  return min + Math.random() * (max - min);
};
const fall = (el) => {
  gsap.to(el, {
    duration: Rand(6, 15),
    y: window.innerHeight + 200,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  });
  gsap.to(el, {
    duration: Rand(4, 8),
    x: "+=100",
    rotationZ: Rand(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  gsap.to(el, {
    duration: Rand(2, 8),
    rotationX: Rand(0, 360),
    rotationY: Rand(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
};

for (i = 0; i < total; i++) {
  const div = document.createElement("div");
  gsap.set(div, {
    attr: { class: "petal" },
    x: Rand(0, window.innerWidth),
    y: Rand(-200, -150),
    z: Rand(-200, 200),
  });
  petalContainer.appendChild(div);
  fall(div);
}

/* nav 클릭 시 해당 섹션 위치로 이동하는 애니메이션 */
const topPos = [];
sects.forEach((sect) => {
  topPos.push(sect.offsetTop);
});
window.addEventListener("resize", () => {
  topPos.length = 0;
  sects.forEach((sect) => {
    topPos.push(sect.offsetTop);
  });
});
menus.forEach((menu, idx) => {
  home.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  menu.addEventListener("click", () => {
    window.scrollTo({ top: topPos[idx + 1], behavior: "smooth" });
  });
});

/* #main_visual 텍스트 패럴렉스 스크롤링 */
heading.forEach((elem) => {
  let splitTxt = elem.innerText.split("").join("</span><span>");
  splitTxt = "<span>" + splitTxt + "</span>";
  console.log(splitTxt);
  elem.innerHTML = splitTxt;
});

/* #about 프로필 사진 스크롤에 따라 따라오게 */
const profileScroll = () => {
  requestAnimationFrame(() => {
    profileImg.style.top = `${scrollY - aboutTop}px`;
  });
};

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

/* #project 스크롤하면 텍스트가 물결모양으로 움직이는 효과*/
let path = document.querySelector(textPath.getAttribute("href"));
let pathLength = path.getTotalLength();

const updateTextPathOffset = (offset) => {
  textPath.setAttribute("startOffset", offset);
};
updateTextPathOffset(pathLength);

const textScroll = () => {
  requestAnimationFrame(() => {
    let rect = textSVG.getBoundingClientRect();
    let scrollPercent = rect.y / window.innerHeight;
    updateTextPathOffset(scrollPercent * 2 * pathLength);
  });
};

/* #project 부분으로 스크롤되면 배경색 변함 */
/* #project main_text에 커서 갖다대면 색 반전, 크기 커짐 */
window.addEventListener("scroll", (e) => {
  const scrollY = window.pageYOffset;
  /* console.log(scrollY, aboutTop - 250, profileBottom); */
  textScroll();
  if (
    scrollY >= aboutTop &&
    scrollY < profileBottom - profileImg.clientHeight - 200
  ) {
    profileScroll();
  }
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
    textPath.style.fill = "#222";
    projectTitle.style.color = "#222";
  } else if (scrollY >= scrollY + project.getBoundingClientRect().top) {
    document.body.style.backgroundColor = "#222";
    document.body.classList.remove("default");
    gnb.style.color = "#fff";
    menus.forEach((menu) => {
      menu.style.color = "#fff";
    });
    textPath.style.fill = "#fff";
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

/* #projectList accordion, mediaquery button */
let listHeight = [];
let clickable = true;
let displayNum = 1;
const heightChange = (displayNum, listContents, idx) => {
  switch (displayNum) {
    case 1:
      listContents.style.height = `${listHeight[idx]}px`;
      break;
    case 2:
      listContents.style.height = `${listHeight[idx] + 100}px`;
      break;
    case 3:
      listContents.style.height = `${listHeight[idx] + 150}px`;
      break;
  }
};
const toggleList = (list, idx) => {
  const listContents = list.querySelector(".contents");
  const closeBtn = list.querySelector(".close_btn");
  const d = list.querySelectorAll(".d");
  const t = list.querySelectorAll(".t");
  const m = list.querySelectorAll(".m");
  const btns = list.querySelectorAll(".btn");
  listHeight[idx] = listContents.clientHeight;
  listContents.style.height = 0;
  list.addEventListener("click", () => {
    clickable = false;
    list.classList.add("active");
    listContents.style.height = `${listHeight[idx]}px`;
    if (clickable) {
      if (list.querySelector(".btn_wrap")) {
        list.querySelectorAll("img").forEach((el) => {
          el.classList.add("none");
        });
        d.forEach((el) => {
          el.classList.remove("none");
        });
      } else {
        list.querySelectorAll("img").forEach((el) => {
          el.classList.remove("none");
        });
      }
    }
    heightChange(displayNum, listContents, idx);
  });
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      list.querySelectorAll("img").forEach((el) => {
        el.classList.add("none");
      });
      if (btn.classList.contains("pc_btn")) {
        displayNum = 1;
        d.forEach((el) => {
          el.classList.remove("none");
        });
        listContents.style.height = `${listHeight[idx]}px`;
      } else if (btn.classList.contains("tab_btn")) {
        displayNum = 2;
        t.forEach((el) => {
          el.classList.remove("none");
        });
        listContents.style.height = `${listHeight[idx] + 100}px`;
      } else if (btn.classList.contains("mob_btn")) {
        displayNum = 3;
        m.forEach((el) => {
          el.classList.remove("none");
        });
        listContents.style.height = `${listHeight[idx] + 150}px`;
      }
      heightChange(displayNum, listContents, idx);
    });
  });
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    clickable = true;
    list.classList.remove("active");
    listContents.style.height = `0px`;
  });
};
projectList.forEach((list, idx) => {
  toggleList(list, idx);
});

/* .thumb_slides swiper 적용 */
const swiper = new Swiper(".thumb_slides", {
  draggable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowSlidePrev: true,
  allowSlideNext: true,
  spaceBetween: 20,
  slidesPerView: "auto",
  disableOnInteraction: false,
  on: {
    init: function () {
      nextBtn.classList.remove(".swiper-button-lock");
      nextBtn.classList.remove(".swiper-button-disabled");
      nextBtn.setAttribute("aria-disabled", "false");
    },
  },
});

/* #contact 배경 효과 */
const blurs = gsap.utils.toArray(".blur");

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
