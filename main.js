const PLAYER_WIDTH = 250, PLAYER_HEIGHT = 16, BALL_RADIUS = 12
const canvas = document.querySelector(".playground")
const ctx = canvas.getContext("2d")
const player = {
    x: canvas.width / 2 - PLAYER_WIDTH / 2,
    y: canvas.height - PLAYER_HEIGHT,
    v: 8
}
const ball = {
    x: canvas.width / 2 - BALL_RADIUS / 2,
    y: canvas.height / 2,
    vy: 5,
    vx: 5
}

window.addEventListener("load", () => {
    console.log("PAGE LOADED")
    init()
});
document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        ctx.clearRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
        player.x = Math.min(canvas.width - PLAYER_WIDTH, player.x + player.v)
        ctx.fillRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
    else if (event.key === "ArrowLeft") {
        ctx.clearRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
        player.x = Math.max(0, player.x - player.v)
        ctx.fillRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
})

function init() {
    ctx.fillStyle = "white"
    //DRAW PLAYER
    ctx.rect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    ctx.fill(player.player)
    //DRAW BALL
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
    ctx.fill()
}

let ballAnimationID
function moveBall() {
    ctx.clearRect(ball.x - BALL_RADIUS, ball.y - BALL_RADIUS, BALL_RADIUS * 2, BALL_RADIUS * 2)
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    // ctx.fillRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    if ((ball.x + BALL_RADIUS) + ball.vx > canvas.width || (ball.x - BALL_RADIUS) + ball.vx < 0)
        ball.vx *= -1
    if ((ball.y + BALL_RADIUS) + ball.vy > canvas.height || (ball.y - BALL_RADIUS) + ball.vy < 0)
        ball.vy *= -1
    ball.x += ball.vx
    ball.y += ball.vy
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
    ballAnimationID = window.requestAnimationFrame(moveBall)
}
window.requestAnimationFrame(moveBall)