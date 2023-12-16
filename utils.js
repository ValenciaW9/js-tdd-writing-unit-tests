export function pointsForWord(word) {
  let points = 0;
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "");
  for (const char of cleanedWord) {
    if (/[ae]/i.test(char)) {
      points += 1;
    } else {
      points += 2;
    }
  }
  return points;
}