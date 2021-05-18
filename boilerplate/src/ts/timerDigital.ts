import * as abortTimer from './abortTimer';


function render(timer: any, msg?: String): string {

    let temp: string = ``;
    if (msg) {
        temp = `<h1>${msg}</h1>`;
    } else {
        temp = `<h1>${timer.getTimeValues().minutes}:${timer.getTimeValues().seconds}</h1>`
    }
    let template: string = `
    <section id="timer-digital">
    ${temp}
    </section> <section id="timer-digital">
    <section id="abort-section">
    <button id="abort-btn">Abort timer</button>
    </section>
  
    `;

    return template;
}

export { render }