import type { KeyboardEventHandler } from "svelte/elements";

export function onkeydown<T extends Element>(
  callback: KeyboardEventHandler<T>,
): KeyboardEventHandler<T> {
  return (ev) => {
    const { key, ctrlKey, metaKey } = ev;

    if (
      // ignore refresh (Ctrl-r / Cmd-r)
      ((ctrlKey || metaKey) && (key === "r" || key === "R")) ||
      // use default behaviour when modifying settings
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
    if (key === " ") {
      // prevent scrolling with Space
      ev.preventDefault();
    }

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
