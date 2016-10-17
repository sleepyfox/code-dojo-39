pairs = require('./pairs')
const LINE = '\n'
const FIRST = 0
const SECOND = 1

const Animals = {
    animals: [ { name: 'horse', exclamation: "...She's dead, of course!" },
	       { name: 'cow', exclamation: "I don't know how she swallowed a cow!" },
	       { name: 'dog', exclamation: 'What a hog, to swallow a dog!' },
	       { name: 'cat', exclamation: 'Fancy that to swallow a cat!' },
	       { name: 'bird', exclamation: 'How absurd to swallow a bird.' },
	       { name: 'spider', exclamation: 'That wriggled and wiggled and tickled inside her.' },
	       { name: 'fly', exclamation: "I don't know why she swallowed a fly - perhaps she'll die!" } ],
    num_verses: function(){ return this.animals.length },
    last: function(n) {
	return this.animals.slice(this.animals.length - n, this.animals.length )
    }
}

function range(n) {
    return Array(n).fill().map((_, i) => i + 1)
}

function opening_line(animal, verse = 'middle'){
    var ending = { first: '.', middle: ';', last: '...' }
    return `There was an old lady who swallowed a ${ animal }${ ending[verse] }`
}

function internal_lines(animals){
    return pairs(animals).map((pair) => `She swallowed the ${ pair[FIRST].name } to catch the ${ pair[SECOND].name }`).join(',\n') + ";"
}

function verse(n) {
    let my_animals = Animals.last(n)
    let first_animal = my_animals[FIRST]

    let closing_line = "I don't know why she swallowed a fly - perhaps she'll die!"
    let core_lines = internal_lines(my_animals)

    if (n === 1) {
	let opening = opening_line(first_animal.name, 'first')
	return [opening, first_animal.exclamation, LINE].join(LINE)
    } else if (n === Animals.num_verses()) {
	let opening = opening_line(first_animal.name, 'last')
	return [opening, first_animal.exclamation].join(LINE)
    } else {
	let opening = opening_line(first_animal.name)
	return [opening, first_animal.exclamation, core_lines, closing_line, LINE].join(LINE)
    }
}

module.exports = function () {
    return range(Animals.num_verses()).map(n => verse(n)).join('')
}()
