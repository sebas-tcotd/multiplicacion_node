const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {

    if (!Number(base)) {
        console.log('Eso que ingresaste como base no es un número ¯\\_(ツ)_/¯'.red);
        return;
    }

    console.log(`Tabla del ${base}`.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número.`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}