const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo(argv.b, argv['l'], argv['hasta'])
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado.'))
    .catch(err => console.log(err));
