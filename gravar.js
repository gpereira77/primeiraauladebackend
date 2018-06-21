// const fs = require('fs');
// let texto = 'estou gravando';

// fs.writeFile('teste.txt', texto, (error) =>{
//     if(error){
//         console.log('houve um erro');

//     }
//     else{
//         console.log('gravei');
//     }
// });

// console.log('ja mandei');

const fs = require('fs');
let texto = process.argv[2];

fs.writeFile('teste.txt', texto, (error) =>{
    if(error){
        console.log('houve um erro');

    }
    else{
        console.log('gravei');
    }
});

console.log('ja mandei');