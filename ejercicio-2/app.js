const fs = require("fs");

const filesArr = [];

// iterates through the files folder and pushes file name to filesArr
const folderPath = "./files";
fs.readdir(folderPath, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      filesArr.push(file);
    });
  }

  for (let i = 0; i < filesArr.length; i++) {
    // reads file with dynamic relative path
    const fileContent = fs.readFileSync(`./files/${filesArr[i]}`, "utf-8");

    // orders file content by line into an array
    const getDataArr = fileContent.split("\n");

    const getSpecificDataArr = [];
    
    // creates date - taken from file name 
    const date =
      filesArr[i].split("_")[0].slice(0, 1) +
      " " +
      filesArr[i].split("_")[0].slice(1);

    // creates an array of arrays to facilitate access to data
    getDataArr.forEach((i) => {
      getSpecificDataArr.push(i.split(","));
    });

    for (let i = 0; i < getSpecificDataArr.length; i++) {
      if (
        // removes teacher and empty array indices
        getSpecificDataArr[i].length > 1 &&
        getSpecificDataArr[i][3] == "Sí"
      ) {
        // creates message to be sent
        const message = `${getSpecificDataArr[i][0]} asistió durante un total de ${getSpecificDataArr[i][2]} minutos el ${date}\n`;
        
        // appends message to file
        fs.appendFile("informe.txt", message, (err) => {
          if (err) {
            console.log("Ha ocurrido un error: ", err);
          } else {
            console.log("Fichero guardado con éxito.");
          }
        });
      }
    }
  }
});
