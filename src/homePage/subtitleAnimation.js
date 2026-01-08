export function subtitleAnimation() {
  let subTitle = document.querySelector(".sub-title");

  if (!subTitle) return;

  const subTitleText = "Decoded & Crafted";

  function repeatAnimation() {
    subTitle.textContent = "";
    [...subTitleText].forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${2 + i * 0.18}s`;
      subTitle.appendChild(span);
    });

    setTimeout(() => {
      repeatAnimation();
    }, 7000);
  }

  repeatAnimation();
}
