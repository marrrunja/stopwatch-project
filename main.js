const miliDetik = document.getElementById("miliDetik");
const detik = document.getElementById("detik");
const menit = document.getElementById("menit");


let btnMulai = document.getElementById("mulai");
let btnStop = document.getElementById("berhenti");

let miliSecond = 0;
let second = 0;
let minute = 0;

initStopWatch();

function wrapNumber(number){
    return number < 10 ? "0" + number : number;
}

function handleInterval(){
    miliSecond++;

    if(miliSecond >= 10){
        second++;
        miliSecond = 0;
    }
    if(second >= 60){
        minute++;
        second = 0;
    }

    miliDetik.innerText = wrapNumber(miliSecond);
    detik.innerText = wrapNumber(second);
    menit.innerText = wrapNumber(minute);
}

let interval = null;

function handleClickMulai(){
    if(interval == null) {
        interval = setInterval(handleInterval, 100);        
    }
}

function initStopWatch(){
    miliDetik.innerText = wrapNumber(miliSecond);
    detik.innerText = wrapNumber(second);
    menit.innerText = wrapNumber(minute);
}

function clearStopwatch(){
    miliSecond = 0;
    second = 0;
    minute = 0;
    initStopWatch();
    
}

function handleClickStop(){
    if(interval != null){
        clearInterval(interval);
        interval = null;
        clearStopwatch();
    }
}


btnMulai.addEventListener("click", handleClickMulai);
btnStop.addEventListener("click", handleClickStop);