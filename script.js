const buttons = document.querySelectorAll('button');
const outputDisplay = document.querySelector('.result-display');
const inputDisplay = document.querySelector('.input-display');
const entry = [];
const solDisplayArr = [];
let value1 = null;
let value2 = null;
let operator = null;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        populateEntry(button);
        button.classList.add('clicking');
    });
});


const keys = Array.from(document.querySelectorAll('.inputs'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicking');
}


/* Dynamic Display & Populating Entries */
function populateEntry(button) {
    if (isNaN(button.id)) {
        switch (button.id) {
            case 'addition':
                popVal()
                operator = 'add';
                solDisplayArr.push('+');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'subtract':
                popVal()
                operator = 'sub';
                solDisplayArr.push('-');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'multiply':
                popVal()
                operator = 'multi';
                solDisplayArr.push('*');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'divide':
                popVal()
                operator = 'div';
                solDisplayArr.push('÷');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'equal-to':
                console.log(value1);
                if (value1 !== null) {
                    value2 = parseFloat(entry.join(''));
                    console.log(value2);
                }
                outputDisplay.textContent = (value1 = parseFloat(operate(value1, value2, operator))); 
                entry.length = 0;
                console.log('equal tp'); 
                break
            case 'clear-recent':
                solDisplayArr.pop();
                entry.pop();
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'all-clear':
                value1 = null;
                value2 = null;
                entry.length = 0;
                solDisplayArr.length = 0;
                inputDisplay.textContent = '';
                outputDisplay.textContent = '';
                break
            default:
                entry.push('.');
                solDisplayArr.push('.');
                inputDisplay.textContent = solDisplayArr.join('');
        };
    } else if (!isNaN(button.id)) {
        entry.push(button.id);
        console.log(button.id);
        solDisplayArr.push(button.id);
        inputDisplay.textContent = solDisplayArr.join('');
    };


}




/* All Math Functions */

//populate values
function popVal(){
    if (value1 === null) {
        value1 = parseFloat(entry.join(''));
        entry.length = 0;
        console.log(value2);
    } else if (value1 !== null) {
        value2 = parseFloat(entry.join(''));
        entry.length = 0;
        console.log(value2);
    } 
}


function operate(aValue, bValue, opt) {
    if (opt === 'add') {
        return Math.round((aValue + bValue) * 100) / 100;
    } else if (opt === 'sub') {
        return Math.round((aValue - bValue) * 100) / 100;
    } else if (opt === 'multi') {
        return Math.round((aValue * bValue) * 100) / 100;
    } else if (opt === 'div') {
        if (aValue == 0) {
            return 'SyntaxErr';
        } else {
            return Math.round((aValue / bValue) * 100) / 100;
        };
    };
}













