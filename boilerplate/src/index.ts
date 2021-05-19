import { Timer } from 'easytimer.js';
import * as Ticking from './modules/Ticking';

let timer: Timer = new Timer();

// On click start timer
timer.start({countdown: true, startValues: {seconds: 5}})

let appEl: any = document.querySelector('#app');

timer.on('secondsUpdated', () => {
    appEl.innerHTML = '';
    appEl.insertAdjacentHTML('beforeend', Ticking.render(timer));
})

timer.on('targetAchieved', () => {
    appEl.innerHTML = 'Times up';
    appEl.insertAdjacentHTML('beforeend', Ticking.render(timer));
})
