
export function generateBox(rowId, colId, boxWidth, boxHeight) {
    let m = 2
    let boxSieWidthMarrgin = boxWidth + (2 * m)


    let box = document.createElement('div')
    box.style.width = `${boxWidth}` + "px"
    box.style.height = `${boxHeight}` + "px"
    box.style.top = rowId * boxSieWidthMarrgin + "px"
    box.style.left = colId * boxSieWidthMarrgin + "px"
    box.className = "box box-init"
    return box

}


export function generateGrid(root, rows, cols, boxWidth, boxHeight) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Appending boxes to the root
            const box = generateBox(i, j, boxWidth, boxHeight);
            fragment.appendChild(box);




        }
    }

    root.appendChild(fragment)
}


