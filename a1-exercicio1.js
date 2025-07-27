//  1.

let gostoso = 'Bruno'; // variavel tipo string
let nota = '10'; // variavel tipo number
let macetava = true; // variavel tipo boolean

console.log(typeof gostoso);
console.log(typeof nota);
console.log(typeof macetava);

// --------------------------

//  2.

let nome = 'Isabela';
let sobrenome = 'de Deus';

let usuario = nome + sobrenome;

let usuario2 = `Olá, ${usuario}. Seja bem-vinda!`; 
console.log(usuario2)

// --------------------------

//  3. 

let fruta = 'banana';
let quantidade = 15;

let mensagem = `Bruno Sanches tem exatamente ${quantidade} ${fruta}s enfiadas no cu.`;
console.log(mensagem);

// --------------------------

//  4.

let minhaVariavel = 'Isabela';
console.log(minhaVariavel);

minhaVariavel = 'Bruno';
console.log(minhaVariavel); // Aqui, reatribuímos um novo valor à variável minhaVariavel, que agora é 'Bruno'.


// --------------------------

//  5.

var muie = 'Isabela';

if (1 > 0) {
    let homi = 'Bruno';
    console.log(muie, homi);
}

console.log(muie, homi); // Aqui, muie é acessível fora do bloco if, mas homi não é, pois foi declarada com let dentro do bloco if.


// --------------------------

//  6.

let chovendo = true;
if (chovendo) {
    let guardaChuva = 'Sim';
    console.log(`Está chovendo? ${guardaChuva}`);
}

// ---------------------------

//  7. (inventado por mim)

var lindo = 'Bruno'; 
let barba = true
if (barba === true) {
    let isabelaFeliz = true;
    console.log('Isabela está feliz porque seu namorado tem barba.');
} else {
    let isabelaFeliz = false;
    console.log('Isabela está triste porque seu namorado tirou a barba.');
}