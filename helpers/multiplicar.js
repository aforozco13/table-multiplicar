const fs = require('fs');


const crearArchivo = async( base=0 , listar=false , hasta ) => {

    try {
        let salida = '';

        for(let i = 0; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        if(listar){              
           
            console.log('===============');
            console.log(`Tabla del ${ base }`);
            console.log('==============='); 
            console.log(salida) ;

        }
        // fs.writeFileSync( 'tabla-5.txt', salida, (err) => {
        //     if ( err ) throw err;
        //     console.log('tabla-5.txt creada');
        // } )

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}