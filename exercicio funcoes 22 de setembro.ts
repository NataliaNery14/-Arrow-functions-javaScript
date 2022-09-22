import promptSync = require ('prompt-sync')
const prompt = promptSync();

const imc = (peso: number, altura:number) =>{
    return peso / Math.pow(altura,2);
}

const peso = number(prompt('Digite seu peso: '));
const altura = number(prompt('Digite sua altura: '));

console.log ('O seu IMC é: ${imc}');
