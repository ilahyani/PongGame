const PLAYER_WIDTH = 250, PLAYER_HEIGHT = 16, BALL_RADIUS = 12
const canvas = document.querySelector(".playground")
const ctx = canvas.getContext("2d")
const player = {
    x: canvas.width / 2 - PLAYER_WIDTH / 2,
    y: canvas.height - PLAYER_HEIGHT,
    v: 9
}
const ball = {
    x: canvas.width / 2 - BALL_RADIUS / 2,
    y: canvas.height / 2,
    vy: 4,
    vx: 4
}


window.addEventListener("load", init);
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
window.requestAnimationFrame(moveBall)


function init() {
    ctx.fillStyle = "white"
    ctx.rect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    ctx.fill(player.player)
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
    ctx.fill()
}

let ballAnimationID, lastFrameTime = 0;
function moveBall(currentTime) {
    const elapsedTime = currentTime - lastFrameTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
    if ((ball.y + BALL_RADIUS) >= player.y - 13 && ball.x >= player.x && ball.x <= player.x + PLAYER_WIDTH)
        ball.vy *= -1
    else if ((ball.x + BALL_RADIUS) + ball.vx > canvas.width || (ball.x - BALL_RADIUS) + ball.vx < 0)
        ball.vx *= -1
    else if ((ball.y - BALL_RADIUS) + ball.vy < 0)
        ball.vy *= -1
    else if ((ball.y + BALL_RADIUS) + ball.vy > canvas.height) {
        setTimeout(() => {
            ball.vx = ball.vy = 4
            ball.x = (canvas.width / 2 - BALL_RADIUS / 2) - ball.vx
            ball.y = canvas.height / 2 - ball.vy
        }, 80)
    }
    ball.x += ball.vx
    ball.y += ball.vy * (elapsedTime / 10)
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
    lastFrameTime = currentTime
    ballAnimationID = window.requestAnimationFrame(moveBall)
}