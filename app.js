// Definición de tasas de conversión

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87 // libra esterlina
};

// Función para sumar dos números
const sum = (a, b) => {
    return a + b;
};

// // Función para convertir de euros a dólares
// function fromEuroToDollar(euroAmount) {
//     let dollarAmount = euroAmount * oneEuroIs.USD;
//     return dollarAmount;
// }

// Función para convertir de dólares a yenes
function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    let yenAmount = euroAmount * oneEuroIs.JPY;
    return yenAmount;
}

// Función para convertir de yenes a libras
function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs.JPY;
    let poundAmount = euroAmount * oneEuroIs.GBP;
    return poundAmount;
}

// Exportar todas las funciones
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
