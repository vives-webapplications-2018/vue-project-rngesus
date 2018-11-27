document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 82) {
        choose('rock');
    } else if (keyCode == 80) {
        alert("You hit the P key.");
    } else if (keyCode == 83) {
        alert("You hit the S key.");
    }
}