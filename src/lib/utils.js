export function setOffScreen(el) {
    var rect = el.getBoundingClientRect();
    return screen.width - rect.left + el.offsetWidth / 2;
  }