function render(timer: any, msg?: String ) :string {

    let temp:string = `Timer är slut`;
    if(msg) {
     temp = `<h1>${msg}</h1>`;
    } else {
     temp = `<h1>${timer.getTimeValues().minutes}:${timer.getTimeValues().seconds}</h1>`
    }
    let template:string = `
    <section id="timer-digital">
        ${temp}
    </section>
    `;

    return template;
}

export { render }