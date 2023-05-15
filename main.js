const player = document.querySelector(".player")
const score = document.querySelector(".score")
const canvas = document.querySelector(".main")
const ball = document.querySelector(".ball")
let start, animationID, progress

console.log(document.body.clientHeight)
console.log(ball)
ball.style.backround = 'white'
let paddin = document.body.clientHeight - canvas.clientHeight
function move(timestamp) {
    if (!start)
    start = timestamp
    progress = timestamp - start
    if (progress >= document.body.clientHeight - paddin) {
        progress = document.body.clientHeight - paddin
        console.log("progress:", progress)
    }
    ball.style.bottom = progress + "px"
    console.log(parseInt(progress))
    if (parseInt(ball.style.bottom) === document.body.clientHeight - paddin) {
        cancelAnimationFrame(animationID)
        console.log("animation done", parseInt(ball.style.bottom), document.body.clientHeight - paddin, paddin)
        return
    }
    animationID = window.requestAnimationFrame(move)
}

window.requestAnimationFrame(move)