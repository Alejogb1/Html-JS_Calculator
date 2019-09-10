const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')
// Calculate Function
const calculate = (n1, operator, n2) => {
  let result = ""
  console.log(n1, operator, n2)
  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2) 
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2) 
  }
  return result
  
}
keys.addEventListener('click', e => {
// Function to store buttons 
  if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType


        Array.from(key.parentNode.children)
        .forEach( k => k.classList.remove("is-depressed"))
// Numbers Section / Not Action
    if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator ") {
            display.textContent = keyContent
            calculator.dataset.previousKey = "number"
            
        } else {
            display.textContent = displayedNum + keyContent;
        }
      }
// Operators section/ Action 
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        //Definining the variables
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
// Display result, moment to use calculate func
        if (firstValue &&
            operator && 
            previousKeyType !== "operator" // If the previous key is an operator, we shouldn't click it again (Bug)
            ) {
          display.textContent = calculate(firstValue, operator, secondValue)
        }
        key.classList.add("is-depressed")
        // Add custom atribute, indicating that the Previous key is an operator
        calculator.dataset.previousKeyType = "operator"
        // Displayed num will be the first value
        calculator.dataset.firstValue = displayedNum 
        // Then the user will click (action) an operator so I will store it
        calculator.dataset.operator = action
      }
 
// "Special Keys" section
if (action === 'decimal') {
    if (!displayedNum.includes("."))  {
      display.textContent = displayedNum + "."
      calculator.dataset.previousKey = "decimal"
  }}
  
  if (action === 'clear') {
    calculator.dataset.previousKey = "clear"
  }
  
  if (action === 'calculate' &&
      previousKeyType !== "operator") {
    // Redefining the variables because they are local-scoped ones (!= Global) 
    const operator = calculator.dataset.operator
    const firstValue = calculator.dataset.firstValue
    const secondValue = displayedNum // I didn't have the necessity to store it, cz it's been displayed
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  
}})
