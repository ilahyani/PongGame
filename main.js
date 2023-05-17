const canvas = document.querySelector(".playground")
const PLAYER_WIDTH = 250, PLAYER_HEIGHT = 16, BALL_RADIUS = 12
// const player = new Path2D(), ball = new Path2D()

const player = {
    player: new Path2D(),
    x: canvas.width / 2 - PLAYER_WIDTH / 2,
    y: canvas.height - PLAYER_HEIGHT
}

const ball = {
    ball: new Path2D(),
    x: canvas.width / 2 - BALL_RADIUS / 2,
    y:  canvas.height / 2
}

window.addEventListener("load", () => {
    console.log("PAGE LOADED")
    draw()
});

function draw() {
    console.log("DRAWING")
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")
        ctx.fillStyle = "white"
        //DRAW PLAYER
        player.player.rect(player.x, player.y - 10, PLAYER_WIDTH, PLAYER_HEIGHT)
        ctx.fill(player.player)
        //DRAW BALL
        ball.ball.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI)
        ctx.fill(ball.ball)
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        console.log("->")
    }
    else if (event.key === "ArrowLeft") {
        console.log("<-")
    }
})

let ballAnimationID, playerAnimationID

function movePlayer() {
    playerAnimationID = window.requestAnimationFrame(movePlayer)
}
// window.requestAnimationFrame(movePlayer)

function moveBall() {
    ballAnimationID = window.requestAnimationFrame(moveBall)
}
// window.requestAnimationFrame(moveBall)