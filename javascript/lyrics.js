pairs = require('./pairs')
const LINE = '\n'

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

function last(arr, how_many) {
    if (arr === [] || how_many < 1) { return []}
    if (how_many > arr.length) { return arr }
    return 
}

const ANIMALS = ['horse', 'cow', 'dog', 'cat', 'bird', 'spider', 'fly']

const Animals = {
    ANIMALS: ['horse', 'cow', 'dog', 'cat', 'bird', 'spider', 'fly'],
    last: (how_many) => ANIMALS.slice(ANIMALS.length - how_many, ANIMALS.length)
}

function verse(n) {
    switch (n) {
    case 1: {
	let my_animals = Animals.last(1)
	return [opening_line(my_animals[0], 'first'), closing_line(), LINE].join(LINE)
    }
    case 2: {
	let second_line = "That wriggled and wiggled and tickled inside her."
	let my_animals = Animals.last(2)
	let core_line = internal_lines(my_animals)
	return [opening_line(my_animals[0]), second_line, core_line, closing_line(), LINE].join(LINE) 
    }
    case 3: {
	let second_line = "How absurd to swallow a bird."
	let my_animals = Animals.last(3)
	let core_lines = internal_lines(my_animals)
	return [opening_line('bird'), second_line, core_lines, closing_line(), LINE].join(LINE)
    }
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
