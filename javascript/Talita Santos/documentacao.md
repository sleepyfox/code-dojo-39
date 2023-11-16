# Documentação

## Projeto "Sing a Song Kata"

### Objetivo geral
Produzir diferentes versões de uma canção utilizando a mesma estrutura, mas, tendo como base diferentes temas. A canção deve ser configurável para uma lista de diferentes animais.

### Classes do projeto

#### Classe Musica
- Responsável por compor diferentes estrofes da música, utilizando a mesma estrutura.
- Possui os métodos ``primeiroVerso``, ``segundoVerso``, ``terceiroVerso`` e `quartoVerso`:

    - O método ``primeiroVerso`` recebe o parâmetro ``animal``, e a saída no console é o primeiro verso, por exemplo:
    `"There was an old lady who swallowed a fly."`

     - O método ``segundoVerso`` recebe os parâmetros ``animal`` e ``rima``, e a saída é o segundo verso, personalizando a rima, por exemplo:
     `"I don't know why she swallowed a fly - perhaps she'll die!"`

     - O método ``terceiroVerso`` recebe o parâmetro ``animal``. Ele fará a análise do parâmetro recebido, para retornar a saída do terceiro verso, personalizando a rima, por exemplo:

        `"That wriggled and wiggled and tickled inside her."` para o parâmetro ``spider``.

     - O método ``quartoVerso`` recebe os parâmetros ``animalSwallowed`` e ``animalToCatch``para retornar a saída do quarto verso, por exemplo:
     `"She swallowed the spider to catch the fly;"`


<hr>

#### Classe Animal
- Responsável por receber e armazenar a lista de animais;
- Responsável por receber e armazenar a lista de rimas;
- Possui os métodos ``adicionarAnimais`` e ``adicionarRimas``;
- O método ``adicionarAnimais`` recebe ``animal`` como um parâmetro, para incrementar a lista de animais;
- O método ``adicionarRimas`` recebe ``rima`` como um parâmetro, para incrementar a lista de rimas;

#### Classe index
- Responsável pela simples execução de testes locais, utilizando ``console.log``.

### Comunicação entre as classes
- Como as classes se conversam entre si?
- Como o objetivo final do projeto é atingido?

### Como rodar o projeto
- Utilizar o arquivo ``index.js`` para visualizar a canção no console.

## Implementações futuras
- Fazer as classes ``Animal`` e ``Musica`` se comunicarem;
- Implementar testes usando jest.
