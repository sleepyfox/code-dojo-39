pairs = require('./pairs')
const LINE = '\n'
const FIRST = 0

const Animals = {
    animals: ['horse', 'cow', 'dog', 'cat', 'bird', 'spider', 'fly'],
    last: function(n) { return this.animals.slice(this.animals.length - n, this.animals.length )}
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
    return pairs(animals).map((x) => `She swallowed the ${x[0]} to catch the ${x[1]}`).join(',\n') + ";"
}

function verse(n) {
    function delegate(n) {
	let my_animals = Animals.last(n)
	let first_animal = my_animals[FIRST]
	let opening = (n === 1) ? opening_line(first_animal, 'first') : opening_line(first_animal)
	let second_line = (n === 2) ? "That wriggled and wiggled and tickled inside her." : "How absurd to swallow a bird."
	let core_lines = internal_lines(my_animals)
	if (n === 1) {
	    return [opening, closing_line(), LINE].join(LINE)
	} else {
	    return [opening, second_line, core_lines, closing_line(), LINE].join(LINE)
	}
    }
    
    switch (n) {
    case 1: return delegate(1)
    case 2: return delegate(2)
    case 3: return delegate(3)
    case 4: {
	let second_line = "Fancy that to swallow a cat!"
	let my_animals = Animals.last(4)
	let core_lines = internal_lines(my_animals)
	return [opening_line('cat'), second_line, core_lines, closing_line(), LINE].join(LINE)
    }
    case 5: {
	let second_line = "What a hog, to swallow a dog!"
	let my_animals = Animals.last(5)
	let core_lines = internal_lines(my_animals)
	return [opening_line('dog'), second_line, core_lines, closing_line(), LINE].join(LINE)
    }
    case 6: {
	let second_line = "I don't know how she swallowed a cow!"
	let my_animals = Animals.last(6)
	let core_lines = internal_lines(my_animals)
	return [opening_line('cow'), second_line, core_lines, closing_line(), LINE].join(LINE)
    }
    default: {
	return [opening_line('horse', 'last'), closing_line(true)].join(LINE)
    }
    }
}

module.exports = function () {
    const verses = 7
    function range(n) { return Array(verses).fill().map((_, i) => i + 1) }
    return range(7).map(n => verse(n)).join('')
}()
