const fs = require('fs');
const path = require('path');
let dni = "98765432C";

const contentHacienda = JSON.parse(fs.readFileSync("./hacienda.json", "utf-8"))

let found = false;
let i = 0;

while(!found && i < contentHacienda.length){
    found = contentHacienda[i].dni == dni && contentHacienda[i].notificacionesPendientes
    if (found) {
        /* console.log(contentHacienda[i].nombre) */
        const message = `El/la contribuyente ${contentHacienda[i].nombre} tiene notificaciones pendientes. Se enviara un mail a ${contentHacienda[i].email}.\n`
        /* console.log(message) */

        fs.appendFile("resultado.txt", message, (err) => {
            if (err) {
                console.log("Ha ocurrido un error: ", err);
            } else {
                console.log("Fichero guardado con éxito.")
            }
        })
    }
    i++

}
