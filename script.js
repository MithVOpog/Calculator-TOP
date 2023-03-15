const buttons = document.querySelectorAll('button');
const outputDisplay = document.querySelector('.result-display');
const inputDisplay = document.querySelector('.input-display');
const entry = [];
const solDisplayArr = [];
let value1 = null;
let value2 = null;
let operator = null;

// Default Display and Dynamic Display
function defDisplay(opSign){

    if (opSign == 'add') {
        solDisplayArr.push('+');
        inputDisplay.textContent = solDisplayArr.join('');
    } else if (opSign == 'sub') {
        solDisplayArr.push('-');
        inputDisplay.textContent = solDisplayArr.join('');
    } else if (opSign == 'multi') {
        solDisplayArr.push('*');
        inputDisplay.textContent = solDisplayArr.join('');
    } else if (opSign == 'div') {
        solDisplayArr.push('÷');
        inputDisplay.textContent = solDisplayArr.join('');
    } else if (opSign == 'clearRecent') {
        solDisplayArr.pop();
        inputDisplay.textContent = solDisplayArr.join('');
    } else if (opSign == 'dot') {
        solDisplayArr.push('.');
        inputDisplay.textContent = solDisplayArr.join('');
    } else if(!isNaN(opSign)) {
        solDisplayArr.push(opSign);
        inputDisplay.textContent = solDisplayArr.join('');
    } else {
        inputDisplay.textContent = '0';
        outputDisplay.textContent = '0';
    };
}

defDisplay();

// Button Functions
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


/*Populating Display values */
function populateEntry(button) {

    if (isNaN(button.id)) {
        switch (button.id) {
            case 'addition':
                popVal('add');
                defDisplay('add');
                break
            case 'subtract':
                popVal('sub');
                defDisplay('sub');
                break
            case 'multiply':
                popVal('multi');
                defDisplay('multi');
                break
            case 'divide':
                popVal('div');
                defDisplay('div');
                break
            case 'equal-to':
                if (value1 !== null) {
                    value2 = parseFloat(entry.join(''));
                };
                outputDisplay.textContent = (value1 = parseFloat(operate(value1, value2, operator))); 
                entry.length = 0;
                operator = null;
                break
            case 'clear-recent':
                defDisplay('clearRecent');
                if(entry.length == 0) {
                    operator = null;
                } else {
                    entry.pop();       
                };
                break
            case 'all-clear':
                value1 = null;
                value2 = null;
                entry.length = 0;
                solDisplayArr.length = 0;
                defDisplay();
                break
            default:
                entry.push('.');
                defDisplay('dot');
                
        };
    } else if (!isNaN(button.id)) {
        entry.push(button.id);
        defDisplay(button.id);
    };


}

//value assignment function
function popVal(mathOp){
    if (value1 == null) {
        value1 = parseFloat(entry.join(''));
        entry.length = 0;
    } else if (value1 != null && operator != null ) {
        value1 = operate(value1, parseFloat(entry.join('')), operator);
        entry.length = 0;
        operator = null; 
    } else {
        value2 = parseFloat(entry.join(''));
        entry.length = 0;
    }

    operator = mathOp;
}



/* All Math Functions */
function operate(aValue, bValue, opt) {
    if (opt === 'add') {
        return Math.round((aValue + bValue) * 100) / 100;
    } else if (opt === 'sub') {
        return Math.round((aValue - bValue) * 100) / 100;
    } else if (opt === 'multi') {
        return Math.round((aValue * bValue) * 100) / 100;
    } else if (opt === 'div') {
        if (aValue === 0) {
            return 'SyntaxErr';
        } else {
            return Math.round((aValue / bValue) * 100) / 100;
        };
    };
}













