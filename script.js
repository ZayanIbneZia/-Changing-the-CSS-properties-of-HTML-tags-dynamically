let divelement = document.querySelector('.rectangle');

function ChangeToCircle() {

    divelement.style.borderRadius = '50%';

}

function hide() {

    divelement.style.display = 'none';

}

function show() {

    divelement.style.display = 'block';

}

function changecolor() {

    let colors = ['red', 'blue', 'green', 'indigo', 'yellow'];
    let random_number = Math.random() * colors.length;

    let floored_random_number = Math.floor(random_number);

    divelement.style.backgroundColor = colors[floored_random_number];

}

divelement.onmouseenter = function () {

    divelement.style.backgroundColor = 'red';

}

divelement.onmouseout = function () {

    divelement.style.backgroundColor = 'purple';

}

