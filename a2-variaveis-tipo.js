// ----------------- AULA 2 ----------------------

// ---- TIPOS DE VÁRIAVEIS ---- 

// ----- NUMBER -----

//const notaPrimeiroBi = 8; // para que seja considerado um número, não é necessário o uso de aspas
//const notaSegundoBi = 6.3;

//const total = notaPrimeiroBi + notaSegundoBi;

//console.log(total); 


// -------------------------------

const notaPrimeiroBi = 8; // para que seja considerado um número, não é necessário o uso de aspas
const notaSegundoBi = 6.3;
const notaTerceiroBi = 2;
//const notaQuartoBi = '5'; // Aqui, a nota é uma string; portanto, será concatenada ao invés de somada. Há duas formas de resolver isso:
// 1. Converter a string para número usando Number.parseInt/Float()
// 2. Remover as aspas para que seja considerada um número

const notaQuartoBi = Number.parseInt('5')

const media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;


// ----------------------------------------------

// ---- STRING ----

