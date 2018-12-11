function countDown(secs, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = secs;
    if (secs < 1) {
        clearTimeout(timer);
        element.innerHTML = 'on()';
    }
    secs--;
    var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
}
countDown(10, "status");