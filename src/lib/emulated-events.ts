export function emitKeydown({ key, ctrlKey = false }: { key: string; ctrlKey?: boolean }) {
  dispatchEvent(
    new KeyboardEvent("keydown", {
      key,
      ctrlKey,
      bubbles: true,
    }),
  );
}
