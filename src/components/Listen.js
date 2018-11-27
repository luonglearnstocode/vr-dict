import React from 'react';

function Listen({ language, word }) {
  const playSound = () => {
    // const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${word}&tl=${language}&client=tw-ob`;
    // console.log(url)
    // const audio = new Audio(url);
    // audio.play();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = language;
    // utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <button type="submit" onClick={playSound} className="btn-flat" title="listen">
      <i className="material-icons">volume_up</i>
    </button>
  );
}

export default Listen;
