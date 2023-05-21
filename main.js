const PLAYER_WIDTH = 250, PLAYER_HEIGHT = 16, BALL_RADIUS = 12, DEFAULT_BALL_VELOCITY = 5
const scoreBoard = document.querySelector(".score")
const canvas = document.querySelector(".playground")
const ctx = canvas.getContext("2d")
const player = {
    x: canvas.width / 2 - PLAYER_WIDTH / 2,
    y: canvas.height - PLAYER_HEIGHT - 10,
    v: 10
}
const ball = {
    x: canvas.width / 2 - BALL_RADIUS / 2,
    y: canvas.height - canvas.height / 1.2,
    vy: DEFAULT_BALL_VELOCITY,
    vx: DEFAULT_BALL_VELOCITY
}


window.addEventListener("load", init);
document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        ctx.clearRect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT)
        player.x = Math.min(canvas.width - PLAYER_WIDTH, player.x + player.v)
        ctx.fillRect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
    else if (event.key === "ArrowLeft") {
        ctx.clearRect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT)
        player.x = Math.max(0, player.x - player.v)
        ctx.fillRect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    }
})
window.requestAnimationFrame(moveBall)


function init() {
    ctx.fillStyle = "white"
    ctx.rect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    ctx.fill(player.player)
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
    ctx.fill()
    scoreBoard.innerHTML = score + " (" + topScore + ")"
}

let ballAnimationID, lastFrameTime = 0, score = 0, topScore = 0;
function moveBall(currentTime) {
    const elapsedTime = currentTime - lastFrameTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(player.x, player.y, PLAYER_WIDTH, PLAYER_HEIGHT)
    if ((ball.x + BALL_RADIUS) + ball.vx >= canvas.width || (ball.x - BALL_RADIUS) + ball.vx <= 0)
        ball.vx *= -1
    else if ((ball.y - BALL_RADIUS) + ball.vy <= 0)
        ball.vy *= -1
    else if ((ball.y + BALL_RADIUS) + ball.vy >= canvas.height) {
        setTimeout(() => {
            ball.vx = ball.vy = DEFAULT_BALL_VELOCITY
            ball.x = (canvas.width / 2 - BALL_RADIUS / 2) - ball.vx
            ball.y = canvas.height - canvas.height / 1.2 - ball.vy
            player.x = canvas.width / 2 - PLAYER_WIDTH / 2,
            player.y = canvas.height - PLAYER_HEIGHT - 10,
            topScore = Math.max(topScore, score)
            score = 0
            scoreBoard.innerHTML = score + " (" + topScore + ")"
        }, 80)
    }
    else if (ball.y + BALL_RADIUS >= player.y && (ball.x + BALL_RADIUS >= player.x && ball.x - BALL_RADIUS <= player.x + PLAYER_WIDTH)) {
        if (ball.vy > 0)
            ball.vy *= -1
        if (++score % 5 == 0) {
            ball.vx += (ball.vx > 0 ? 0.2 : -0.2)
            ball.vy += (ball.vy > 0 ? 0.2 : -0.2)
        }
        scoreBoard.innerHTML = score + " (" + topScore + ")"
    }
    ball.x += ball.vx
    ball.y += ball.vy * (elapsedTime / 8)
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
    lastFrameTime = currentTime
    ballAnimationID = window.requestAnimationFrame(moveBall)
}