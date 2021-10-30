
let colorButton = document.querySelector('#color')

colorButton.addEventListener('click', () => {
    colorButton.style.backgroundColor='skyblue';
    colorButton.style.color = 'white'
    alert("Sky Blue!")
})

let placeButton = document.querySelector('#place')
    
    placeButton.addEventListener('click', () => {
    alert("Home with my family!")
    })


let ritualButton = document.querySelector('#ritual')
    
    ritualButton.addEventListener('click', () => {
        alert("Christmas day with my whole family!")
        })   
