// import default from modules
import { Song, TheEnd } from '../src/song';

const getParagraph = (value, index) => {
  return value.split(/\r\n\r\n|\r\r|\n\n/)[index - 1];
}

// Write ES6 mocha tests with Chai assertions
describe('Song', () => {
  it('should not be empty', () => {
    const song = new Song();
    expect(song.sing()).to.not.equal('');
  });
  it('should mention a fly somewhere if we do not replace the animal', () => {
    const song = new Song();
    expect(song.sing()).to.not.equal('');
  });

  it('should replace the fly with another animal', () => {
    const song = new Song();
    const result = song.sing('Monkey');
    expect(result).to.contain('Monkey');
  });

  it('should accept up to 6 animals', () => {
    var animals = [
      'Monkey', 'Giraffe', 'Pinguin', 'Turtle', 'Lion', 'Whale'
    ];
    const song = new Song(animals);
    const result = song.sing();
    animals.forEach(function (element) {
      expect(result).to.contain(element);
    }, this);
  });

  it('should die because of the Unicorn if there\'s no animal', () => {
    var animals = [];
    const song = new Song(animals);
    const result = song.sing();
    expect(result).to.endsWith(TheEnd);
  });

  it('should display that the old lady maybe died because of the animal, and in the end died because of the unicorn', () => {
    var animals = ['Monkey'];
    const song = new Song(animals);

    const result = song.sing();

    expect(result).to.startsWith(`There was an old lady who swallowed a ${animals[0]}.
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!`);
    expect(result).to.endsWith(TheEnd);
  });

  it('should have 3 paragraphs with 2 animals', () => {
    var animals = ['PedoBear', 'NyanCat'];
    const song = new Song(animals);
    const result = song.sing();

    expect(result).to.startsWith(`There was an old lady who swallowed a ${animals[0]}.
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!`);
    var secondParagraph = getParagraph(result, 2)
    expect(secondParagraph).to.equal(generate(animals))
    expect(result).to.endsWith(TheEnd);
  });

  const generate = (animals) => {
    var factorialLines = `She swallowed the ${animals[1]} to catch the ${animals[0]};`

    return `There was an old lady who swallowed a ${animals[1]};
That wriggled and wiggled and tickled inside her.
${factorialLines}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!`;

  }
});
