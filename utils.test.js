it("returns 0 for an empty string", () => {
  const word = "";
  const points = pointsForWord(word);
  expect(points).toBe(0);
});

const { pointsForWord } = require("../utils");

it("returns 0 for an empty string", () => {
  const word = "";
  const points = pointsForWord(word);
  expect(points).toBe(0);
});


it("returns the correct score for a word with only consonants", () => {
  const word = "bcdfg";
  const points = pointsForWord(word);
  expect(points).toBe(10);
});

it("handles uppercase and lowercase input", () => {
  const word = "tEsT";
  const points = pointsForWord(word);
  expect(points).toBe(7);
});

