const buttonsNumber = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "q":
            let zombie = new Audio("./assets/audios/zombie.mp3");
            zombie.play();
            break;
        case "w":
            let sheep = new Audio("./assets/audios/sheep.mp3");
            sheep.play();
            break;
        case "e":
            let villager = new Audio("./assets/audios/villager.mp3");
            villager.play();
            break;
        case "r":
            let pig = new Audio("./assets/audios/pig.mp3");
            pig.play();
            break;
        case "t":
            let creeper = new Audio("./assets/audios/creeper.mp3");
            creeper.play();
            break;

        default: console.log(key);
    }
}

for (let i = 0; i < buttonsNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    })
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}