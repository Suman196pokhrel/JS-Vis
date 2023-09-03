
export function generateBox(rowId, colId) {
    let m = 2
    let boxSieWidthMarrgin = 20 + (2 * m)
    let box = document.createElement('div')
    box.style.width = "20px"
    box.style.height = "20px"
    box.style.top = rowId * boxSieWidthMarrgin + "px"
    box.style.left = colId * boxSieWidthMarrgin + "px"
    box.className = "box"
    return box

}


export function generateGrid(root, rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Appending boxes to the root
            const box = generateBox(i, j)
            root.appendChild(box)
            console.log(`row ${i}, column ${j}`)
        }
    }
}


