let cnt = 1;

function Counter(){
    console.log(cnt);
    cnt += 1;
}

setInterval(Counter, 1 * 1000);