import { playAudioGame } from '../../utils/audio';

const ANSWERS_PER_QUESTION = 5;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function GetRound(obj) {
  const answers = [];
  const indQuest = getRandomInt(0, obj.length);
  const quest = obj[indQuest];
  playAudioGame(quest.audio);
  while (answers.length < ANSWERS_PER_QUESTION - 1) {
    const anotherWordInd = getRandomInt(0, obj.length);
    if (anotherWordInd !== indQuest) {
      answers.push([obj[anotherWordInd], false]);
    }
  }
  answers.push([quest, true]);
  answers.sort(() => Math.random() - 0.5);
  return answers;
}
