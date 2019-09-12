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
// Display Numbers/ Numbers Section / Not Action
    if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator") {
            display.textContent = keyContent  
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
        key.classList.add("is-depressed")
        calculator.dataset.previousKeyType = "operator"
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action;
        
      }
// Special Action/Keys section
if (action === 'decimal') {
    if (!displayedNum.includes("."))  {
      display.textContent = displayedNum + "."
      calculator.dataset.previousKey = "decimal"
  }}
  
  if (action === 'clear') {
    calculator.dataset.previousKey = "clear"
  }
  
  if (action === 'calculate') {
    // Redefining the variables because they are local-scoped ones (!= Global) 
    const operator = calculator.dataset.operator
    const firstValue = calculator.dataset.firstValue
    const secondValue = displayedNum // I didn't have the necessity to store it, cz it's been displayed
    display.textContent = calculate(firstValue, operator, secondValue)
    console.log("The firstvalue is:", firstValue, "!")
    console.log("The second value is:", secondValue,"!")
  }
}})
