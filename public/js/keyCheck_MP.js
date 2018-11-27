document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 82) {
        app.publish('rock_grhgihrwhbuwr');
    } else if (keyCode == 80) {
        app.publish('paper_grhgihrwhbuwr');
    } else if (keyCode == 83) {
        app.publish('scissors_grhgihrwhbuwr');
    }
}