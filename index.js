import analyzer from './analyzer.js';

// variables geenrales: 

// TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// --------------------WORD COUNT: SELECTORES/EVENTOS DOM--------------------
// ---FROM ANALYZER TO INDEX 
const textAreaInp = document.querySelector("textarea");
// function para acceder a los valores
function textArea(textAreaInp) {
  const inputText = textAreaInp.value;
  const resultTextArea = analyzer.getWordCount(inputText);
  return resultTextArea;  //console.log(resultTextArea);
}
// escuchar textAreaInp, y luego keyup para poder ponerlo a
textAreaInp.addEventListener('keyup', () => {
  textArea(textAreaInp); //escucho a mi const
})
// ---FROM INDEX TO DISPLAY 
const wordCountIt = document.querySelector('[data-testid="word-count"]');

textAreaInp.addEventListener('keyup', () => {
  actualizarMetricas(textAreaInp, wordCountIt);
});

function actualizarMetricas(textAreaInp, listItem) {
  const inputText = textAreaInp.value;
  const wordCount = analyzer.getWordCount(inputText);
  listItem.textContent = `Palabras: ${wordCount}`;
}
// --------------------------------------------------------------------------------

// --------------------CHARACTER COUNT: SELECTORES/EVENTOS DOM--------------------
// ---FROM ANALYZER TO INDEX 
const textLengthInp = document.querySelector("textarea");
// function para acceder a los valores
function textLength(textLengthInp) {
  const lengthText = textLengthInp.value;
  const resultCharacterCount = analyzer.getCharacterCount(lengthText);
  return resultCharacterCount; //console.log(resultCharacterCount);
}
textAreaInp.addEventListener('keyup', () => {
  textLength(textLengthInp);//escucho a mi const
});
// ---FROM INDEX TO DISPLAY 
const textLengthIt = document.querySelector('[data-testid="character-count"]');

function actualizarMetricasCharacter(textAreaInp, listItem) {
  const lengthText = textAreaInp.value;
  const characterCount = analyzer.getCharacterCount(lengthText);
  listItem.textContent = `Carácteres: ${characterCount}`;
}

textAreaInp.addEventListener('keyup', () => {
  actualizarMetricasCharacter(textAreaInp, textLengthIt);
})
// --------------------------------------------------------------------------------

// --------------------CHARACTER EXCLUDING SPACES: SELECTORES/EVENTOS DOM----------
// ---FROM ANALYZER TO INDEX
// VARIABLE DE NOMBRE getTextArea que obtiene el valor de la etiqueta textArea EN EL DOCUMENTO
const charCoExSpaces = document.querySelector("textarea");    // const charCoExSpaces = getTextArea.value;
// function para acceder a los valores
function countWithoutSpaces(charCoExSpaces) {
  const WithoSpace = charCoExSpaces.value;
  const resultCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(WithoSpace);
  return resultCharacterCountExcludingSpaces; // ya no usar console.log(resultCharacterCountExcludingSpaces); porque me sale warning:(

}
textAreaInp.addEventListener('keyup', () => {
  countWithoutSpaces(charCoExSpaces);//escucho a mi const
});
// ---FROM INDEX TO DISPLAY
const textcharCoExSpaces = document.querySelector('[data-testid="character-no-spaces-count"]');

function actualizarCharacterCountExcludingSpaces(textAreaInp, listItem) {
  const WithoSpace = textAreaInp.value;
  const ExcludingSpace = analyzer.getCharacterCountExcludingSpaces(WithoSpace);
  listItem.textContent = `Carácteres sin espacio: ${ExcludingSpace}`;
}

textAreaInp.addEventListener('keyup', () => {
  actualizarCharacterCountExcludingSpaces(textAreaInp, textcharCoExSpaces);
})
// --------------------------------------------------------------------------------

// --------------------NUMBER COUNT: SELECTORES/EVENTOS DOM----------
// ---FROM ANALYZER TO INDEX
const numberCountLength = document.querySelector("textarea");
// function para acceder a los valores
function countNumbers(numberCountLength) {
  const numberCo = numberCountLength.value;
  const resultNumberCount = analyzer.getNumberCount(numberCo);
  return resultNumberCount; //console.log(resultNumberCount);
}
textAreaInp.addEventListener('keyup', () => {
  countNumbers(numberCountLength); //escucho a mi const
})
// ---FROM INDEX TO DISPLAY
const cuentaNumbers = document.querySelector('[data-testid="number-count"]');

