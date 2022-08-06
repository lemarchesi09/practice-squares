const container = document.querySelector('.container')

const colors = ["red", "blue", "green"]

for (let index = 0; index < 500; index++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    container.appendChild(square)
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red'
    })

    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = ''
    })
}

