const buttons = document.querySelectorAll('button');
const content = document.querySelector('.content');
const entry = [];
let value1 = 0;
let value2 = 0;
let operation;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
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
                    content.textContent = addOperation(value1, value2);
                    break
                default:
                    content.textContent = "hello";       
            }
        }

    });
});

function addOperation(a,b) {
    let sum = a + b;
    value1 = 0;
    value2 = 0;
    return sum;
}

