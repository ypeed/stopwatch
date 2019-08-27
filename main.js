let countMili = 0;
let countSec = 0;
let countMin = 0;
let running = false;

let countMiliLap = 0;
let countMinLap = 0;
let countSecLap = 0;
let counter = 1;

let minute = document.getElementById('minute');
let second = document.getElementById('second');
let milisecond = document.getElementById('milisecond');

let timer = document.getElementById('timer');
let start_stop = document.getElementById('start');
let lap_reset = document.getElementById('stop');
let loopMilli;
let list = document.getElementById('laps-list');

start_stop.addEventListener('click', () => {
    if(!running){
        running = true;
        lap_reset.style.display = "inline-block";
        lap_reset.innerHTML = 'lap';
        start_stop.innerHTML = 'stop';
        start_stop.style.marginRight = "100px";
        loopMilli = setInterval(count, 10);
    }else{
        start_stop.innerHTML = 'resume';
        lap_reset.innerHTML = 'reset';
        clearInterval(loopMilli);
        running = false;
    }
});
lap_reset.addEventListener('click', () => {
    if(running){
        let li = document.createElement('li');
        li.className = 'list-item';
        if(counter < 10) counter = '0'+counter;
        if(countMili < 100){
            if(countSec < 10){
                if(countMin < 10 ){
                    countMiliLap = '0' + countMili/10;
                    countSecLap = '0' + countSec;
                    countMinLap = '0' + countMin;
                }else{
                    countMiliLap = '0' + countMili / 10;
                    countSecLap = '0' + countSec;
                    countMinLap = countMin;
                }
            }else{
                if (countMin < 10) {
                    countMiliLap = '0' + countMili / 10;
                    countSecLap = countSec;
                    countMinLap = '0' + countMin;
                } else {
                    countMiliLap = '0' + countMili / 10;
                    countSecLap = countSec;
                    countMinLap = countMin;
                }
            }
        }else{
            if (countSec < 10) {
                if (countMin < 10) {
                    countMiliLap = countMili / 10;
                    countSecLap = '0' + countSec;
                    countMinLap = '0' + countMin;
                } else {
                    countMiliLap = countMili / 10;
                    countSecLap = '0' + countSec;
                    countMinLap = countMin;
                }
            } else {
                if (countMin < 10) {
                    countMiliLap = countMili / 10;
                    countSecLap = countSec;
                    countMinLap = '0' + countMin;
                } else {
                    countMiliLap = countMili / 10;
                    countSecLap = countSec;
                    countMinLap = countMin;
                }
            }
        }
        let css_item = `<div class="first">
                            <span id="counter">${counter}.</span>
                        </div>
                        <div class="second">
                            <span id="lap-minute">${countMinLap}</span>
                            <span>:</span>
                            <span id="lap-second">${countSecLap}</span>
                            <span>.</span>
                            <span id="lap-milisecond">${countMiliLap}</span>
                        </div>`;

        li.innerHTML = css_item;
        list.appendChild(li);
        let scroll = document.getElementsByClassName("laps");
        scroll[0].scrollTop = scroll[0].scrollHeight;
        counter++;
    }else{
        milisecond.innerHTML = '00';
        second.innerHTML = '00';
        minute.innerHTML = '00';
        countMili = 0;
        countSec = 0;
        countMin = 0;
        countMiliLap = 0;
        countMinLap = 0;
        countSecLap = 0;
        start_stop.innerHTML = 'start';
        start_stop.style.marginRight = "0px";
        lap_reset.style.display = "none";
        list.innerHTML = '';
        counter = 1;
        clearInterval(loopMilli);
    }
});

function count(){
    countMili += 10;
    if(running){
        if(countMili != 1000){
            if(countMili < 100)   
                milisecond.innerHTML = "0" + countMili / 10;
            else
                milisecond.innerHTML = countMili / 10;
        }else{
            countMili = 0;
            countSec++;
            if(countSec != 60){
                if(countSec < 10)   
                    second.innerHTML = "0" + countSec;
                else 
                    second.innerHTML = countSec;
            }else{
                countMin++;
                if(countMin < 10)   
                    minute.innerHTML = "0" + countMin;
                else
                    minute.innerHTML = countMin;
                countSec = 0;
                second.innerHTML = "00";
            }
        }
    }
}


 






