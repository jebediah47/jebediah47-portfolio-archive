export function scrollToComponent(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) {
    return console.error(`Could not find element with name: ${elementId}`);
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}
