import { BASE_LINK } from '../constants/apiLinks';

export function playAudio(audio, audioMeaning, audioExample) {
  const arrayAudio = [];
  const AUDIO = new Audio(`${BASE_LINK}/${audio}`);
  const AUDIO1 = new Audio(`${BASE_LINK}/${audioMeaning}`);
  const AUDIO2 = new Audio(`${BASE_LINK}/${audioExample}`);
  arrayAudio.push(AUDIO, AUDIO1, AUDIO2);
  let i = 0;
  function playSnd() {
    if (i === arrayAudio.length) return;
    arrayAudio[i].addEventListener('ended', playSnd);
    arrayAudio[i].play();
    i++;
  }
  playSnd();
}
