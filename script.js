const buttons = document.querySelectorAll('button');
const outputDisplay = document.querySelector('.result-display');
const inputDisplay = document.querySelector('.input-display');
const entry = [];
const solDisplayArr = [];
let value1 = 0;
let value2 = 0;
let operation;


buttons.forEach((button) => {
    button.addEventListener('click', () => {

        solDisplay(button);

        button.classList.add('clicking');

        if(button.classList.contains('numbers')) {
            const tempValue = button.id;
            entry.push(tempValue);
        }

        if(button.classList.contains('operator')){
            if (value1 == 0) {
                value1 = parseInt(entry.join(''));
            } else {
                value2 = entry.join('');
            };
            entry.length = 0;

            if (button.id == 'addition'){
                operation = 'addOp';
            } 
        }

        if(button.classList.contains('equalTo')){
            value2 = parseInt(entry.join(''));
            entry.length = 0;
            switch (operation) {
                case 'addOp':
                    outputDisplay.textContent = addOperation(value1, value2);
                    solDisplayArr.length = 0;
                    break
                default:
                    outputDisplay.textContent = "hello";       
            }
        }

    });
});


const keys = Array.from(document.querySelectorAll('.inputs'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicking');
}


/* Dynamic Display */
function solDisplay(button) {
    console.log(button.id);
    if (isNaN(button.id)) {
        switch (button.id) {
            case 'addition':
                solDisplayArr.push('+');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'subtract':
                solDisplayArr.push('-');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'multiply':
                solDisplayArr.push('x');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'divide':
                solDisplayArr.push('÷');
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'clear-recent':
                solDisplayArr.pop();
                entry.pop();
                inputDisplay.textContent = solDisplayArr.join('');
                break
            case 'all-clear':
                solDisplayArr.length = 0;
                console.log(solDisplayArr);
                inputDisplay.textContent = '';
                outputDisplay.textContent = '';
                break
            default:
                solDisplayArr.push('.');
                inputDisplay.textContent = solDisplayArr.join('');
        };
    } else {
        solDisplayArr.push(button.id);
        inputDisplay.textContent = solDisplayArr.join('');
    }


}




/* All Math Functions */

function addOperation(a,b) {
    let sum = a + b;
    value1 = 0;
    value2 = 0;
    return sum;
}

















