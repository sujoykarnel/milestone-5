function makeBlue() {
    document.body.style.backgroundColor = 'blue';
};
const blueButton = document.getElementById('make-blue-button')
blueButton.onclick = makeBlue;


function makeRed() {
    document.body.style.backgroundColor = 'red';
};

//anonymous function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


//addEventLister
const goldenRodButton = document.getElementById('make-goldenrod-button');
goldenRodButton.addEventListener('click', makeGoldenRod)
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenRod'
}


const hotPinkButton = document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click', function makeGoldenRod() {
    document.body.style.backgroundColor = 'hotPink'
})


document.getElementById('make-lightblue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightBlue';
});