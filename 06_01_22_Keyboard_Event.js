
function up(){
    let element = document.getElementById('doraemon')
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function down() {
    var element = document.getElementById('doraemon')
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function left(){
    var element = document.getElementById('doraemon')
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function right(){
    var element = document.getElementById('doraemon')
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function move(evt){
    switch (evt.keyCode){
        case 37:
            left();
            break;
        case 39:
            right();
            break;
        case 38:
            up()
            break;
        case 40:
            down()
            break;
    }
}
function go(){
    window.addEventListener('keydown', move);
}
