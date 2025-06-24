document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
});

function initAnimations() {
  const pdcTimeline = gsap.timeline();
  pdcTimeline
    .from(".hero-title", {
      duration: 1.2,
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
      "-=0.8" //start this animation 0.8 seconds after the previous one finishes
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
    .from(
      ".main-watch-image",
      {
        duration: 1.5,
        scale: 0.9,
        opacity: 0,
        ease: "power3.out",
      },
      "-=1"
    );
  // Navigation animation
  gsap.from(".nav", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
  });

  // Watch image continuous rotation
  gsap.from(".hero", {
    duration: 1.5,
    scale: 0.95,
    opacity: 0,
    ease: "power3.out",
  });
  // Navigation animation
  const sections = [".ethos"];
  sections.forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 150%",
        markers: true,
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 5,
      y: 100,
      opacity: 0,
      ease: "power2.out",
      delay: index * 0.1,
    });
  });
}
