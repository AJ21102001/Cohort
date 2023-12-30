const fs = require('fs');

// function onDone(data){
//     console.log(data);
// }

function readFile(){
    const p = new Promise(function(resolve){
        fs.readFile('a.txt', 'utf-8', function(err, data){
            resolve(data);
        });
    });

    return p;
}

// fs.readFile('a.txt', 'utf-8', function(err, data){
//     console.log(data);
// });

async function fileRead(){
    const v = await readFile();
    console.log(v);
    console.log('I am Here');
}

fileRead();

let cnt = 0;
for(let i = 1; i <= 10000000 ; i++){
    cnt++;
}
console.log(cnt);