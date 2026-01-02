export const speech = new (class {
  availableVoices: SpeechSynthesisVoice[] = $state([]);

  voice: SpeechSynthesisVoice | undefined = $state();
  isSpeaking = $state(false);
  err: SpeechSynthesisErrorEvent | undefined = $state();

  speak(letters: (string | undefined)[] | string | undefined) {
    if (letters === undefined || speech.voice === undefined || speech.isSpeaking) return false;

    if (typeof letters === "string") {
      letters = [letters];
    }

    speech.isSpeaking = true;
    for (const [i, letter] of letters.entries()) {
      if (letters === undefined) continue;

      const utter = new SpeechSynthesisUtterance(letter);
      utter.voice = speech.voice;
      utter.rate = 0.8;
      utter.onstart = () => {
        if (i === 0) speech.isSpeaking = true;
      };
      utter.onend = () => {
        if (i === letters.length - 1) speech.isSpeaking = false;
      };
      utter.onerror = (err) => {
        speech.err = err;
        speech.isSpeaking = false;
      };

      speechSynthesis.speak(utter);
    }

    return true;
  }
})();

$effect.root(() => {
  speechSynthesis.addEventListener("voiceschanged", () => {
    speech.availableVoices = speechSynthesis.getVoices();

    if (import.meta.env.DEV) {
      console.log(
        "voices",
        speech.availableVoices.map(({ lang, name }) => `(${lang}) ${name}`),
      );
    }
  });
});
