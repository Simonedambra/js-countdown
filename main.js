'use strict'

const starter = document.getElementById('start')
const stoper = document.getElementById('stop')
const timers = document.getElementById('timer')
let count = 10.00;

starter.addEventListener('click', function () {
    let timer = setInterval(function () {
        count = (count - 0.01);
        let zero = Number(count.toFixed(2));
        timers.innerHTML = zero;
        console.log(zero)
        if (zero === 0) {
            alert('buon compleanno');
            clearInterval(timer);

        }
        stoper.addEventListener('click', function () {
            clearInterval(timer);
            alert('buon compleanno');
        });
    }, 10);

});


