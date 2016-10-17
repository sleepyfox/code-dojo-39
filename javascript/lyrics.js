pairs = require('./pairs')
const LINE = '\n'
const FIRST = 0

const Animals = {
    animals: [ { name: 'horse', exclamation: '' },
	       { name: 'cow', exclamation: 'I don\'t know how she swallowed a cow!' },
	       { name: 'dog', exclamation: 'What a hog, to swallow a dog!' },
	       { name: 'cat', exclamation: 'Fancy that to swallow a cat!' },
	       { name: 'bird', exclamation: 'How absurd to swallow a bird.' },
	       { name: 'spider', exclamation: 'That wriggled and wiggled and tickled inside her.' },
	       { name: 'fly', exclamation: null } ],
    last: function(n) {
	return this.animals.slice(this.animals.length - n, this.animals.length )
    }
}

function opening_line(animal, verse = 'middle'){
    var ending = ''
    switch (verse) {
    case 'first':
	ending = '.'
	break
    case 'last':
	ending = '...'
	break
    default:
	ending = ';'
    } 
    return `There was an old lady who swallowed a ${animal}${ending}`
}

function closing_line(last_line = false){
    if (last_line){ 
	return "...She's dead, of course!"
    } else {
	return "I don't know why she swallowed a fly - perhaps she'll die!"
    }
}

function internal_lines(animals){
    return pairs(animals).map((x) => `She swallowed the ${x[0].name} to catch the ${x[1].name}`).join(',\n') + ";"
}

function verse(n) {
    const NUM_VERSES = 7
    let my_animals = Animals.last(n)
    let first_animal = my_animals[FIRST]
    let second_line = first_animal.exclamation
    let core_lines = internal_lines(my_animals)
    if (n === 1) {
	let opening = opening_line(first_animal.name, 'first')
	return [opening, closing_line(), LINE].join(LINE)
    } else if (n === NUM_VERSES) {
	let opening = opening_line(first_animal.name, 'last')
	return [opening, closing_line(true)].join(LINE)
    } else {
	let opening = opening_line(first_animal.name)
	return [opening, second_line, core_lines, closing_line(), LINE].join(LINE)
    }
}

module.exports = function () {
    const verses = 7
    function range(n) { return Array(verses).fill().map((_, i) => i + 1) }
    return range(7).map(n => verse(n)).join('')
}()
