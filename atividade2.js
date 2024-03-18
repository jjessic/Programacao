const nome = window.prompt('Qual é o seu nome?');
const peso = window.prompt('Qual é o seu peso?');
const altura = window.prompt('Qual é a sua altura?');
const imc = peso / altura ** 2

if (imc < 18,5) {
    console.log(`${nome}, seu nível de IMC é de: ${imc}. 
    Portanto, você está abaixo do peso.`)
}
else if (imc < 24,9) {
    console.log(`${nome}, seu nível de IMC é de: ${imc}. 
    Portanto, você está no peso ideal.`)
}
else if (imc < 29,9) {
    console.log(`${nome}, seu nível de IMC é de: ${imc}. 
    Portanto, você está com sobrepeso.`)
}
else if (imc < 34,9) {
    console.log(`${nome}, seu nível de IMC é de: ${imc}. 
    Portanto, você está com obesidade grau 1.`)
}
else if (imc < 39,9) {
    console.log(`${nome}, seu nível de IMC é de: ${imc}. 
    Portanto, você está com obesidade grau 2.`)
}
else {
    console.log(`${nome}, seu nível de IMC é de: ${imc}. 
    Portanto, você está com obesidade grau 3.`)
}





