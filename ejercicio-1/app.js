const { log } = require('console');
const fs = require('fs');
const path = require('path');
let dni = "";

/** Leer README */

async function contributorsWithAMistake(){
    const fileContent = await fs.promises.readFile("./hacienda.json", "utf-8");

    const parsedData = JSON.parse(fileContent);
    console.log(parsedData);
}

contributorsWithAMistake();