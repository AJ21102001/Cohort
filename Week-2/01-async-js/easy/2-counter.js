let cnt = 1;

function Counter(){
    console.log(cnt);
    cnt += 1;
    setTimeout(Counter, 1 * 1000);
}

Counter();