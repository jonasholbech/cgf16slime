var stage, preloadText, queue;

function preload(){
    console.log("preload started");
    stage = new createjs.Stage("myc");
    preloadText = new createjs.Text("bla", "60px verdana", "#000");
    preloadText.textAlign="center";
    preloadText.textBaseline="middle";
    preloadText.x=stage.canvas.width/2;
    preloadText.y=stage.canvas.height/2;
    stage.addChild(preloadText);
    queue = new createjs.LoadQueue(true);
    queue.installPlugin(createjs.Sound);
    queue.loadManifest([
        "js/main.js",
        "spritesheets.zip",
        {
            "id":"audioBass", "src":"bass.mp3"
        },
        {
            "id":"audioBoing", "src":"boing.mp3"
        },
        {
            "id":"audioCI", "src":"ci.mp3"
        },
        {
            "id": "heroSheet", "src":"spritesheets/Animations/slime.json"
        }
    ]);
    queue.addEventListener('progress', progress);
    queue.on('complete', gameLoaded);
}

function progress(e){
    //console.log(e.progress);
    preloadText.text = Math.round(e.progress*100)+"%";
    stage.update();
}

function gameLoaded(){
    stage.removeChild(preloadText);
    stage.update();
    //createjs.Sound.play('audioCI');
    startGame();

}
window.addEventListener('load', preload);