const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'scales');

let jsonFile = [];

const fileNames = fs.readdirSync(filePath);

console.log('Read file names from folder');

fileNames.forEach(file => { 
  parseRawData(file);
}); 

function parseRawData(file) {
  // 1. Read file and store lines
  const scaleFile = [];
  const jsonString = {
    pitchValues: []
  };
  const path = `${filePath}/${file}`;

  try {
    // read contents of the file
    const data = fs.readFileSync(path, 'UTF-8');
    // split the contents by new line
    const lines = data.trim().split(/\r?\n/);
    lines.forEach((line) => {
      scaleFile.push(line)
    });
  } catch (err) {
    console.error(err);
  }

  // 2. Parse lines and form json string
  jsonString.id = scaleFile[0].replace('! ', '').replace('.scl', '').trim();
  let count = 2;

  scaleFile.forEach(el => {
    if (!el.startsWith('!')) {
      if (count === 0) {
        jsonString.pitchValues.push(el.trim());

      } else if (count === 2) {
        jsonString.title = el.trim();
        count--;
      } else if (count === 1) {
        jsonString.numberOfNotes = el.trim();
        count--;
      }
    }
  });
  jsonFile.push(jsonString);
}

console.log('Transform raw text to json');

fs.writeFileSync('./scalesData.json', JSON.stringify(jsonFile), err => {
  if (err) {
    console.log('Error writing file', err)
  } else {
    console.log('Successfully wrote file')
  }
});

console.log('Finish writing to the json file');