document.onkeydown = function (e) {

    if (e.key == "w") {
        var audio = new Audio("./sounds/crash.mp3");
    }
    else if (e.key == "a") {
        var audio = new Audio("./sounds/kick-bass.mp3");
    }
    else if (e.key == "s") {
        var audio = new Audio("./sounds/snare.mp3");
    }
    else if (e.key == "d") {
        var audio = new Audio("./sounds/tom-1.mp3");
    }
    else if (e.key == "j") {
        var audio = new Audio("./sounds/tom-2.mp3");
    }
    else if (e.key == "k") {
        var audio = new Audio("./sounds/tom-3.mp3");
    }
    else if (e.key == "l") {
        var audio = new Audio("./sounds/tom-4.mp3");
    }
    audio.play();
};



