function updateClock(){
    const date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    /*24hr Clock*/
    const time24 = `${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    console.log(time24);

    /*12hr Clock*/
    let ampm = (hr >= 12) ? 'PM' : 'AM';
    hr = hr % 12;
    hr = hr ? hr : 12;
    const time12 = `${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')} ${ampm}`;
    console.log(time12);
}

setInterval(updateClock, 1 * 1000);