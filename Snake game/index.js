const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [5,4,3]

function createGrid() {
    //create 100 of these elements with a for loop
    for (let i=0; i < 100; i++) {
     //create element
    const square = document.createElement('div')
    //add styling to the element
    square.classList.add('square')
    //put the element into our grid
    grid.appendChild(square)
    //push it into a new squares array    
    squares.push(square)
    }
}

createGrid()

console.log(squares)

function move() {
    //remove last element from our currentSnake array
    const tail = currentSnake.pop()
    console.log(tail)
    console.log(currentSnake)
    //remove styling from last element
    console.log(squares[tail])
    squares[tail].classList.remove('snake')
    //add square in direction we are heading
    currentSnake.unshift()
    //add styling so we can see it
    
}
move()
