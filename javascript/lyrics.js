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

function closing_line(options){
    if (options && options.last){ 
	return "...She's dead, of course!"
    } else {
	return "I don't know why she swallowed a fly - perhaps she'll die!"
    }
}

function internal_lines(animals){
    return pairs(animals).map((x) => `She swallowed the ${x[0]} to catch the ${x[1]}`).join(',\n') + ";"
}

const ANIMALS = [{ name: 'fly'}]

const verse_1 = () => {
    return [opening_line('fly', 'first'), closing_line(), LINE].join(LINE)
}

const verse_2 = () => {
    let second_line = "That wriggled and wiggled and tickled inside her."
    let core_line = internal_lines(['spider', 'fly'])
    return [opening_line('spider'), second_line, core_line, closing_line(), LINE].join(LINE) 
}

const verse_3 = () => {
    let second_line = "How absurd to swallow a bird."
    let core_lines = internal_lines(['bird', 'spider', 'fly'])
    return [opening_line('bird'), second_line, core_lines, closing_line(), LINE].join(LINE)
}

const verse_4 = () => {
    let second_line = "Fancy that to swallow a cat!"
    let core_lines = internal_lines(['cat', 'bird', 'spider', 'fly'])
    return [opening_line('cat'), second_line, core_lines, closing_line(), LINE].join(LINE)
}

const verse_5 = () => {
    let second_line = "What a hog, to swallow a dog!"
    let core_lines = internal_lines(['dog', 'cat', 'bird', 'spider', 'fly'])
    return [opening_line('dog'), second_line, core_lines, closing_line(), LINE].join(LINE)
}

const verse_6 = () => {
    let second_line = "I don't know how she swallowed a cow!"
    let core_lines = internal_lines(['cow', 'dog', 'cat', 'bird', 'spider', 'fly'])
    return [opening_line('cow'), second_line, core_lines, closing_line(), LINE].join(LINE)
}

const verse_7 = () => {
    return [opening_line('horse', 'last'), closing_line({last: true})].join(LINE)
}

module.exports = verse_1() + verse_2() + verse_3() + verse_4() + verse_5() + verse_6() + verse_7()
