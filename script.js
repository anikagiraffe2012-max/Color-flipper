const colorValueSpan = document.getElementById('colorValue');
const flipBtn = document.getElementById('flipBtn');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color = color + letters[randomIndex];
    }
    return color;
}

flipBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorValueSpan.textContent = newColor;
});

