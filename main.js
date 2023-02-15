'use strict';

const faceEl = document.querySelector('.js-face');
const btnEl = document.querySelector('.js-btn');

function handleClick() {
    if (faceEl.innerHTML === ':)') {
    faceEl.innerHTML = ';)';
    } else if (faceEl.innerHTML === ';)') {
    faceEl.innerHTML = ':)';
    }
}

btnEl.addEventListener('click', handleClick);