function actualizarNumberCount(textAreaInp, listItem) {
  const numbersCuenta = textAreaInp.value;
  const numerosContados = analyzer.getNumberCount(numbersCuenta);
  listItem.textContent = `Números: ${numerosContados} `;
}

textAreaInp.addEventListener('keyup', () => {
  actualizarNumberCount(textAreaInp, cuentaNumbers);
})

// --------------------------------------------------------------------------------

// --------------------AVERAGE WORD LENGTH: SELECTORES/EVENTOS DOM-----------------
// ---FROM ANALYZER TO INDEX
const wordAverageLength = document.querySelector("textarea")
// function para acceder a los valores
function averageWordLength(wordAverageLength) {
  const average = wordAverageLength.value;
  const resultAverageWordLength = analyzer.getAverageWordLength(average);
  return resultAverageWordLength.toFixed(2);  //console.log(resultAverageWordLength.toFixed(2));
} //escucho a mi const y ajusto la cantidad de números decimales que traeré a mi <li>
textAreaInp.addEventListener('keyup', () => {
  averageWordLength(wordAverageLength);
})
// ---FROM INDEX TO DISPLAY
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');

function actualizarAverageWordLength(textAreaInp, listItem) {
  const averageWord = textAreaInp.value;
  const averageLengthWord = analyzer.getAverageWordLength(averageWord);
  listItem.textContent = `Promedio longitud: ${
    averageLengthWord//.toFixed(2)
  }`;
}
textAreaInp.addEventListener('keyup', () => {
  actualizarAverageWordLength(textAreaInp, wordLengthAverage);
})

// --------------------------------------------------------------------------------

// --------------------NUMBER SUM: SELECTORES/EVENTOS DOM--------------------------
// ---FROM ANALYZER TO INDEX
const numberSumTextArea = document.querySelector("textarea");
// function para acceder a los valores
function sumOfNumbers(numberSumTextArea) {
  const sum = numberSumTextArea.value;
  const resultNumberSum = analyzer.getNumberSum(sum);
  return resultNumberSum; //escucho a mi const  //console.log(resultNumberSum);
}
textAreaInp.addEventListener('keyup', () => {
  sumOfNumbers(numberSumTextArea);
})
// ---FROM INDEX TO DISPLAY
// const textAreaSumNumbers = document.querySelector('li[data-testid="number-sum"]'); -- 13:25 08/09/23
const textAreaSumNumbers = document.querySelector('[data-testid="number-sum"]');

function actualizarSumNumber(textAreaInp, listItem) {
  const sumNumbers = textAreaInp.value;
  const sumTotalNumbers = analyzer.getNumberSum(sumNumbers);
  // listItem.textContent = sumTotalNumbers;
  listItem.textContent = `Suma de números: ${sumTotalNumbers}`;
}

textAreaInp.addEventListener('keyup', () => {
  actualizarSumNumber(textAreaInp, textAreaSumNumbers);
})

// --------------------------------------------------------------------------------

// --------------------BUTTON RESET: SELECTORES/EVENTOS DOM------------------------
const button = document.getElementById("reset-button");
//const me indica que debo añadir los valores al siguiente <li>
const wordCountIt0 = document.querySelector('[data-testid="word-count"]');
const textLengthIt0 = document.querySelector('[data-testid="character-count"]');
const textcharCoExSpaces0 = document.querySelector('[data-testid="character-no-spaces-count"]');
const cuentaNumbers0 = document.querySelector('[data-testid="number-count"]');
const textAreaSumNumbers0 = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage0 = document.querySelector('[data-testid="word-length-average"]');

// function para resetear valores
function resetValues(){
  const valueZero = 0;  // Constante para definir el valorReset
  wordCountIt0.textContent = `Palabras: ${valueZero}`;
  textLengthIt0.textContent = `Carácteres: ${valueZero}`;
  textcharCoExSpaces0.textContent = `Carácteres sin espacio: ${valueZero}`;
  cuentaNumbers0.textContent = `Números: ${valueZero}`;
  textAreaSumNumbers0.textContent = `Suma de números: ${valueZero}`;
  wordLengthAverage0.textContent = `Promedio longitud: ${valueZero}`;
}
//
button.addEventListener('click',resetValues);

//console.log('haechan mi flaco');
