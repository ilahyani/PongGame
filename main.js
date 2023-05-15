const player = document.querySelector(".player")
const score = document.querySelector(".score")
const main = document.querySelector(".main")
const ball = document.querySelector(".ball")

document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        console.log("right")
    }
    else if (event.key === "ArrowLeft") {
        console.log("left")
    }
})

let ballAnimationID, playerAnimationID

let maxRight = main.clientWidth - player.clientWidth
console.log(player)
function movePlayer() {
    playerAnimationID = window.requestAnimationFrame(movePlayer)
}
// window.requestAnimationFrame(movePlayer)

console.log(ball)
function moveBall() {
    ballAnimationID = window.requestAnimationFrame(moveBall)
}
// window.requestAnimationFrame(moveBall)