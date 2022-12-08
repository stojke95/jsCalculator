for (let i = 0; i < 10; i += 1) {
    this['button' + i] = document.getElementById(`${i}`);
};

for (let i = 0; i < 10; i += 1) {
    this['button' + i].addEventListener('click', () => {
        if (tempOperation !== '') {
            display.innerText = '';
            display.innerText += `${i}`;
            tempOperation = '';
        }
        else {
            display.innerText += `${i}`;
        }
    })
}

for (let i = 0; i < 10; i += 1) {
    window.addEventListener('keydown', (e) => {
        if (e.code === `Numpad${i}`) {
            this['button' + i].focus();
            if (tempOperation !== '') {
                display.innerText = '';
                display.innerText += `${i}`;
                tempOperation = '';
            }
            else {
                display.innerText += `${i}`;
            }
        }
    })
}

const display = document.querySelector('span');
const acButton = document.querySelector('#ac');
const equalButton = document.querySelector('#equal');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const dotButton = document.querySelector('#dot');
const cButton = document.querySelector('#c');

let value = 0;
let operation = '';
let tempOperation = '';

plusButton.addEventListener('click', () => {
    value = parseFloat(display.innerText);
    operation = 'plus';
    tempOperation = 'plus';
})

minusButton.addEventListener('click', () => {
    value = parseFloat(display.innerText);
    operation = 'minus';
    tempOperation = 'minus';
})

multiplyButton.addEventListener('click', () => {
    value = parseFloat(display.innerText);
    operation = 'multiply';
    tempOperation = 'multiply';
})

divideButton.addEventListener('click', () => {
    value = parseFloat(display.innerText);
    operation = 'divide';
    tempOperation = 'divide';
})

dotButton.addEventListener('click', () => {
    if (tempOperation !== '') {
        display.innerText = '';
        display.innerText += '.';
        tempOperation = '';
    }
    else {
        display.innerText += '.';
    }
})

equalButton.addEventListener('click', () => {
    if (operation === 'plus') {
        value += parseFloat(display.innerText);
        display.innerText = value;
        operation = '';
    }
    else if (operation === 'minus') {
        value -= parseFloat(display.innerText);
        display.innerText = value;
        operation = '';
    }
    else if (operation === 'multiply') {
        value *= parseFloat(display.innerText);
        display.innerText = value;
        operation = '';
    }
    else if (operation === 'divide') {
        value /= parseFloat(display.innerText);
        display.innerText = value;
        operation = '';
    }
    else {
        display.innerText;
    }
})

acButton.addEventListener('click', (e) => {
    display.innerText = '';
    operation = '';
    tempOperation = '';
    value = 0;
})

cButton.addEventListener('click', (e) => {
    const lastNum = display.innerText.length - 1;
    display.innerText = display.innerText.substring(0, lastNum);
})

window.addEventListener('keydown', (e) => {
    console.log(e);
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'NumpadAdd') {
        value = parseFloat(display.innerText);
        operation = 'plus';
        tempOperation = 'plus';
        plusButton.focus();
    }
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'NumpadSubtract') {
        value = parseFloat(display.innerText);
        operation = 'minus';
        tempOperation = 'minus';
        minusButton.focus();
    }
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'NumpadMultiply') {
        value = parseFloat(display.innerText);
        operation = 'multiply';
        tempOperation = 'multiply';
        multiplyButton.focus();
    }
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'NumpadDivide') {
        value = parseFloat(display.innerText);
        operation = 'divide';
        tempOperation = 'divide';
        divideButton.focus();
    }
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'Backspace') {
        const lastNum = display.innerText.length - 1;
        display.innerText = display.innerText.substring(0, lastNum);
    }
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'NumpadEnter' || e.code === 'Enter') {
        equalButton.focus();
        if (operation === 'plus') {
            value += parseFloat(display.innerText);
            display.innerText = value;
            operation = '';
        }
        else if (operation === 'minus') {
            value -= parseFloat(display.innerText);
            display.innerText = value;
            operation = '';
        }
        else if (operation === 'multiply') {
            value *= parseFloat(display.innerText);
            display.innerText = value;
            operation = '';
        }
        else if (operation === 'divide') {
            value /= parseFloat(display.innerText);
            display.innerText = value;
            operation = '';
        }
        else {
            display.innerText;
        }
    }
});