import { pointsForWord } from "./path/to/pointsForWord.js";

export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}