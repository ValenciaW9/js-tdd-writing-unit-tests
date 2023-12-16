it("handles uppercase and lowercase input", () => {
  const word = "tEsT";

  const points = pointsForWord(word);

  expect(points).toBe(7);
});