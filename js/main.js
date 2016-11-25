var hero;
function startGame(){
    console.log("start game");
    var sheet = new createjs.SpriteSheet(queue.getResult('heroSheet'));
    console.log(sheet);
    hero = new createjs.Sprite(sheet, "right");
    hero.direction="right";

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', tock);
    stage.addChild(hero);
    createjs.Sound.play('audioCI');
}

function moveHero(){
    if(hero.direction==="right"){
        hero.x++;
        if(hero.x+62 > stage.canvas.width){
            hero.direction="down";
            hero.gotoAndPlay('down');
            createjs.Sound.play('audioBoing');
        }
    } else if(hero.direction==="down"){
        hero.y++;
        if(hero.y+56 > stage.canvas.height){
            hero.direction="left";
            hero.gotoAndPlay('left');
            createjs.Sound.play('audioBoing');
        }
    }
}
function tock(e){
    moveHero();
    stage.update(e);
}