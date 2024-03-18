const nome = window.prompt('Qual é o seu nome?');
const peso = window.prompt('Qual é o seu peso?');
const altura = window.prompt('Qual é a sua altura?');
const imc = peso / altura ** 2

if (imc < 18,5) {
    window.alert(`${nome}, seu nível de IMC é de: ${imc.toFixed(1)}. 
    Portanto, você está abaixo do peso.`)
}
else if (imc < 25) {
    window.alert(`${nome}, seu nível de IMC é de: ${imc.toFixed(1)}. 
    Portanto, você está no peso ideal.`)
}
else if (imc < 30) {
    window.alert(`${nome}, seu nível de IMC é de: ${imc.toFixed(1)}. 
    Portanto, você está com sobrepeso.`)
}
else if (imc < 35) {
    window.alert(`${nome}, seu nível de IMC é de: ${imc.toFixed(1)}. 
    Portanto, você está com obesidade grau 1.`)
}
else if (imc < 40) {
    window.alert(`${nome}, seu nível de IMC é de: ${imc.toFixed(1)}. 
    Portanto, você está com obesidade grau 2.`)
}
else {
    window.alert(`${nome}, seu nível de IMC é de: ${imc.toFixed(1)}. 
    Portanto, você está com obesidade grau 3.`)
}