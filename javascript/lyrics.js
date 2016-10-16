const LINE = '\n'

function opening_line(animal){
    return `There was an old lady who swallowed a ${animal}`
}

const verse_1 = () => {
    let closing_line = "I don't know why she swallowed a fly - perhaps she'll die!"
    return [opening_line('fly.'), closing_line, LINE].join(LINE)
}

const verse_2 = () => {
    let second_line = "That wriggled and wiggled and tickled inside her."
    let third_line = "She swallowed the spider to catch the fly;"
    let closing_line = "I don't know why she swallowed a fly - Perhaps she'll die!"
    return [opening_line('spider;'), second_line, third_line, closing_line, LINE].join(LINE) 
}

const verse_3 = () => {
    let second_line = "How absurd to swallow a bird."
    let third_line = "She swallowed the bird to catch the spider,"
    let fourth_line = "She swallowed the spider to catch the fly;"
    let closing_line = "I don't know why she swallowed a fly - Perhaps she'll die!"
    return [opening_line('bird;'), second_line, third_line, fourth_line, closing_line, LINE].join(LINE)
}

const verse_4 = () => {
    let second_line = "Fancy that to swallow a cat!"
    let third_line = "She swallowed the cat to catch the bird,"
    let fourth_line = "She swallowed the bird to catch the spider,"
    let fifth_line = "She swallowed the spider to catch the fly;"
    let closing_line = "I don't know why she swallowed a fly - Perhaps she'll die!"
    return [opening_line('cat;'), second_line, third_line, fourth_line, fifth_line, closing_line, LINE].join(LINE)
}

const verse_5 = () => {
    let second_line = "What a hog, to swallow a dog!"
    let third_line = "She swallowed the dog to catch the cat,"
    let fourth_line = "She swallowed the cat to catch the bird,"
    let fifth_line = "She swallowed the bird to catch the spider,"
    let sixth_line = "She swallowed the spider to catch the fly;"
    let closing_line = "I don't know why she swallowed a fly - Perhaps she'll die!"
    return [opening_line('dog;'), second_line, third_line, fourth_line, fifth_line, sixth_line, closing_line, LINE].join(LINE)
}

const verse_6 = () => {
    let second_line = "I don't know how she swallowed a cow!"
    let third_line = "She swallowed the cow to catch the dog,"
    let fourth_line = "She swallowed the dog to catch the cat,"
    let fifth_line = "She swallowed the cat to catch the bird,"
    let sixth_line = "She swallowed the bird to catch the spider,"
    let seventh_line = "She swallowed the spider to catch the fly;"
    let closing_line = "I don't know why she swallowed a fly - Perhaps she'll die!"
    return [opening_line('cow;'), second_line, third_line, fourth_line, fifth_line, sixth_line, seventh_line, closing_line, LINE].join(LINE)
}

const verse_7 = () => {
    let closing_line = "...She's dead, of course!"
    return [opening_line('horse...'), closing_line].join(LINE)
}

module.exports = verse_1() + verse_2() + verse_3() + verse_4() + verse_5() + verse_6() + verse_7()
