function playSound(e) {
    console.log(e);
    if (e == "w") {
        var audio = new Audio("./sounds/crash.mp3");
    }
    else if (e == "a") {
        var audio = new Audio("./sounds/kick-bass.mp3");
    }
    else if (e == "s") {
        var audio = new Audio("./sounds/snare.mp3");
    }
    else if (e == "d") {
        var audio = new Audio("./sounds/tom-1.mp3");
    }
    else if (e == "j") {
        var audio = new Audio("./sounds/tom-2.mp3");
    }
    else if (e == "k") {
        var audio = new Audio("./sounds/tom-3.mp3");
    }
    else if (e == "l") {
        var audio = new Audio("./sounds/tom-4.mp3");
    }
    if (audio) {

        audio.play();
        buttonAnimation(e);

    }
}

function buttonAnimation(clickedButtonClass) {

    var activeButton = document.querySelector("." + clickedButtonClass);
    activeButton.classList.add("pressed");

    setTimeout(function () {

        activeButton.classList.remove("pressed");

    }, 100);
}

//keyboard interaction
document.addEventListener("keypress", function (event) {

    playSound(event.key);

});

//mouse interaction
var clickableButtons = document.querySelectorAll(".drum");

for (var i = 0; i < clickableButtons.length; i++) {
    clickableButtons[i].addEventListener("click", function () {

        playSound(this.textContent);

    })
}

