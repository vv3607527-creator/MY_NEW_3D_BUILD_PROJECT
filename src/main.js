import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════ CONFIG ═══════════ */

const CHAPTERS = 12;
const VH_PER_CHAPTER = 140;
const SEQ_COUNT = 100;

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

const world = document.getElementById("scrollWorld");
const plates = gsap.utils.toArray(".plate");
const copies = gsap.utils.toArray(".copy");
const pills = gsap.utils.toArray(".pill");
const dots = gsap.utils.toArray("#dots button");
const cue = document.getElementById("cue");
const topbar = document.getElementById("topbar");
const dotsWrap = document.getElementById("dots");
const heroCanvas = document.getElementById("heroCanvas");
const hctx = heroCanvas.getContext("2d");

world.style.height = `${CHAPTERS * VH_PER_CHAPTER}vh`;

let current = -1;
let lenis = null;

/* ═══════════ SMOOTH SCROLL ═══════════ */

if (!reduced) {
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, touchMultiplier: 1.4 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
} else {
  document.body.style.overflow = "hidden";
}

/* ═══════════ HERO FRAME SEQUENCE ═══════════
   The drone clip, extracted to 100 webp frames, scrubbed by scroll.
   ══════════════════════════════════════════ */

const seqFrames = new Array(SEQ_COUNT).fill(null);
let seqReadyCount = 0;
let drawnFrame = -1;

function drawFrame(i) {
  if (i === drawnFrame) return;
  const img = seqFrames[i];
  if (!img) return;
  hctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
  hctx.drawImage(img, 0, 0, heroCanvas.width, heroCanvas.height);
  drawnFrame = i;
}

for (let i = 0; i < SEQ_COUNT; i++) {
  const img = new Image();
  img.decoding = "async";
  img.onload = () => {
    seqFrames[i] = img;
    seqReadyCount++;
    if (i === 0) drawFrame(0);
  };
  img.src = `/assets/seq/hero-${String(i).padStart(3, "0")}.webp`;
}

const seqReady = new Promise((resolve) => {
  if (seqReadyCount >= 10) return resolve();
  const check = setInterval(() => {
    if (seqReadyCount >= 10) {
      clearInterval(check);
      resolve();
    }
  }, 100);
  setTimeout(() => {
    clearInterval(check);
    resolve();
  }, 4000);
});

/* ═══════════ MASTER SCROLL TIMELINE ═══════════
   12 chapters → 12 timeline units. Scroll scrubs through them.
   Plate i:  fade in [i-0.12 → i] · push-in [i → i+0.9] · fade out [i+0.86 → i+0.98]
   Copy  i:  children rise [i+0.03 → i+0.2] · exit [i+0.8 → i+0.92]
   ══════════════════════════════════════════════ */

const tl = gsap.timeline({
  defaults: { ease: "none" },
  scrollTrigger: {
    trigger: world,
    start: "top top",
    end: "bottom bottom",
    scrub: reduced ? true : 0.6,
    onUpdate: onProgress,
  },
});

/* — Chapter 0 · Arrival: scroll scrubs the drone flight, canvas dives through — */
if (!reduced) {
  const seqState = { f: 0 };
  tl.to(
    seqState,
    {
      f: SEQ_COUNT - 1,
      duration: 0.9,
      ease: "none",
      onUpdate: () => drawFrame(Math.round(seqState.f)),
    },
    0
  );
  tl.fromTo(plates[0].querySelector("[data-media]"), { scale: 1 }, { scale: 1.3, duration: 0.9 }, 0);
}
tl.to(plates[0], { autoAlpha: 0, duration: 0.12 }, 0.86);
tl.to(copies[0], { autoAlpha: 0, y: -26, duration: 0.09 }, 0.8);
tl.to(cue, { autoAlpha: 0, duration: 0.05 }, 0.05);

