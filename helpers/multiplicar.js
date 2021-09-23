const fs = require('fs');

const colors =require('colors');

const crearArchivo = async (base = 5, listar, hasta) => {

    try{

        let salida = `=====================
TABLA DEL ${base}
=====================
`;
        let consola = `=====================
TABLA DEL ${base}
=====================
`;

        for(var i = 1; i <= hasta; i++){
            consola += `${base} ${'x'.red} ${i} ${'='.green} ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        if(listar) console.log(salida.green);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}
