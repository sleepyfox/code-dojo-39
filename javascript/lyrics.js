const verse_1 = () => {
    let first_line = "There was an old lady who swallowed a fly.\n"
    let second_line = "I don't know why she swallowed a fly - perhaps she'll die!\n\n"
    return first_line + second_line
}

const verse_2 = () => {
    let first_line = "There was an old lady who swallowed a spider;\n"
    let second_line = "That wriggled and wiggled and tickled inside her.\n"
    let third_line = "She swallowed the spider to catch the fly;\n"
    let fourth_line = "I don't know why she swallowed a fly - Perhaps she'll die!\n\n"
    return first_line + second_line + third_line + fourth_line 
}

const verse_3 = () => {
    let first_line = "There was an old lady who swallowed a bird;\n"
    let second_line = "How absurd to swallow a bird.\n"
    let third_line = "She swallowed the bird to catch the spider,\n"
    let fourth_line = "She swallowed the spider to catch the fly;\n"
    let fifth_line = "I don't know why she swallowed a fly - Perhaps she'll die!\n\n"
    return first_line + second_line + third_line + fourth_line + fifth_line
}

const verse_4 = () => {
    let first_line = "There was an old lady who swallowed a cat;\n"
    let second_line = "Fancy that to swallow a cat!\n"
    let third_line = "She swallowed the cat to catch the bird,\n"
    let fourth_line = "She swallowed the bird to catch the spider,\n"
    let fifth_line = "She swallowed the spider to catch the fly;\n"
    let sixth_line = "I don't know why she swallowed a fly - Perhaps she'll die!\n\n"
    return first_line + second_line + third_line + fourth_line + fifth_line + sixth_line
}

const verse_5 = () => {
    let first_line = "There was an old lady who swallowed a dog;\n"
    let second_line = "What a hog, to swallow a dog!\n"
    let third_line = "She swallowed the dog to catch the cat,\n"
    let fourth_line = "She swallowed the cat to catch the bird,\n"
    let fifth_line = "She swallowed the bird to catch the spider,\n"
    let sixth_line = "She swallowed the spider to catch the fly;\n"
    let seventh_line = "I don't know why she swallowed a fly - Perhaps she'll die!\n\n"
    return first_line + second_line + third_line + fourth_line + fifth_line + sixth_line + seventh_line
}

const verse_6 = () => {
    let first_line = "There was an old lady who swallowed a cow;\n"
    let second_line = "I don't know how she swallowed a cow!\n"
    let third_line = "She swallowed the cow to catch the dog,\n"
    let fourth_line = "She swallowed the dog to catch the cat,\n"
    let fifth_line = "She swallowed the cat to catch the bird,\n"
    let sixth_line = "She swallowed the bird to catch the spider,\n"
    let seventh_line = "She swallowed the spider to catch the fly;\n"
    let eighth_line = "I don't know why she swallowed a fly - Perhaps she'll die!\n\n"
    return first_line + second_line + third_line + fourth_line + fifth_line + sixth_line + seventh_line + eighth_line
}

const verse_7 = () => {
    let first_line = "There was an old lady who swallowed a horse...\n"
    let second_line = "...She's dead, of course!"
    return first_line + second_line
}

module.exports = verse_1() + verse_2() + verse_3() + verse_4() + verse_5() + verse_6() + verse_7()
