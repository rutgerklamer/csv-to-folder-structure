const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('FILE_NAME');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    let lineString = line;
    lineString = lineString.split(";");
    let folder = lineString[0];
    let number = lineString[1];
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
    fs.writeFile(folder + "/" + filename + '.info', line, function(){});
    console.log(line);
  }
}

processLineByLine();
