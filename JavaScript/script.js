// Valores dos atributos
let valorForca = document.getElementById("valorForca");
let valorDestreza = document.getElementById("valorDestreza");
// ... outras variáveis para os valores de atributos

// Dado de 20 lados
let d20Forca = document.getElementById("d20Forca");
let d20Destreza = document.getElementById("d20Destreza");
// ... outras variáveis para os dados de 20 lados

// MOD dos de cada atributo
let modForca = document.getElementById("modForca");
let modDestreza = document.getElementById("modDestreza");
// ... outras variáveis para os MODs dos atributos

// Totais dos atributos
let totalForca = document.getElementById("totalForca");
let totalDestreza = document.getElementById("totalDestreza");
// ... outras variáveis para os totais dos atributos

// Eventos de click dos botões
let botaoCalcular = document.getElementById("calcular");
let botaoDado = document.getElementById("dado");
let botaoResetar = document.getElementById("resetar");

botaoCalcular.addEventListener("click", calcular);
botaoDado.addEventListener("click", rolarDados);

// funções dos botões
function rolarDados() {
    // variável local para armazenar os números aleatórios gerados na função para os dados de cada atributo
    let numerosD20 = numerosAleatorios();

    d20Forca.value = numerosD20[0];
    d20Destreza.value = numerosD20[1];
    // ... atribuir os valores dos dados para os outros atributos
}

// função para gerar números aleatórios entre 1 e 20 para os dados de cada atributo
function numerosAleatorios() {
    let numerosAleatorios = []; // array para armazenar os números aleatórios

    // Gerar 6 números aleatórios entre 1 e 20: o "i" representa o índice do array, que vai de 0 a 5 (total de 6 atributos)
    for (let i = 0; i < 6; i++) {
        // Math.random() gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusive). Multiplicando por 20, obtemos um número entre 0 (inclusive) e 20 (exclusive).
        numerosAleatorios[i] = Math.floor(Math.random() * 20) + 1;
        // A função Math.floor() arredonda o número para baixo, garantindo que obtenhamos um número inteiro entre 1 e 20.
    }
    // retorna o array com os números aleatórios gerados para os dados de cada atributo
    return numerosAleatorios;
}