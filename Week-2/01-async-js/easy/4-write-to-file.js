const fs = require('fs');

let data = "This is a file containing a collection of book";

function readFile(){
    const p = new Promise(function(resolve){
        fs.readFile('a.txt', 'utf-8', function(err, data){
            resolve(data);
        });
    });

    return p;
}

function writeFile(){
    const p = new Promise(function(resolve){
        fs.writeFile('a.txt', data, function(err){
            resolve(data);
        })
    });
    
    return p;
}

async function fileReadWrite(){
    let v = await readFile();
    console.log(v);
    await writeFile();
    v = await readFile();
    console.log(v);
}

fileReadWrite();

let cnt = 0;
for(let i = 1; i <= 100 ; i++){
    cnt++;
}
console.log(cnt);