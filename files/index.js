console.error("Hello Wrorld");  

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);        
    }
}

fileOps();

// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'new.txt'), 'Nice', (err, data) => {
//     if (err) throw err;
//     console.log("data written successfully");
// })
 
// console.log('This is a test file');