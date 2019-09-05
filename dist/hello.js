const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        Array.from(key.parentNode.children)
        .forEach( k => k.classList.remove("is-depressed"))
    if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator ") {
            display.textContent = keyContent
            
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
        console.log('operator key!')
      }
 

if (action === 'decimal') {
    displayedNum = keyContent + "."
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    const secondValue = displayedNum
  }
    }
  })