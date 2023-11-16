class Animal {
    animais = [];
    rimas = []

    adicionarAnimais(animal) {
        this.animais.push(animal);
        console.log(`${animal} adicionado`);
    }

    adicionarRimas(rima) {
        this.rimas.push(rima);
        console.log(`${rima} adicionado`);
    }
}

module.exports = Animal;
