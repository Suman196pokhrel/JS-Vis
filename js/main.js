import { generateGrid } from "./utils/grid.js"






let resizeTimeout;
const root = document.getElementById("root")



function init() {
    let width = window.innerWidth
    let height = window.innerHeight

    let boxHeight = 20
    let boxWidth = 20

    let rows = Math.ceil(height / boxHeight)
    let cols = Math.ceil(width / boxWidth)

    generateGrid(root, rows, cols)
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




