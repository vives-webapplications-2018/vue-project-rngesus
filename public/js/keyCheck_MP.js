document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 82) {
        chooseUser('rock');
        //alert("Rock works")
    } else if (keyCode == 80) {
        chooseUser('paper');
    } else if (keyCode == 83) {
        chooseUser('scissors');
    } else if (keyCode == 13) {
        publish();
        e.preventDefault();
        document.getElementById('payload').value = null;
    }
}