document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const resultDisplay = document.getElementById('result');
  
    addButton.addEventListener('click', function() {
      calculate('add');
    });
  
    subtractButton.addEventListener('click', function() {
      calculate('subtract');
    });
  
    multiplyButton.addEventListener('click', function() {
      calculate('multiply');
    });
  
    divideButton.addEventListener('click', function() {
      calculate('divide');
    });
  
   
    function calculate(operation) {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      let result;
  
      if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Invalid input';
        return;
      }
  
      
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 === 0) {
            resultDisplay.textContent = 'Cannot divide by zero';
            return;
          }
          result = num1 / num2;
          break;
      }
  
      resultDisplay.textContent = result;
    }
  });
  