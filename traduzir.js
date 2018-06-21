// let dicionario = {
//     'letargia' : 'Estado de sono profundo',
//     'comitar' : 'comer e vomitar'
// };

// let palavra = process.argv[2];
// let traducao = dicionario[palavra];

// if(traducao == undefined){
//     console.log('Sem palavra');
// }
// else{
//     console.log(traducao);
// }

const dicionario = require('./dicionario.json')
let palavra = process.argv[2];
let traducao = dicionario[palavra];

if(traducao == undefined){
    console.log('Sem palavra');
}
else{
    console.log(traducao);
}