/* — Chapters 1..11 — */
for (let i = 1; i < CHAPTERS; i++) {
  const plate = plates[i];
  const media = plate.querySelector("[data-media]");
  const copy = copies[i];
  const isLast = i === CHAPTERS - 1;

  tl.fromTo(plate, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12 }, i - 0.12);
  tl.fromTo(media, { scale: 1.18 }, { scale: 1.02, duration: 1.02 }, i - 0.05);

  if (!isLast) {
    tl.to(plate, { autoAlpha: 0, duration: 0.12 }, i + 0.86);
    tl.to(copy, { autoAlpha: 0, y: -26, duration: 0.09 }, i + 0.8);
  }

  tl.fromTo(
    copy.children,
    { autoAlpha: 0, y: 38 },
    { autoAlpha: 1, y: 0, duration: 0.1, stagger: 0.028, ease: "power2.out" },
    i + 0.03
  );
}

/* ═══════════ CHROME SYNC ═══════════ */

function onProgress(p) {
  const idx = Math.min(CHAPTERS - 1, Math.max(0, Math.floor(p * CHAPTERS + 0.0001)));
  if (idx !== current) {
    current = idx;
    pills.forEach((el, i) => el.classList.toggle("is-active", i === idx));
    dots.forEach((el, i) => el.classList.toggle("is-active", i === idx));
    copies.forEach((el, i) => el.classList.toggle("is-live", i === idx));
  }
}

/* ═══════════ NAVIGATION ═══════════ */

function gotoChapter(i) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const target = max * ((i + 0.5) / CHAPTERS);
  if (lenis) lenis.scrollTo(target, { duration: 1.7, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top: target, behavior: "smooth" });
}

[...pills, ...dots].forEach((btn) =>
  btn.addEventListener("click", () => gotoChapter(Number(btn.dataset.goto)))
);
document.getElementById("ctaTop").addEventListener("click", () => gotoChapter(CHAPTERS - 1));
document.getElementById("ctaFinal").addEventListener("click", (e) => {
  e.preventDefault();
  gotoChapter(CHAPTERS - 1);
});

/* ═══════════ MOUSE PARALLAX ═══════════ */

if (!reduced && finePointer) {
  const xTos = plates.map((p) => gsap.quickTo(p.querySelector("[data-media]"), "xPercent", { duration: 1.1, ease: "power2.out" }));
  const yTos = plates.map((p) => gsap.quickTo(p.querySelector("[data-media]"), "yPercent", { duration: 1.1, ease: "power2.out" }));
  window.addEventListener("pointermove", (e) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    xTos.forEach((fn) => fn(nx * 1.4));
    yTos.forEach((fn) => fn(ny * 1.0));
  });
}

/* ═══════════ LOADER + INTRO ═══════════ */

const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loaderBar");
const loaderPct = document.getElementById("loaderPct");
const heroCopy = copies[0].children;

gsap.set(heroCopy, { autoAlpha: 0, y: 38 });
gsap.set([topbar, dotsWrap, cue], { autoAlpha: 0 });
if (!reduced) gsap.set(topbar, { y: -16 });

function enter() {
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .to([loaderBar, loaderPct], { autoAlpha: 0, duration: 0.3 })
    .to(".loader__mark", { autoAlpha: 0, y: -22, duration: 0.5 }, "<")
    .to(loader, { yPercent: -100, duration: reduced ? 0.01 : 0.9, ease: "power4.inOut" }, "-=0.1")
    .set(loader, { display: "none" })
    .add(() => {
      ScrollTrigger.refresh();
    })
    .to(topbar, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.35")
    .to(dotsWrap, { autoAlpha: 1, duration: 0.8 }, "<")
    .to(cue, { autoAlpha: 1, duration: 0.8 }, "<")
    .to(
      heroCopy,
      { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.09, ease: "power3.out" },
      "-=0.9"
    )
    .add(() => {
      if (lenis) lenis.start();
      else document.body.style.overflow = "";
    });
}

const load = gsap.to({ v: 0 }, {
  v: 100,
  duration: reduced ? 0.3 : 2.0,
  ease: "power2.inOut",
  onUpdate() {
    const v = Math.round(this.targets()[0].v);
    loaderBar.style.transform = `scaleX(${v / 100})`;
    loaderPct.textContent = String(v).padStart(2, "0");
  },
});

Promise.all([load.then(), seqReady]).then(enter);

/* ═══════════ HOUSEKEEPING ═══════════ */

window.addEventListener("load", () => ScrollTrigger.refresh());
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
