let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let result = document.querySelector(".text");
let p = document.createElement("p");
result.before(p);

let timeNewYear= new Date(2018, 12, 31, 23, 59);

let time = 0;
let timer = {};
let start, stop;

class Timer{
    constructor (){
        this.startTime = start;
        this.stopTime = stop;
        this.interval = stop - start;
    };
    start (){
        timer = setInterval(function (){
            time++;
            result.textContent = time;
        }, 1000);
        this.startTime = time;
    };

    stop (){
        clearInterval(timer);
        this.stopTime = time;
        let difference = Math.floor(this.stopTime - this.startTime);
        this.interval = difference;

    };

    getTime (){
        console.log(this.interval);
    }

    static timeToNY() {
        let today = new Date();
        let leftTime = timeNewYear.getTime() - today.getTime();
        let leftDate = Math.floor(leftTime/86400000);

        return leftDate;
    }

}
let stopwatch = new Timer();


startBtn.addEventListener('click',  function(){
    stopwatch.start();
});
stopBtn.addEventListener('click', function(){
    stopwatch.stop();
    stopwatch.getTime();

});

p.textContent = `${Timer.timeToNY()} days left till the New Year!`;
