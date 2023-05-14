const [firstPlayerScore, secondPlayerScore] = document.querySelectorAll(".score")
const [player1, player2] = document.querySelectorAll(".player")
const canvas = document.querySelector(".main")
const ball = document.querySelector(".ball")
let start, animationID, progress, done = false

console.log(document.body.clientWidth)
let paddin = 52 + parseInt(window.getComputedStyle(canvas, null).getPropertyValue('padding-left')) + parseInt(player1.clientWidth) + 2
function move(timestamp) {
    if (!start)
        start = timestamp
    progress = timestamp - start
    console.log(progress, timestamp, start)
    if (progress >= document.body.clientWidth - paddin) {
        progress = document.body.clientWidth - paddin
        console.log("progress:", progress)
    }
    ball.style.left = progress + "px"
    if (parseInt(ball.style.left) === document.body.clientWidth - paddin) {
        cancelAnimationFrame(animationID)
        console.log("animation done", parseInt(ball.style.left), document.body.clientWidth - paddin)
        return
    }
    animationID = window.requestAnimationFrame(move)
}

window.requestAnimationFrame(move)