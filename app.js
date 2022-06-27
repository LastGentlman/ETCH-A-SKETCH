const colorPicker = document.querySelector('.color-picker');
// const colorBtn = document.querySelector('.color-btn');
const colourfulBtn = document.querySelector('.colourful-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const labelRange = document.querySelector('.label-range');
const sizeRange = document.querySelector('.size-range');
const board = document.querySelector('.divs-box');
const cssRoot = document.querySelector(':root'); //to bring the css variables
const cssVars = getComputedStyle(cssRoot);
const flagE = document.querySelector('.flag')

let flag = true;
let color = '';

function pincelColor() {
    if (flag) {
    switch (color) {
        case 'picker':
            this.style.backgroundColor = colorPicker.value;
            break;
        case 'eraser':
            let squareBg = cssVars.getPropertyValue('--square-bg')
            this.style.backgroundColor = squareBg;
            break;
        case 'colorful':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }}
}

function colorIs(v) {
    color = v;
}

function toggleFlag() {
    if (!flag) flagE.style.backgroundColor = 'red'
    flag = !flag;
    if (flag && color !== '') flagE.style.backgroundColor = 'green'
    else flagE.style.backgroundColor = 'red'
}
board.addEventListener('click', toggleFlag)

function squareGenerator(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let total = size * size;

    for (let i = 0; i < total; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        document.querySelector('.divs-box').appendChild(square);
        square.addEventListener('mouseover', pincelColor);
    }
}
resize(sizeRange.value)

function resize(v) {
    squareGenerator(v);
    labelRange.textContent = `${v} x ${v}`;
}

function clearBoard() {
    board.innerHTML = ''
    resize(sizeRange.value);
}