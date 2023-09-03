import { generateGrid } from "./utils/grid.js"






let resizeTimeout;
const root = document.getElementById("root")



function init() {
    let rootWidth = root.offsetWidth;
    let rootHeight = root.offsetHeight;

    let boxHeight = 25;
    let boxWidth = 25;

    let m = 0;
    let boxSizeWithMarginWidth = boxWidth + (2 * m);
    let boxSizeWithMarginHeight = boxHeight + (2 * m);

    let rows = Math.floor(rootHeight / boxSizeWithMarginHeight);
    let cols = Math.floor(rootWidth / boxSizeWithMarginWidth);

    generateGrid(root, rows, cols, boxWidth, boxHeight);
}






window.addEventListener('load', () => {
    init()
})





