const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'string',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                demandOption: true,
                describe: 'Muestra la tabla en consola'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Este es el número hasta donde quieres la tabla'
            })
            .check( (argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .argv;

//De esta manera exportamos una variable en este caso argv
module.exports = argv;