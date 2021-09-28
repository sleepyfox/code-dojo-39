export function getStrophe1(): string {
  return `
  ${getFirstParagraph("fly", false)}
  ${getLastParagraph()}`;
}
export function getStrophe2(): string {
  return `
  ${getFirstParagraph("spider")}
  That wriggled and wiggled and tickled inside her.
  ${getMainParagraph("spider", "fly", false)}
  ${getLastParagraph()}`;
}
export function getStrophe3(): string {
  return `
  ${getFirstParagraph("bird")}
  How absurd to swallow a bird.
  ${getMainParagraph("bird", "spider")}
  ${getMainParagraph("spider", "fly", false)}
  ${getLastParagraph()}`;
}
export function getStrophe4(): string {
  return `
  ${getFirstParagraph("cat")}
  Fancy that to swallow a cat!
  ${getMainParagraph("cat", "bird")}
  ${getMainParagraph("bird", "spider")}
  ${getMainParagraph("spider", "fly", false)}
  ${getLastParagraph()}`;
}
export function getStrophe5(): string {
  return `
  ${getFirstParagraph("dog")}
  What a hog, to swallow a dog!
  ${getMainParagraph("dog", "cat")}
  ${getMainParagraph("cat", "bird")}
  ${getMainParagraph("bird", "spider")}
  ${getMainParagraph("spider", "fly", false)}
  ${getLastParagraph()}`;
}
export function getStrophe6(): string {
  return `
  ${getFirstParagraph("cow")}
  I don't know how she swallowed a cow!
  ${getMainParagraph("cow", "dog")}
  ${getMainParagraph("dog", "cat")}
  ${getMainParagraph("cat", "bird")}
  ${getMainParagraph("bird", "spider")}
  ${getMainParagraph("spider", "fly", false)}
  ${getLastParagraph()}`;
}

export function getStrophe7(): string {
  return `
  ${getFirstParagraph("horse", false)}..
  ...She's dead, of course!`;
}

function getLastParagraph(): string {
  return `I don't know why she swallowed a fly - perhaps she'll die!`;
}

function getMainParagraph(
  whoWasSwallowed: string,
  whoToCatch: string,
  isEndingWithComma: boolean = true
): string {
  const endingChar = getEndingCharForMainParagraph(isEndingWithComma);

  return `She swallowed the ${whoWasSwallowed} to catch the ${whoToCatch}${endingChar}`;
}

function getFirstParagraph(
  whoWasSwallowed: string,
  isEndingWithSemicolon: boolean = true
): string {
  const endingChar = getEndingCharForFirstParagraph(isEndingWithSemicolon);

  return `There was an old lady who swallowed a ${whoWasSwallowed}${endingChar}`;
}

function getEndingCharForFirstParagraph(isEndingWithSemicolon?: boolean) {
  if (isEndingWithSemicolon) {
    return ";";
  }

  return ".";
}

function getEndingCharForMainParagraph(isEndingWithComma?: boolean) {
  if (isEndingWithComma) {
    return ",";
  }

  return ";";
}
