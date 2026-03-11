export const speech = new (class {
  availableVoices: SpeechSynthesisVoice[] = $state([]);

  voice: SpeechSynthesisVoice | null = $state(null);
  rate = 0.8;

  setLang(lang: string) {
    this.voice =
      this.availableVoices.find(
        (voice) => voice.lang === lang && voice.name.startsWith("Google"),
      ) ?? null;
    if (import.meta.env.DEV) console.log("setLang", this.voice?.lang);
  }

  speak(letter: string | undefined) {
    if (!this.voice) return;

    const utter = new SpeechSynthesisUtterance(letter);
    utter.voice = speech.voice;
    utter.rate = this.rate;

    if (import.meta.env.DEV) console.log("speak", this.voice?.name, letter);
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
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
