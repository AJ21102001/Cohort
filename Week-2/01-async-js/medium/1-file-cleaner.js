const fs = require('fs');

function readFile(){
    const p = new Promise(function(resolve){
        fs.readFile('a.txt', 'utf-8', function(err, data){
            resolve(data);
        });
    });

    return p;
}

function writeFile(data){
    const p = new Promise(function(resolve){
        fs.writeFile('a.txt', data, function(err){
            resolve(data);
        })
    });
    
    return p;
}

async function fileReadWrite(){
    const s = await readFile();
    const newS = s.replace(/\s+/g, ' ');
    await writeFile(newS);
    v = await readFile();
    console.log(v);
}

fileReadWrite();