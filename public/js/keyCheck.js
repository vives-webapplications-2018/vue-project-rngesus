document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 82) {
        app.choose('rock');
    } else if (keyCode == 80) {
        app.choose('paper');
    } else if (keyCode == 83) {
        app.choose('scissors');
    }
}