// 진행바 효과
gsap.from(".progressBar", {
  scrollTrigger: {
    trigger: "#parallaxcont",
    scrub: true,
    start: "top top",
    end: () => document.querySelector("#parallaxcont").offsetwidth,
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none",
});

// 텍스트 애니메이션
const textAnimation = gsap.timeline();
textAnimation
  .from(
    "#textAnimation .t1",
    {
      autoAlpha: 0,
      duration: 1,
      y: 50,
    },
    "+=1"
  )
  .from(
    "#textAnimation .t2",
    {
      autoAlpha: 0,
      duration: 1,
      y: 50,
    },
    "+=1"
  )
  .from(
    "#textAnimation .t3",
    {
      autoAlpha: 0,
      duration: 1,
      y: 50,
    },
    "+=1"
  )
  .from(
    "#textAnimation .t4",
    {
      autoAlpha: 0,
      duration: 1,
      y: 50,
    },
    "+=1"
  );

ScrollTrigger.create({
  animation: textAnimation,
  trigger: "#textAnimation",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

// 이미지 애니메이션
gsap.utils.toArray(".reveal").forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    markers: false,
    onEnter: () => {
      animate(item);
    }, //callback
  });

  item.style.opacity = "0";
});

const animate = (item) => {
  let x = 300;
  let y = 0;
  let delay = item.dataset.delay;

  if (item.classList.contains("reveal_left")) {
    (x = -300), (y = 0);
  } else if (item.classList.contains("reveal_right")) {
    x = 300;
    y = 0;
  } else if (item.classList.contains("reveal_top")) {
    x = 0;
    y = -300;
  } else {
    x = 100;
    y = 0;
  }

  gsap.fromTo(
    item,
    { autoAlpha: 0, x: x, y: y },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      delay: delay,
      duration: 1.25,
      overwrite: "auto",
      ease: "expo",
    }
  );
};

// 마우스 부드럽게
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// 프로젝트 텍스트 애니메이션
//gsap.
