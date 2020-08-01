let BossController;
let SoftController;
let KnowController;
let MyInfoController;

function BossAnimation() {
  BossController = new ScrollMagic.Controller();
  const Boss = document.querySelector(".Boss");
  const SoftWare = document.querySelector("#Software");
  const BossMoving = gsap.timeline({
    defaults: {
      duration: 4,
      ease: "power2.out",
    },
  });

  BossMoving.fromTo(Boss, { y: "-1000%" }, { y: "0%" }, "-=1");
  BossMoving.fromTo(Boss, { scale: 0 }, { scale: 2.2 }, "-=2.0");
}

function SoftWareAnimation() {
  SoftController = new ScrollMagic.Controller();
  const S = document.querySelector("#S");
  const O = document.querySelector("#O");
  const F = document.querySelector("#F");
  const T = document.querySelector("#T");
  const W = document.querySelector("#W");
  const A = document.querySelector("#A");
  const R = document.querySelector("#R");
  const E1 = document.querySelector("#E1");
  const E2 = document.querySelector("#E2");
  const N1 = document.querySelector("#N1");
  const G1 = document.querySelector("#G1");
  const I1 = document.querySelector("#I1");
  const N2 = document.querySelector("#N2");
  const N3 = document.querySelector("#N3");
  const E3 = document.querySelector("#E3");
  const R2 = document.querySelector("#R2");
  const I2 = document.querySelector("#I2");
  const N5 = document.querySelector("#N5");
  const G2 = document.querySelector("#G2");

  const SWMoving = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });

  SWMoving.fromTo(S, { x: "10000%" }, { x: "0%" }, "+=2.5");
  SWMoving.fromTo(O, { x: "10000%" }, { x: "0%" }, "-=0.5");
  SWMoving.fromTo(F, { x: "10000%" }, { x: "0%" }, "-=0.5");
  SWMoving.fromTo(T, { x: "10000%" }, { x: "0%" }, "-=0.5");
  SWMoving.fromTo(W, { x: "10000%" }, { x: "0%" }, "-=0.5");
  SWMoving.fromTo(A, { x: "10000%" }, { x: "0%" }, "-=0.5");
  SWMoving.fromTo(R, { x: "10000%" }, { x: "0%" }, "-=0.5");
  SWMoving.fromTo(E1, { x: "10000%" }, { x: "0%" }, "-=0.5");
  SWMoving.fromTo(E2, { x: "-10000%" }, { x: "0%" }, "-=3.5");
  SWMoving.fromTo(N1, { x: "-10000%" }, { x: "0%" }, "-=2.5");
  SWMoving.fromTo(G1, { x: "-10000%" }, { x: "0%" }, "-=2.3");
  SWMoving.fromTo(I1, { x: "-10000%" }, { x: "0%" }, "-=2.1");
  SWMoving.fromTo(N2, { x: "-10000%" }, { x: "0%" }, "-=1.9");
  SWMoving.fromTo(N3, { x: "-10000%" }, { x: "0%" }, "-=1.7");
  SWMoving.fromTo(E3, { x: "-10000%" }, { x: "0%" }, "-=1.5");
  SWMoving.fromTo(R2, { x: "-10000%" }, { x: "0%" }, "-=1.3");
  SWMoving.fromTo(I2, { x: "-10000%" }, { x: "0%" }, "-=1.1");
  SWMoving.fromTo(N5, { x: "-10000%" }, { x: "0%" }, "-=0.9");
  SWMoving.fromTo(G2, { x: "-10000%" }, { x: "0%" }, "-=0.7");
}

function KnowMeAnimation() {
  KnowController = new ScrollMagic.Controller();
  const a = document.querySelector("a");
  const KnowMe = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });

  KnowMe.fromTo(a, { scale: 0 }, { scale: 1 }, "+=7.5");
}

function InfoAnimation() {
  MyInfoController = new ScrollMagic.Controller();
  const Info = document.querySelector(".revealMyInfo");
  const K = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });

  K.fromTo(Info, { x: "0%" }, { x: "100%" }, "-=1.0");
}
BossAnimation();
SoftWareAnimation();
KnowMeAnimation();
InfoAnimation();
