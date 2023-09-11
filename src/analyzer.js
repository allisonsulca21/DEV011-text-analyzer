const analyzer = {
  getWordCount: (text) => {
    // TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // text: es el parametro que se ingresa y split (corta nuestro string y transforma nuestro array con strings ind.)
    const textArray = text.split(" ");
    const lengthArray = textArray.length;

    return lengthArray;
  },

  getCharacterCount: (text) => { 
    // TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterLength = text.length;

    return characterLength;
  },

  getCharacterCountExcludingSpaces: (text) => { // TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //const cleanText = text.trim(); // se utiliza para eliminar espacios tendo delante como detrás de nuestro texto
    //const spacesBetweenText = /(?:^|\s)(\d+\.\d+|\d+)(?=|\s)/g;
    //const result= text.match(spacesBetweenText);
    const cleanExludingSpaces = text.replace(/[^a-zA-Z0-9]/g, '');
    //console.log("texto1:",text);
    //const cleanExludingSpaces = cleanText.replace(/[^\w\s]/g, ""); // Usar una expresión regular para puntos, comas, epacios (dentro de mi array)
    const textCharacterLength = cleanExludingSpaces.length; // Contar los carácteres
    //console.log("texto2 ExcudingSpaces:", textCharacterLength);
    //return result;
    return textCharacterLength;
  },

  getAverageWordLength: (text) => { 
    // TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`. 
    const splitMyText = text.split(" "); // separar mi texto
    const filterMyText = splitMyText.filter(Boolean);
    let wordAverageSum = 0;

    for (let i = 0; i < filterMyText.length; i++) {
      const wordAverLength =filterMyText[i].length;
      wordAverageSum = wordAverageSum + wordAverLength;
    }
    const averageLength = Number((wordAverageSum / filterMyText.length).toFixed(2));
    //console.log(averageLength);
    return averageLength;
  }, 
    
    //primer code
    //const wordSeparation = text.split(/\s+/); // Dividir las palabras del texto con expresión regular
    //let wordLengthSum = 0; // Iniciemos la suma de longitudes con el valor 0 (This variable is likely used to store the length or count of words in the program.)
    //for (const words of wordSeparation) { // (For) Iterar palabras y sumar sus longitudes
    //wordLengthSum += words.length; // Es una forma abreviada de escribir wordLengthSum = wordLengthSum + words.length;
    //console.log(wordLengthSum + "wordLengthSum");
    
    //}
    //if (wordSeparation.length > 0) { // Calculamos la long. media diviendo la suma x el nro de palabras
    //const wordAverageLength = wordLengthSum / wordSeparation.length; // Diviión en js: /.
    //const roundedAverage = Math.round(wordAverageLength * 100)/ 100;
    //console.log("resultado1", roundedAverage);
    //return roundedAverage;
    //} else {
    //return 0;
    //} 

  getNumberCount: (text) => {
    // TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // ESTA FUNCIÓN AYUDA A CONTAR NÚMEROS PERO SOLO CUANDO TIENEN ESPACIO DE POR MEDIO, MIENTRAS TANTO NO:(
    //const numbersMatches = text.match(/\d+\.\d+|\d+/g); // ya encontré la manera si hago esto: (/\d+/g) ahí me cuenta por strings pero sin el + cuenta cada uno así sea 34 o 678 por dígito.
    const numbersMatches = text.match(/[-+]?\b\d+(\.\d+)?\b/g); //const numbersMatches = text.match(/\b\d+(\.\d+)?\b/g); 13:35 08/09/23
    //console.log(numbersMatches);
    if (numbersMatches) {
      const textToNumber = numbersMatches.map((match) => parseFloat(match)).filter((match) => !isNaN(parseFloat(match))); // usamos el método map para poder convertir nuestro string tipo gtext to number con parseFloat
      //console.log("respuesta:", textToNumber); //.filter((numberwithletters) => !isNaN (numberwithletters))
      return textToNumber !== undefined? textToNumber.length: 0;// ?? ayuda a encadenar !== undefined? textToNumber.length: 0;
    } else {
      return 0;
    }
    // PERO ESTA OTRA FUNCIÓN AYUDA A CONTAR NÚMEROS COMO '34' AÚN SEAN CON ESPACIO DE POR MEDIO O NO, ME CONTARÁ 2 DIGÍTOS
    // const digits = text.split('').filter(characterExSp => /\d/.test(characterExSp));
    // return digits.length;
  },

  getNumberSum: (text) => { 
    // TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const textFilter = text.split(" ").filter(Boolean);
    //const textFilter = text.filter(Boolean);
    let numberSum = 0;  //Asignamos un valor 0 inicial a nuestra suma
    
    for (let i = 0; i < textFilter.length; i++) {
      if (!isNaN(textFilter[i])) {
        numberSum = numberSum + Number(textFilter[i]);  //numberSum = numberSum + Number.parseFloat(textFilter[i]);
      }
    }
    return numberSum;
  }
};  
    //const numberSum = text.match(/\d+/g);
    //const numberSum = text.match(/\d/g);
    //let suma = 0;
    //if (numberSum){
    //for (let numbers of numberSum) {
    //suma += parseFloat(numbers);
    //suma += parseInt(numbers,10);
    //}
    //}
    //return suma;
  //},

export default analyzer;
