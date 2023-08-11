function playSound(e) {
    // console.log('key down');
    // alert(e.key);
    console.log(e);
    if (e.key == "w" || e.srcElement.textContent == "w") {
        var audio = new Audio("./sounds/crash.mp3");
    }
    else if (e.key == "a" || e.srcElement.textContent == "a") {
        var audio = new Audio("./sounds/kick-bass.mp3");
    }
    else if (e.key == "s" || e.srcElement.textContent == "s") {
        var audio = new Audio("./sounds/snare.mp3");
    }
    else if (e.key == "d" || e.srcElement.textContent == "d") {
        var audio = new Audio("./sounds/tom-1.mp3");
    }
    else if (e.key == "j" || e.srcElement.textContent == "j") {
        var audio = new Audio("./sounds/tom-2.mp3");
    }
    else if (e.key == "k" || e.srcElement.textContent == "k") {
        var audio = new Audio("./sounds/tom-3.mp3");
    }
    else if (e.key == "l" || e.srcElement.textContent == "l") {
        var audio = new Audio("./sounds/tom-4.mp3");
    }
    if (audio) { audio.play(); }
}
//keyboard interaction
document.addEventListener("keypress", playSound)

//mouse interaction
var clickableButtons = document.querySelectorAll(".drum");
for (var i = 0; i < clickableButtons.length; i++) {
    clickableButtons[i].addEventListener("click", playSound);
}