

function render(timer: any, msg?: String): string {

    let temp: string = ``;
    if (msg) {
        temp = `<h1>${msg}</h1>`;
    } else {
        temp = `<h1>${timer.getTimeValues().minutes}:${timer.getTimeValues().seconds}</h1>`
    }
    let template: string = `
    <section id="timer-digital class="show">
    ${temp}
    </section> 
   
    <section id="abort-section">
    <button id="abort-btn">Abort timer</button>
    </section>

    <section id="start-section">
    <button id="start-btn">START TIMER</button>
    </section>
  
    `;

    return template;
}

export { render }