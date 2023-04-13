/**  @type {HTMLCanvasElement} */
const canvas3 = document.getElementById('canvas3')
const ctx3 = document.getContext('2d')
CANVAS_WIDTH3 = canvas3.width = 500;
CANVAS_HEIGHT3 = canvas3.height = 1000;

enemy1 = {
    x: 10,
    y: 50,
    width: 100,
    height: 100,

}

function animate(){
    ctx3.clearRect(0,0,CANVAS_WIDTH3,CANVAS_HEIGHT3);
    enemy1.x++;
    enemy1.y++;
    ctx3.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
}
animate();