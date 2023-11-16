const Musica = require ("./Musica");

const musica = new Musica();

musica.primeiroVerso("fly");
musica.segundoVerso("fly", "die");

console.log("\n")

musica.primeiroVerso("spider");
musica.terceiroVerso("spider");
musica.quartoVerso("spider", "fly");
musica.segundoVerso("fly", "die");

console.log("\n")

musica.primeiroVerso("bird");
musica.terceiroVerso("bird");
musica.quartoVerso("bird", "spider");
musica.quartoVerso("spider", "fly");
musica.segundoVerso("fly", "die");

console.log("\n")

musica.primeiroVerso("cat");
musica.terceiroVerso("cat");
musica.quartoVerso("cat", "bird");
musica.quartoVerso("bird", "spider");
musica.quartoVerso("spider", "fly");
musica.segundoVerso("fly", "die");

console.log("\n")

musica.primeiroVerso("dog");
musica.terceiroVerso("dog");
musica.quartoVerso("dog", "cat");
musica.quartoVerso("cat", "bird");
musica.quartoVerso("bird", "spider");
musica.quartoVerso("spider", "fly");
musica.segundoVerso("fly", "die");

console.log("\n")

musica.primeiroVerso("cow");
musica.terceiroVerso("cow");
musica.quartoVerso("cow", "dog");
musica.quartoVerso("dog", "cat");
musica.quartoVerso("cat", "bird");
musica.quartoVerso("bird", "spider");
musica.quartoVerso("spider", "fly");
musica.segundoVerso("fly", "die");

console.log("\n")

musica.primeiroVerso("horse");
musica.terceiroVerso("horse");