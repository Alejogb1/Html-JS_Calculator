const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator_keys");

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
      // Do something
      const key = e.target
      const action = key.dataset.action
      console.log(key)
   }})



   if (!action) {
    console.log("number key!")
  }
if (
    action === "add",
    action === "subtract",
    action === "multiply",
    action === "divide"
) {
    console.log("operator key!")
}
if (action === "clear"){
    console.log("clear key!")
}
if (action === "decimal"){
    console.log("decimal key!")
}
if (action === "calculate"){
    console.log("equal key!")
}
//Display
const display = document.querySelector(".calculator_display")

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
    }
}
)
if (!action) {
    if (displayedNum === "0"){
        display.textContent = keyContent
    }
} else {
    display.textContent = displayedNum + keyContent
}
if (action === "decimal") {
    display.textContent = displayedNum + "."
}
if (
    action === "add",
    action === "divide",
    action === "multiply",
    action === "subtract"
) {
    key.classList.add("is-depressed")
    calculator.dataset.previousKetType = "operator"
}
keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
    }
    array.from(key.parentNode.children)
    .forEach(k => k.classList.remove("is-depressed"))
})
const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
    if(displayedNum === "0", previousKeyType === "operator")
    display.textContent = keyContent
} else {
    display.textContent = displayedNum + keyContent
}