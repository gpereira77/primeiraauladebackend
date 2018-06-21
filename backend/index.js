
/*npm init -- DENTRO DA PASTA DO PROJETO
npm install express
REST = JSON - FEITO // SOAP = XML - FEITO// OQ É MODELO DE API */


// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello word');
// });

// app.listen(3000);


const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        sabor: 'Leite',
        cobertura: 'caramelo',
        prato: 'redondo'
        
    });
});

app.listen(3000);