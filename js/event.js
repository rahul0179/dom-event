
//  # 1
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//  # 2
const orangeButton = document.getElementById('make-orange-button');
orangeButton.onclick = makeOrange;

function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}


//  # 3
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}
//handle by using eventlistener

const goldenButton = document.getElementById('make-golden');


goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// jdsd
const hotPinkButton = document.getElementById('make-pink');
hotPinkButton.addEventListener('click', function makePink() {

    document.body.style.backgroundColor = 'hotpink';

})