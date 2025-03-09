const locale = () => {
  if (window.location.pathname.startsWith("/en")) {
    return "/en";
  }
  return "";
};

const prevLinkElm = document.getElementById("navigation-prev");
const nextLinkElm = document.getElementById("navigation-next");

// (ref.) [Get relative URL from absolute URL](https://stackoverflow.com/a/34020750)
const idx = pathnames_ordered.findIndex((pathname) => window.location.pathname.endsWith(pathname));
if (idx !== -1) {
  if (idx !== 0) {
    prevLinkElm.href = locale() + pathnames_ordered[idx - 1];
    prevLinkElm.classList.remove("hidden");
  }
  if (idx !== pathnames_ordered.length - 1) {
    nextLinkElm.href = locale() + pathnames_ordered[idx + 1];
    nextLinkElm.classList.remove("hidden");
  }
}
// (ref.) [Detecting arrow key presses in JavaScript](https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript)
document.addEventListener("keydown", (ev) => {
  switch (ev.key) {
    case "ArrowLeft":
      prevLinkElm.click();
      break;
    case "ArrowRight":
      nextLinkElm.click();
      break;
    default:
      break;
  }
});
