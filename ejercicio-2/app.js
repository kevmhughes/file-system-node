const fs = require("fs");

// creates file paths
function getFilePaths() {
  const folder = fs.readdirSync("./files");
  folder.forEach((i) => {
    const filePath = i;
    readAllContents(filePath);
  });
}

// gets the contents of the files and dates
function readAllContents(filePath) {
  const fileData = fs.readFileSync(`./files/${filePath}`, "utf-8");
  const date =
    filePath.split("_")[0].slice(0, 1) + " de " + filePath.split("_")[0].slice(1);
  const fileDataArrays = fileData.split("\n");
  dataArraysByLine = fileDataArrays.forEach((i) => {
    const dataArraysByLine = i.split(",");
    sendMessage(dataArraysByLine, date);
  });
}

// creates the message and the report
function sendMessage(dataArraysByLine, date) {
  const name = dataArraysByLine[0];
  const minutes = dataArraysByLine[2];
  const message =
    name + " ha asistido durante " + minutes + " minutes" + " el " + date + "\n";

  fs.appendFileSync("informe.txt", message);
}

getFilePaths();
