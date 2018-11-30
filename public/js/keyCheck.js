document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 82) {
        chooseUser('rock');
    } else if (keyCode == 80) {
        chooseUser('paper');
    } else if (keyCode == 83) {
        chooseUser('scissors');
    }
}