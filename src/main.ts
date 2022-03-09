import add from './add';
// LAB: Importar subtraction
import subtract from './subtraction';

let result = add(4, 5);
let output = document.querySelector('#output');
if (output) {
    output.innerHTML = result.toString();
}

// LAB: Invocar subtraction
result = subtract(10, 2);
output = document.querySelector('#sub_result');
if (output) {
    output.innerHTML = result.toString();
}

