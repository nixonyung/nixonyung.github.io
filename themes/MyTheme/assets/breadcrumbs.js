const breadcrumbsContentElm = document.getElementById("breadcrumbs-content");
const breadcrumbsPrefixElm = document.getElementById("breadcrumbs-prefix");
const breadcrumbsPostfixElm = document.getElementById("breadcrumbs-postfix");

const isLeftScrollable = () => breadcrumbsContentElm.scrollLeft > 0;
const isRightScrollable = () =>
  Math.round(
    breadcrumbsContentElm.scrollLeft + breadcrumbsContentElm.getBoundingClientRect().width,
  ) < breadcrumbsContentElm.scrollWidth;

const scrollHandler = () => {
  if (isLeftScrollable()) {
    breadcrumbsPrefixElm.classList.remove("text-transparent");
  } else {
    breadcrumbsPrefixElm.classList.add("text-transparent");
  }

  if (isRightScrollable()) {
    breadcrumbsPostfixElm.classList.remove("text-transparent");
  } else {
    breadcrumbsPostfixElm.classList.add("text-transparent");
  }
};

setTimeout(scrollHandler, 100);
breadcrumbsContentElm.addEventListener("scroll", scrollHandler);
window.addEventListener("resize", scrollHandler);
