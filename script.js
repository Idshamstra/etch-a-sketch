const grid = document.querySelector('container');

function sowDefaultGrid() {
    const gridSize = 16;
    const sellSize = calculateCellSize(gridSize);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; i++) {
            let div = document.createElement('div');
            container.appendChild(div);
            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;
        }
    }
}
