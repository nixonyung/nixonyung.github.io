import type { KeyboardEventHandler } from "svelte/elements";

export function onkeydown<T extends Element>(
  callback: KeyboardEventHandler<T>,
): KeyboardEventHandler<T> {
  return (ev) => {
    const { key, ctrlKey, metaKey } = ev;

    if (
      // ignore refresh (Ctrl-r / Cmd-r), copy and paste (Ctrl-c/v / Cmd-c/v)
      ((ctrlKey || metaKey) &&
        (key === "r" || key === "R" || key === "c" || key === "C" || key === "v" || key === "V")) ||
      // use default behaviour in input elements
      document.activeElement instanceof HTMLInputElement
    ) {
      return;
    }

    if (import.meta.env.DEV) {
      console.log("onInput", key, "ctrl", ctrlKey);
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    if (
      // prevent scrolling with Space
      key === " " ||
      // prevent pressing Tab to navigate elements
      key === "Tab"
    )
      ev.preventDefault();

    callback(ev);
  };
}

export function emitKeydown({ key, ctrlKey = false }: { key: string; ctrlKey?: boolean }) {
  dispatchEvent(
    new KeyboardEvent("keydown", {
      key,
      ctrlKey,
      bubbles: true,
    }),
  );
}
