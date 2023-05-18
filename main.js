const PLAYER_WIDTH = 250, PLAYER_HEIGHT = 16, BALL_RADIUS = 12
const canvas = document.querySelector(".playground")
const ctx = canvas.getContext("2d")
const player = {
    player: new Path2D(),
    x: canvas.width / 2 - PLAYER_WIDTH / 2,
    y: canvas.height - PLAYER_HEIGHT,
}
const ball = {
    ball: new Path2D(),
    x: canvas.width / 2 - BALL_RADIUS / 2,
    y: canvas.height / 2
}

let velocity = 6
window.addEventListener("load", () => {
    console.log("PAGE LOADED")
    init()
});
document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        // console.log("->")
        // console.log(player.x)
        ctx.clearRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
        player.x = Math.min(canvas.width - PLAYER_WIDTH, player.x + velocity)
        ctx.fillRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
    else if (event.key === "ArrowLeft") {
        // console.log("<-")
        // console.log(player.x)
        ctx.clearRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
        player.x = Math.max(0, player.x - velocity)
        ctx.fillRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
})

function init() {
    ctx.fillStyle = "white"
    //DRAW PLAYER
    player.player.rect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    ctx.fill(player.player)
    //DRAW BALL
    ball.ball.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
    ctx.fill(ball.ball)
}

let ballAnimationID
function moveBall() {
    ballAnimationID = window.requestAnimationFrame(moveBall)
}
// window.requestAnimationFrame(moveBall)

// let playerAnimationID
// function movePlayer() {
//     playerAnimationID = window.requestAnimationFrame(movePlayer)
// }
// window.requestAnimationFrame(movePlayer)