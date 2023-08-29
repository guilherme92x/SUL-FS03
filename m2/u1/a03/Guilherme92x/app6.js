// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7. 

let sexo = 'M'
let altura = 1.6

if( sexo == 'M'){
    let res = (72.7 * altura) - 58
    console.log(res.toFixed(2))
}
else if( sexo == 'F'){
    let res = (61.1 * altura) - 44.7
    console.log(res.toFixed(2))
}
else{
    console.log('O sexo informado não existe em nossa base de cadastros!')
}