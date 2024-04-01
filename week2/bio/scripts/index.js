// wish i was using typescript :sob:

/**
 * @type {HTMLAnchorElement[]}
 */
const anchors = Array.from(document.querySelectorAll(".nav-anchor"));

/**
 * @param {MouseEvent} e
 */
const onClick = (e) => {
  e.preventDefault();

  /**
   * @type {HTMLAnchorElement}
   */
  const anchor = e.currentTarget;
  const index = anchors.indexOf(anchor);
  const sections = document.querySelectorAll(".section");

  for (const section of sections) {
    section.classList.add("hide");
  }

  sections[index].classList.remove("hide");
};

for (const anchor of anchors) {
  anchor.addEventListener("click", onClick);
}
