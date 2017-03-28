var firstAnimal = 'fly';
export const TheEnd = `There was an old lady who swallowed a Unicorn...
...She's dead, of course!`;
export class Song {

  constructor(animals) {
    this.animals = animals || ['Fly', 'Spider', 'Bird', 'Cat', 'Dog', 'Cow', 'Horse'];
  }

  sing(otherAnimal) {
    if (this.animals.length === 0) {
      return TheEnd;
    }

    this.animals[0] = otherAnimal;

    var song = `There was an old lady who swallowed a ${this.animals[0]}.
I don't know why she swallowed a ${this.animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${this.animals[1]};
That wriggled and wiggled and tickled inside her.
She swallowed the ${this.animals[1]} to catch the ${this.animals[0]};
I don't know why she swallowed a ${this.animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${this.animals[2]};
How absurd to swallow a ${this.animals[2]}.
She swallowed the ${this.animals[2]} to catch the ${this.animals[1]},
She swallowed the ${this.animals[1]} to catch the ${this.animals[0]};
I don't know why she swallowed a ${this.animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${this.animals[3]};
Fancy that to swallow a ${this.animals[3]}!
She swallowed the ${this.animals[3]} to catch the ${this.animals[2]},
She swallowed the ${this.animals[2]} to catch the ${this.animals[1]},
She swallowed the ${this.animals[1]} to catch the ${this.animals[0]};
I don't know why she swallowed a ${this.animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${this.animals[4]};
What a hog, to swallow a ${this.animals[4]}!
She swallowed the ${this.animals[4]} to catch the ${this.animals[3]},
She swallowed the ${this.animals[3]} to catch the ${this.animals[2]},
She swallowed the ${this.animals[2]} to catch the ${this.animals[1]},
She swallowed the ${this.animals[1]} to catch the ${this.animals[0]};
I don't know why she swallowed a ${this.animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${this.animals[5]};
I don't know how she swallowed a ${this.animals[5]}!
She swallowed the ${this.animals[5]} to catch the ${this.animals[4]},
She swallowed the ${this.animals[4]} to catch the ${this.animals[3]},
She swallowed the ${this.animals[3]} to catch the ${this.animals[2]},
She swallowed the ${this.animals[2]} to catch the ${this.animals[1]},
She swallowed the ${this.animals[1]} to catch the ${this.animals[0]};
I don't know why she swallowed a ${this.animals[0]} - perhaps she'll die!

There was an old lady who swallowed a Unicorn...
...She's dead, of course!`

    return song;
  }
}
