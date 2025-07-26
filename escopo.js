// if (1 > 0){  // { --> ABERTURA DE UM BLOCO
//     let estudante = 'Caroline'
//     console.log(estudante);
// }

// estudante = 'Ana'; // ao declararmos uma variável sem definir seu tipo, o JS automaticamente a considera um VAR
// console.log(estudante);



// --------------------------------------------------

let estudante;

if (1 > 0) {  // { --> ABERTURA DE UM BLOCO
    estudante = 'Caroline'
    console.log(estudante);
}

console.log(estudante); // node escopo.js: Caroline, Caroline. Isso porque a variável estudante foi declarada fora do bloco if, porém, pode ser alterada dentro do bloco.

// A variável LET só é utilizada quando é realmente preciso alterar algo.
// Ao alterarmos o tipo de variável de LET para CONST, o código não funcionará, pois a variável estudante foi declarada fora do bloco if e não pode ser alterada dentro dele.