function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

export default scrollToElement;
