let timer = document.getElementById('timer');
const startStopButton = document.getElementById('startStopBtn');
const reset = document.getElementById('reset');

let second = 0;
let minute = 0;
let hour = 0;
let millSec = 0;

function stopWatch() {
    millSec++
    if (millSec / 100 === 1) {
        second++;
        millSec = 0
    }
    if (second / 60 === 1) {
        minute++;
        second = 0
    }
    if (minute / 60 === 1) {
        hour++;
        minute = 0
    }
    timer.innerHTML = `${hour < 10 ? "0" : ''}${hour}:${minute < 10 ? "0" : ''}${minute}:${second < 10 ? "0" : ''}${second}:${millSec < 10 ? "0" : ''}${millSec}`
}

let set;
function startStopwatch() {
    if (set) {
        clearInterval(set);
        set = null;
        startStopButton.innerHTML = "start";

    } else {
        set = setInterval(stopWatch, 1)
        startStopButton.innerHTML = "stop";
    }
}

function resetStopwatch() {
    second = 0;
    minute = 0;
    hour = 0;
    millSec = 0
    timer.innerHTML = "00:00:00:00";
}
startStopButton.addEventListener('click', startStopwatch);
reset.addEventListener('click', resetStopwatch);




























