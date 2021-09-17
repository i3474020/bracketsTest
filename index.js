export default function bracketsTest(str) {
  const pile = [];
  const openers = ["(", "{", "["];
  const closers = [")", "}", "]"];

  for (let i = 0; i <= str.length - 1; i++) {
    const char = str[i];
    if (openers.includes(char)) {
      pile.push(closers[openers.indexOf(char)]);
    } else if (char === pile[pile.length - 1]) {
      pile.pop();
    } else if (closers.includes(char)) {
      return false;
    }
  }
  return pile.length === 0;
}
