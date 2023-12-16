export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}
it("handles uppercase and lowercase input", () => {
  const word = "tEsT";

  const points = pointsForWord(word);

  expect(points).toBe(7);
});