const body = document.querySelector('body')

const red = document.getElementById('R');
const green = document.getElementById('G');
const blue = document.getElementById('B');

const redValueSpan = document.getElementById('redValue');
const greenValueSpan = document.getElementById('greenValue');
const blueValueSpan = document.getElementById('blueValue');

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

function updateColor() {
    const redValue = R.value;
    const greenValue = G.value;
    const blueValue = B.value;

    const colorStyle = `rgb(${redValue},${greenValue},${blueValue})`;
    
    body.style.backgroundColor = colorStyle;
    
    redValueSpan.textContent = `Red = ${redValue}`;
    greenValueSpan.textContent = `Green = ${greenValue}`;
    blueValueSpan.textContent = `Blue = ${blueValue}`;

    
}


