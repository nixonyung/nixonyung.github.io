const locale = () => {
  if (window.location.pathname.startsWith("/en")) {
    return "/en";
  }
  return "";
};

pathnames_ordered.forEach((pathname, idx) => {
  // (ref.) [Get relative URL from absolute URL](https://stackoverflow.com/a/34020750)
  if (window.location.pathname.endsWith(pathname)) {
    if (idx != 0) {
      const a = document.getElementById("navigation-prev");
      a.href = locale() + pathnames_ordered[idx - 1];
      a.classList.remove("hidden");
    }
    if (idx != pathnames_ordered.length - 1) {
      const a = document.getElementById("navigation-next");
      a.href = locale() + pathnames_ordered[idx + 1];
      a.classList.remove("hidden");
    }
  }
});
