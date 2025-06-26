document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
});


function initAnimations() {
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
  
  function preloadImages(imageArray) {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  
  preloadImages(set1); // preload the 117 images
  const obj1 = { currentFrame: 0 };
  const imgElement1 = document.getElementById("frame-sequence-1");

  const landingPage = gsap.timeline();
  landingPage
    .from(".hero-title", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    })
    .from(".hero-bg", {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: "power2.out"
    })
    .from(".nav-container", {
      duration: 0.8,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    })
    .from(
      ".subtitle-line",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.8" 
    )
    .from(
      ".hero-description",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.4"
    )
    // Navigation animation
    gsap.from(".nav", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
    });
  

  // const sections = [".ethos", "ethoss"];
  //   sections.forEach((section, index) => {
  //     gsap.from(section, {
  //       scrollTrigger: {
  //         trigger: section,
  //         markers:true,
  //         start: 'top 85%',
  //         end: 'bottom 10%',
  //         toggleActions: 'play none none reverse'
  //       },
  //       duration: 1,
  //       y: 100,
  //       opacity: 0,
  //       ease: 'power2.out',
  //       delay: index * 0.1
  //     })
  //   })
    const t1 = gsap.timeline( {
      scrollTrigger: {
        trigger: "#app",
        start: "top top",
        end: "+=4000",
        marker: true,
        scrub: true,
      }
    })

      // Scroll-controlled animation across all 117 images (divided across your chunks)
    gsap.to(obj1, {
      currentFrame: set1.length - 1,
      snap: "currentFrame",
      ease: "none",
      scrollTrigger: {
        trigger: ".b1",
        start: "top top",
        end: "+=2000", // how long it takes to scrub through all images
        scrub: true,
        pin: true,
        markers: true,
        onUpdate: (self) => {
          const current = Math.floor(obj1.currentFrame);
          imgElement1.src = set1[current];
          console.log("obj1.currentFrame");
        },
      },
    });


}
