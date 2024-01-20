const pathname_ordered = [
  "/writings/",
  "/writings/growth/",
  "/writings/growth/love/",
  "/writings/growth/love/monologue/",
  "/writings/growth/love/over/",
  "/writings/growth/love/scar/",
  "/writings/growth/love/numb/",
  "/writings/growth/sick/",
  "/writings/growth/sick/futile/",
  "/writings/growth/sick/depression/",
  "/writings/growth/complementation/",
  "/writings/growth/limit-break/",
  "/writings/growth/limit-break/self-actualization/",
  "/writings/growth/limit-break/shuhari/",
  "/writings/growth/limit-break/shuhari/art/",
  "/writings/growth/limit-break/shuhari/tools/",
  "/writings/sins/",
  "/writings/sins/virtue/",
  "/writings/sins/ignorance/",
  "/writings/sins/greed/",
  "/writings/arrogant/",
  "/writings/arrogant/solipsistic/",
  "/writings/arrogant/playful/",
  "/writings/incapable/",
];

const locale = () => {
  if (window.location.pathname.startsWith("/en")) {
    return "/en";
  }
  return "";
};

pathname_ordered.forEach((pathname, idx) => {
  // (ref.) [Get relative URL from absolute URL](https://stackoverflow.com/a/34020750)
  if (window.location.pathname.endsWith(pathname)) {
    if (idx != 0) {
      const a = document.getElementById("navigation-prev");
      a.href = locale() + pathname_ordered[idx - 1];
      a.classList.remove("hidden");
    }
    if (idx != pathname_ordered.length - 1) {
      const a = document.getElementById("navigation-next");
      a.href = locale() + pathname_ordered[idx + 1];
      a.classList.remove("hidden");
    }
  }
});
