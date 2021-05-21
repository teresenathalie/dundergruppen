// //circle start
let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let background = document.getElementById('six');
let length = Math.PI * 2 * 100;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
  var offset = - length - length * value / (timePercent);
  progressBar.style.strokeDashoffset = offset; 
  pointer.style.transform = `rotate(${-360 * value / (timePercent)}deg)`; 
  background.style.transform = `rotatex(${180 * value / (timePercent)}deg)`; 
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time')
const pauseBtn = document.getElementById('pause');
const setterBtns = document.querySelectorAll('button[data-setter]');


let intervalTimer;
let timeLeft;
let wholeTime = 0.5 * 20; // manage this to set the whole time 
let isPaused = false;
let isStarted = false;



  


update(wholeTime,wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);

function changeWholeTime(seconds){
  if ((wholeTime + seconds) > 0){
    wholeTime += seconds;
    update(wholeTime,wholeTime);
  } 
}

for (var i = 0; i < setterBtns.length; i++) {
    setterBtns[i].addEventListener("click", function(event) {
        var param = this.dataset.setter;
        switch (param) {
            case 'minutes-plus':
                changeWholeTime(1 * 60);
                break;
            case 'minutes-minus':
                changeWholeTime(-1 * 60);
                break;
            case 'seconds-plus':
                changeWholeTime(1);
                break;
            case 'seconds-minus':
                changeWholeTime(-1);
                break;
        }
      displayTimeLeft(wholeTime);
    });
}

function timer (seconds){ //counts time, takes seconds
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);
  
  intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft < 0){
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function(btn){
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      document.getElementById('alarm').style.display= 'block';
      document.getElementById('two').style.display= 'none';
      document.getElementById('tre').style.display= 'none';
      document.getElementById('four').style.display= 'none';
      document.getElementById('five').style.display= 'none';
      document.getElementById('six').style.display= 'none';
      document.getElementById('controlls').style.display= 'none';
      document.getElementById("ljud").play();

      displayTimeLeft(wholeTime);
      pauseBtn.classList.remove('pause');
      pauseBtn.classList.add('play');
      return ;
     
    }
    displayTimeLeft(timeLeft);
    
  }, 1000);
  
}

function pauseTimer(event){
  if(isStarted === false){
    timer(wholeTime);
    isStarted = true;
    this.classList.remove('play');
    this.classList.add('pause');
    
    setterBtns.forEach(function(btn){
      btn.disabled = true;
      btn.style.opacity = 0.5;
    });

  }else if(isPaused){
    this.classList.remove('play');
    this.classList.add('pause');
    timer(timeLeft);
    isPaused = isPaused ? false : true
  }else{
    this.classList.remove('pause');
    this.classList.add('play');
    clearInterval(intervalTimer);
    isPaused = isPaused ? false : true ;
  }
}

function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}
pauseBtn.addEventListener('click',pauseTimer);

let sidebar = false;
function showSidebar (){
  return !sidebar;
}
// meny show and close 
  document.getElementById("meny").style.display = "none";
function openMeny() {
  // document.getElementById("sidebar").style.display = "block";
  document.getElementById("meny").style.display = "block";
  
}

function closeMeny() {
  document.getElementById("sidebar").style.display = "none";
}

//from page4 till home(loading)
 document.getElementById("home").addEventListener('click', ()=>{
  document.getElementById('four').style.display= 'none';
  document.getElementById('one').style.display= 'block';
  location.reload()
})
//from page5 till home(loading)
document.getElementById("loading2").addEventListener('click', ()=>{
  document.getElementById('five').style.display= 'none';
  document.getElementById('one').style.display= 'block';
  location.reload()
})
//from page6 till home(loading)
document.getElementById("loading3").addEventListener('click', ()=>{
  document.getElementById('six').style.display= 'none';
  document.getElementById('one').style.display= 'block';
  location.reload()
})

//Show page two (sitTimer)
 document.getElementById('img').addEventListener('click', ()=>{
 document.getElementById('one').style.display= 'none';
 document.getElementById('two').style.display= 'block';
 document.getElementById('controlls').style.display= 'block';
})

//Show page tree(menu)
  document.querySelector('.interval').addEventListener('click', ()=>{
  document.getElementById('two').style.display= 'none';
  document.getElementById('tre').style.display= 'block';
  document.getElementById('inp').style.display= 'none';
  document.getElementById('controlls').style.display= 'none';
  document.getElementById('five').style.display= 'block';
 })

//Show page four(tiditalTimer)
document.querySelector('.digital').addEventListener('click', ()=>{
  document.getElementById('tre').style.display= 'none';
  document.getElementById('four').style.display= 'block';
  document.getElementById('controlls').style.display= 'block';
  document.getElementById('five').style.display= 'none';
})

//Show page five(visualTimer)
document.querySelector('.visual').addEventListener('click', ()=>{
  document.getElementById('tre').style.display= 'none';
  document.getElementById('five').style.display= 'none';
  document.getElementById('six').style.display= 'block';
})





