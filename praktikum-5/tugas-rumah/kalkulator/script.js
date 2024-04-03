const resultDisplay = document.getElementById('result')
const buttons = document.querySelectorAll('main button')

let currentValue = '0';
let prevValue = '';
let operator = '';
let result = '';

buttons.forEach(function(button) {
  button.addEventListener('click' , () => {
    const value = button.textContent.trim()

    if(!isNaN(value)) {
      if(currentValue === '0'){
        currentValue = value;
      }else{
        currentValue += value
      } 
    }else if(value === 'C'){
      currentValue = '0';
      prevValue = '';
      operator = '';
      result = '';
    }else if (value === '=') {
      if(prevValue !== '') {
        hitung()
      }
    }else {
      if(prevValue !== '') {
        hitung()
      }

      prevValue = currentValue;
      operator = value
      currentValue = '0'
    }
    
    displayResult()

  })
})



function hitung() {

  const current = parseFloat(currentValue);
  const prev = parseFloat(prevValue)


  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case 'x':
      result = prev * current;
      break;
    case '/':
      if(current !== 0) {
        result = prev / current;
      }else {
        result = 'Infinity'
      }
      break;
  
    default:
      break;
  }

  currentValue = result.toString()
  prevValue = '';
  result = '';
}


function displayResult() {
  resultDisplay.textContent = currentValue;
}






