const numberOfButtons = document.querySelectorAll(".drum").length;

function playSound(key) {
        switch (key) {
            case "q":
            case "й":
                let zombie = new Audio("./assets/audios/zombie.mp3");
                zombie.play();
                break;
            case "w":
            case "ц":
                let sheep = new Audio("./assets/audios/sheep.mp3");
                sheep.play();
                break;
            case "e":
            case "у":
                let villager = new Audio("./assets/audios/villager.mp3");
                villager.play();
                break;
            case "r":
            case "к":
                let pig = new Audio("./assets/audios/pig.mp3");
                pig.play();
                break;
            case "t":
            case "е":
                let creeper = new Audio("./assets/audios/creeper.mp3");
                creeper.play();
                break;
    
            default: console.log(key);
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});