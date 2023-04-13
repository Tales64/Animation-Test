// let playerState = 'sit'
// const dropdown = document.getElementById('animations');
// dropdown.addEventListener('change', function(event) {
//     playerState = event.target.value;
// })

// const canvas = document.getElementById('canvas1');

// const ctx = canvas.getContext('2d');
// const CANVAS_WIDTH = canvas.width = 600;
// const CANVAS_HEIGHT = canvas.height = 600;

// ===================================================================================================================

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const CANVAS_WIDTH2 = canvas2.width = 800;
const CANVAS_HEIGHT2 = canvas2.height = 700;
let gameSpeed= 10;
let gameFrame = 0;


// let dragonMovement = [{
//     movement: Jump,
//     // gameSpeed2,


// }]


const backgroundLayer1 = new Image();
backgroundLayer1.src = './Assets/Images/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './Assets/Images/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './Assets/Images/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './Assets/Images/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './Assets/Images/layer-5.png';

window.addEventListener('load',function(){
const slider = document.getElementById('slider')
slider.value = gameSpeed
const ShowSpeed = document.getElementById('showGameSpeed')
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function(e){
    console.log(e)
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = e.target.value
}
)

class Layer {
constructor(image, speedModifier){
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier
        if (this.x <= -this.width){
            this.x = 0;
        }
       
        this.x = Math.floor(this.x - this.speed);
        // this.x = gameFrame * this.speed % this.width;

    }
    draw(){
        ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx2.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

// 
const layer1 = new Layer(backgroundLayer1, 0.3);
const layer2 = new Layer(backgroundLayer2, 0.5);
const layer3 = new Layer(backgroundLayer3, 0.75);
const layer4 = new Layer(backgroundLayer4, 1.25);
const layer5 = new Layer(backgroundLayer5, 2.0);

const gameObjects = [layer1,layer2,layer3,layer4,layer5];

function animate(){
    ctx2.clearRect(0,0,CANVAS_WIDTH2,CANVAS_HEIGHT2);
    gameObjects.forEach(object =>{
        object.update();
        object.draw();
    });
    gameFrame--;
    requestAnimationFrame(animate);
};
animate();
})
// ===================================================================================================================

// const playerImage = new Image();
// playerImage.src = './Assets/Images/Dragon (2).png';
// const spriteWidth = 573;
// const spriteHeight = 582;


// let gameFrame = 0;
// const staggerFrames = 5;
// const spriteAnimations =[]
// const animationStates= [
//     {name: "idle", 
//     frames:12, 
// },
// {name:"jump",
// frames:7,  
// },
// {name:"fall",
// frames:7, 
// } ,
// {name:"run",
// frames:9, 
// } ,
// {name:"dizzy",
// frames:11, 
// } ,
// {name:"sit",
// frames:5, 
// } ,
// {name:"roll",
// frames:7, 
// } ,
// {name:"bite",
// frames:7, 
// } ,
// {name:"ko",
// frames:12, 
// }, 
// {name:"gethit",
// frames:4, 
// } 
// ]

// animationStates.forEach((state, index) => {
//     let frames ={
//         loc:[]
//     }
//     for (let j = 0; j < state.frames; j++) {
//         let positionX = j * spriteWidth;
//         let positionY = index * spriteHeight;
//         frames.loc.push({x:positionX, y: positionY})
//     }
//     spriteAnimations[state.name]= frames;
// });
// console.log(spriteAnimations)
// function animate (){
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
//     let frameX = spriteWidth * position;
//     let frameY = spriteAnimations[playerState].loc[position].y;
    
//     ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    
//     gameFrame++;
//     requestAnimationFrame(animate)
// }

// animate();

