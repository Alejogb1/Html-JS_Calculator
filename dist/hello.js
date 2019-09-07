const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')
const calculate = (n1, operator, n2) => {
  let result = ""
  
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
if (
  firstValue &&
  operator &&
  previousKeyType !== 'operator'
) {
  const calcValue = calculate(firstValue, operator, secondValue)
  display.textContent = calcValue
  
// Update calculated value as firstValue
  calculator.dataset.firstValue = calcValue
} else {
  // If there are no calculations, set displayedNum as the firstValue
  calculator.dataset.firstValue = displayedNum
}
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType


        Array.from(key.parentNode.children)
        .forEach( k => k.classList.remove("is-depressed"))
    if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator ") {
            display.textContent = keyContent
            calculator.dataset.previousKey = "number"
            
        } else {
            display.textContent = displayedNum + keyContent;
        }
      }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        if (firstValue && operator) {
          display.textContent = calculate(firstValue, operator, secondValue)
        }
        key.classList.add("is-depressed")
        calculator.dataset.previousKeyType = "operator"
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
      }
 

if (action === 'decimal') {
    if (!displayedNum.includes("."))  {
      display.textContent = displayedNum + "."
      calculator.dataset.previousKey = "decimal"
  }}
  
  if (action === 'clear') {
    calculator.dataset.previousKey = "clear"
  }
  
  if (action === 'calculate') {
    const operator = calculator.dataset.operator
    const firstValue = calculator.dataset.firstValue
    const secondValue = displayedNum
    calculator.dataset.previousKey = "calculate"
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  
}})
