'use strict';

const faceEl = document.querySelector('.js-face');
const btnEl = document.querySelector('.js-btn');

function handleClick() {
    if ('click') {
    faceEl.innerHTML = ';)';
    } else {
    faceEl.innerHTML = ':)';
    }
    
}

btnEl.addEventListener('click', handleClick);
