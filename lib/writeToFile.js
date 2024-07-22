const fs = require('fs');

function writeToFile(filename, data) {
    fs.writeFile('./examples/logo.xml', data, (err) => err ? console.log(err) :
    console.log(`logo.xml file created in the 'examples' directory.`));
}

module.exports = {
    writeToFile
};  