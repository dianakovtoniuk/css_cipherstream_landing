document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = matchMedia("(prefers-reduced-motion)");
  const checkReducedMotion = () => {
    const video = document.querySelectorAll(".bg-video");
    if (mediaQuery.matches) {
      video.forEach((v) => v.pause());
    } else {
      video.forEach((v) => v.play());
    }
  };
  checkReducedMotion();
  mediaQuery.addEventListener("change", checkReducedMotion);
});
