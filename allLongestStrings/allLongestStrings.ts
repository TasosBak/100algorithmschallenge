function allLongestStrings(inputArray: string[]): string[] {
  let biggestLength = 0;

  inputArray.forEach(
    (item) =>
      (biggestLength =
        biggestLength > item.length ? biggestLength : item.length)
  );

  return inputArray.filter((item) => item.length === biggestLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
