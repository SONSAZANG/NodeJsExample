const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입려됩니다', (err) => {
    if (err) {
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data.toString());
    })
})