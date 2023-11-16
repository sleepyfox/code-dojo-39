class Musica {

    primeiroVerso(animal) {
        console.log(`There was an old lady who swallowed a ${animal};`)
    }

    segundoVerso(animal, rima) {
        console.log(`I don't know why she swallowed a ${animal} - perhaps she'll ${rima}!`)
    }
    
    terceiroVerso(animal) {
        if (animal === "spider") {
            console.log("That wriggled and wiggled and tickled inside her.")
        }

        if (animal === "bird") {
            console.log("How absurd to swallow a bird.")
        }

        if (animal === "cat") {
            console.log("Fancy that to swallow a cat!")
        }

        if (animal === "dog") {
            console.log("What a hog, to swallow a dog!")
        }

        if (animal === "cow") {
            console.log("I don't know how she swallowed a cow!")
        }

        if (animal === "horse") {
            console.log("...She's dead, of course!")
        }
    }

    quartoVerso(animalSwallowed, animalToCatch) {
        console.log(`She swallowed the ${animalSwallowed} to catch the ${animalToCatch};`)
    }

}

module.exports = Musica;
