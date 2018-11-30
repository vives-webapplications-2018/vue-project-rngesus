document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 82) {
        app.chooseUser('rock');
        publish('rock_grhgihrwhbuwr');
        //alert("Rock works")
    } else if (keyCode == 80) {
        app.chooseUser('paper');
        publish('paper_grhgihrwhbuwr')
    } else if (keyCode == 83) {
        app.chooseUser('scissors');
        publish('scissors_grhgihrwhbuwr')
    } else if (keyCode == 13) {
        publish();
        document.getElementById('payload').value = ' ';
    }
}