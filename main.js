const player = document.querySelector(".player")
const ball = document.querySelector(".ball")
const score = document.querySelector(".score")

// document.addEventListener('keydown', function (event) {
    //     if (event.key === "ArrowRight") {
        //         console.log("->")
        //     }
        //     else if (event.key === "ArrowLeft") {
            //         console.log("<-")
            //     }
            // })
            
            // let ballAnimationID, playerAnimationID
            
            // let maxRight = canvas.clientWidth - player.clientWidth
            // console.log(player)
            // function movePlayer() {
                //     playerAnimationID = window.requestAnimationFrame(movePlayer)
                // }
                // // window.requestAnimationFrame(movePlayer)
                
                // console.log(ball)
                // function moveBall() {
//     ballAnimationID = window.requestAnimationFrame(moveBall)
// }
// // window.requestAnimationFrame(moveBall)

window.addEventListener("load", () => {
    console.log("PAGE LOADED")
    draw()
});

function draw() {
    console.log("DRAW STARTED")
    const canvas = document.querySelector(".playground")
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")
    }
}