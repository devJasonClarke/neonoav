const tl = gsap.timeline();

function loading() {
 tl.to("body", {
    overflowY: "hidden",
  }); 
  tl.from(".loading-dot", {
    duration: 1,
    y: -50,
    ease: "bounce.out",
    stagger: 0.2,
    repeat: "-1",
  });

  tl.from(".overlay", {
    duration: 2,
    x: "-100%",
    ease: "Power2.easeOut",
    stagger: 1,
    repeat: "-1",
  });
}

loading();

window.addEventListener("load", () => {
  // Removes an element from the document
  tl.to(".loading-screen", {
    duration: 0.5,
    opacity: 0,
  });
  tl.to(".loading-screen", {
    onComplete: reveal(),
  });
});

function reveal() {
 tl.to("body", {
    overflowY: "scroll",
  }); 
  tl.to(".loading-screen", {
    display: "none",
  });

  tl.from("#logo", {
    duration: 1,
    opacity: 0,
    y: -60,
    ease: Circ.easeOut,
  });

  tl.from(
    ".nav-links",
    {
      duration: 1,
      opacity: 0,
      y: -60,
      ease: Circ.easeOut,
      stagger: 0.2,
    },
    "-=.5"
  );

  tl.from(
    ".header-text",
    {
      duration: 1,
      opacity: 0,
      x: -150,
      ease: Power1.easeOut,
    },
    "-=.7"
  );

  tl.from(
    ".header-img",
    {
      duration: 1,
      opacity: 0,
      x: 150,
      ease: Power1.easeOut,
      onComplete: function () {
        tl.kill();
      },
    },
    "-=1"
  );
}
