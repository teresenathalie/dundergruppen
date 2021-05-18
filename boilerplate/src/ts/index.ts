import { Timer } from 'easytimer.js';
import * as timerDigital from './timerDigital';


let timer: Timer = new Timer();

// On click start timer
timer.start({countdown: true, startValues: {seconds: 600}})

let appEl: any = document.querySelector('#app');

timer.on('secondsUpdated', () => {
    appEl.innerHTML = '';
    appEl.insertAdjacentHTML('beforeend', timerDigital.render(timer));
})

timer.on('targetAchieved', () => {
    appEl.innerHTML = '';
    appEl.insertAdjacentHTML('beforeend', timerDigital.render(timer, 'TIMES UP!'));
})

