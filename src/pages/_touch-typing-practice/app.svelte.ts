export const app = new (class {
  DEV = import.meta.env.MODE === "development";

  // voice
  availableVoices: SpeechSynthesisVoice[] = $state([]);
  voice: SpeechSynthesisVoice | undefined = $state();
  speechSynthesisErr: SpeechSynthesisErrorEvent | undefined = $state();
  isSpeaking = $state(false);
})();

export function emitKeydown({ key, ctrlKey = false }: { key: string; ctrlKey?: boolean }) {
  dispatchEvent(
    new KeyboardEvent("keydown", {
      key,
      ctrlKey,
      bubbles: true,
    }),
  );
}

export function speak(letters: (string | undefined)[] | string | undefined) {
  if (letters === undefined || app.voice === undefined || app.isSpeaking) return false;

  if (typeof letters === "string") {
    letters = [letters];
  }

  app.isSpeaking = true;
  for (const [i, letter] of letters.entries()) {
    if (letters === undefined) continue;

    const utter = new SpeechSynthesisUtterance(letter);
    utter.voice = app.voice;
    utter.rate = 0.8;
    utter.onstart = () => {
      if (i === 0) app.isSpeaking = true;
    };
    utter.onend = () => {
      if (i === letters.length - 1) app.isSpeaking = false;
    };
    utter.onerror = (err) => {
      app.speechSynthesisErr = err;
      app.isSpeaking = false;
    };

    speechSynthesis.speak(utter);
  }

  return true;
}
