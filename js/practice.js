console.log('from js file')

const btn = document.getElementById('btn');
btn.addEventListener('click', function(num1, num2){
    // num1 = document.getElementById('first-num').value;
    num1 = parseFloat(document.getElementById('first-num').value);
    // num2 = document.getElementById('second-num').value;
    num2 =parseFloat( document.getElementById('second-num').value);
    const sum = num1 + num2;
    const output = document.getElementById('output');
    output.innerText = sum;
    const inPut1 = document.getElementById('first-num')
    const inPut2 = document.getElementById('second-num')
    inPut1.value = '';
    inPut2.value = '';

})