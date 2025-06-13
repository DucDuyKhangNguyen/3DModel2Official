gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


const frameSet1 = 117;
const set1 = [];
for (let i = 1; i <= frameSet1; i++) {
  set1.push(`webp/01 (${i}).webp`);
}

const frameSet2 = 19;
const set2 = [];
for (let i = 1; i <= frameSet2; i++) {
  set2.push(`webp/01 (${i + 117}).webp`);
}

const frameSet3 = 22;
const set3 = [];
for (let i  = 1; i <= frameSet3; i++) {
  set3.push(`webp/01 (${i+136}).webp`);
}

const frameSet4 = 12;
const set4 = [];
for (let i = 1; i <= frameSet4; i++) {
  set4.push(`webp/01 (${i+158}).webp`);
}

function preloadImages(imageArray) {
  imageArray.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

preloadImages(set1); // preload the 117 images
preloadImages(set2);
preloadImages(set3);
preloadImages(set4);



const obj1 = { currentFrame: 0 };
const imgElement1 = document.getElementById("frame-sequence-1");

// Scroll-controlled animation across all 117 images (divided across your chunks)
gsap.to(obj1, {
  currentFrame: set1.length - 1,
  snap: "currentFrame",
  ease: "none",
  scrollTrigger: {
    trigger: ".b1",
    start: "top top",
    end: "+=4000", // adjust based on how long you want the scroll to last
    scrub: true,
    markers: true,
    pin: true,
  },
  onUpdate: () => {
    imgElement1.src = set1[Math.floor(obj1.currentFrame)];
  }
});

//Obj2 

const maxIndex = set2.length - 1;
const obj2 = { progress: 0 };
const imgElement2 = document.getElementById("frame-sequence-2");



gsap.to(obj2, {
  progress: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".b2",
    start: "top top",
    end: "+=1000",
    scrub: true,
    markers: true,
    pin: true,
  },
  onUpdate: () => {
    const index = Math.floor(obj2.progress * (frameSet2 - 1));
    const imageIndex = Math.floor((index / (frameSet2 - 1)) * maxIndex);
    imgElement2.src = set2[imageIndex];
  }
});

// === Obj3 ===
const maxIndex3 = set3.length - 1;
const obj3 = { progress: 0 };
const imgElement3 = document.getElementById("frame-sequence-3");

gsap.to(obj3, {
  progress: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".b3",
    start: "top top",
    end: "+=1000",
    scrub: true,
    markers: true,
    pin: true,
  },
  onUpdate: () => {
    const index = Math.floor(obj3.progress * (frameSet3 - 1));
    const imageIndex = Math.floor((index / (frameSet3 - 1)) * maxIndex3);
    imgElement3.src = set3[imageIndex];
  }
});

// === Obj4 ===
const maxIndex4 = set4.length - 1;
const obj4 = { progress: 0 };
const imgElement4 = document.getElementById("frame-sequence-4");

gsap.to(obj4, {
  progress: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".b4",
    start: "top top",
    end: "+=1000",
    scrub: true,
    markers: true,
    pin: true,
  },
  onUpdate: () => {
    const index = Math.floor(obj4.progress * (frameSet4 - 1));
    const imageIndex = Math.floor((index / (frameSet4 - 1)) * maxIndex4);
    imgElement4.src = set4[imageIndex];
  }
});
