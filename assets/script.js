// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jace Liu" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Ginger bread
let cc = 0;     // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle
let total = 0;
let totalQty = document.getElementById("total-qty")
let addGB = document.getElementById('add-gb')
let minusGB = document.getElementById("minus-gb")
let GBQty = document.getElementById("qty-gb")
let addCC = document.getElementById("add-cc")
let minusCC = document.getElementById("minus-cc")
let CCQTY = document.getElementById("qty-cc")
let addSugar = document.getElementById("add-sugar")
let minusSugar = document.getElementById("minus-sugar")
let SugarQty = document.getElementById("qty-sugar")

// seems ineffecient 

document.getElementById('credit').textContent = `Created by ${yourName}`

// all go into the negatives still, tried using if and else if
addGB.addEventListener('click', function() {
    gb += 1;
    GBQty.innerHTML = gb;
})
minusGB.addEventListener("click", () => {
    gb -= 1;
    GBQty.innerHTML = gb;
})
addCC.addEventListener("click", () => {
    cc += 1;
    CCQTY.innerHTML = cc;
})
minusCC.addEventListener("click", () => {
    cc -= 1;
    CCQTY.innerHTML = cc
})
addSugar.addEventListener("click", () => {
    sugar += 1
    SugarQty.innerHTML = sugar
})
minusSugar.addEventListener("click", () => {
    sugar -= 1
    SugarQty.innerHTML = sugar
})

totalQty.addEventListener("click" , () =>{
    total.innerHTML = SugarQty + CCQTY + GBQty
})
// idk what else to use other than add event listener and list the function and click. should total rely on other button clicks to register pasteries?




// TODO: Hook up event listeners for the rest of the buttons