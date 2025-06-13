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

const frameSet2 = 16;
const set2 = [];
for (let i = 1; i <= frameSet2; i++) {
  set2.push(`webp/01 (${i + 117}).webp`);
}

function preloadImages(imageArray) {
  imageArray.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

preloadImages(set1); // preload the 117 images
preloadImages(set2);


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
    end: "+=2000", // adjust based on how long you want the scroll to last
    scrub: true,
    markers: true,
    pin: true,
  },
  onUpdate: () => {
    imgElement1.src = set1[Math.floor(obj1.currentFrame)];
  }
});

//Obj2 
const obj2 = {currentFrame : 0};
const imgElement2 = document.getElementById("frame-sequence-2");
const setStatus = false;

gsap.set(imgElement2, { autoAlpha: 0 }); // hide initially


const playSet2 = gsap.to(obj2, {
  currentFrame: frameSet2 - 1,
  duration: 1, // adjust duration for playback speed
  ease: "none",
  paused: true,
  onUpdate: () => {
    imgElement2.src = set2[Math.round(obj2.currentFrame)];
  },

});
ScrollTrigger.create({
  trigger: ".b2 img",
  start: "top top+=50%",
  end: "bottom +=50%",
  onEnter: () => {
    gsap.to(imgElement2, { autoAlpha: 1, duration: 0.5 });
    playSet2.play(); // play forward
    
    
    console.log("ENTER")
    },
  
  onEnterBack: () => {
    gsap.to(imgElement2, { autoAlpha: 1, duration: 0.5 });
    playSet2.reverse(); // play in reverse when scrolling back up
    console.log("ENTERBACK")
  },
  onLeave: () => {
    gsap.to(imgElement2, { autoAlpha: 0, duration: 0.5 });
    console.log("LEAVE")
  },
  onLeaveBack: () => {
    gsap.to(imgElement2, { autoAlpha: 0, duration: 0.5 });
    console.log("LEAVEBACK")
    playSet2.reverse();
    
  }
  
});