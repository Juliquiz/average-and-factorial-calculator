function calcularPromedio() {
  let numbersInput = document.getElementById('numbers').value;
  let numbersArray = numbersInput.split(',');
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    let number = parseFloat(numbersArray[i]);
    if (!isNaN(number)) {
      sum += number;
      count++;
    }
  }

  let average = sum / count;
  document.getElementById('resultado').innerHTML = 'El promedio es: ' + average;
}

function calcularFactorial() {
  let number = parseInt(document.getElementById('number').value);
  let factorial = 1;

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  alert('El factorial es: ' + factorial);
}
