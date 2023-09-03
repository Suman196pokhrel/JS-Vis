import { generateGrid } from "./utils/grid.js"






let resizeTimeout;
const root = document.getElementById("root")



function init() {
    let rootWidth = root.offsetWidth;
    let rootHeight = root.offsetHeight;

    let boxHeight = 12;
    let boxWidth = 12;

    let rows = Math.ceil(rootHeight / boxHeight);
    let cols = Math.ceil(rootWidth / boxWidth);

    generateGrid(root, rows, cols, boxWidth, boxHeight);
}





window.addEventListener('load', () => {
    init()
})

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        root.innerHTML = ''
        init()
    }, 500)

})




