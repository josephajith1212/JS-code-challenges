const displayTime = document.getElementById('clock');

function runClock(){
    return setInterval(() => {
        displayTime.innerText = new Date().toLocaleTimeString();
    },1000)
}

runClock()