var flaga = false;
var color = "#000";
var size = "10px"

function draw(e){
    if(flaga == false){
        return;
    }
    var div = document.createElement('div');
    div.className = "point";
    var x = e.clientX;
    var y = e.clientY;
    div.style.top = y + 'px';
    div.style.left = x + 'px';
    div.style.background = color;
    document.body.appendChild(div);
}

function active(){
    flaga = !flaga;
}

var kolor = document.getElementsByClassName('kolory');

kolor.addEventListener('click', takeColor);

function takeColor(){
    // var x = this.id;
    // console.log(x); 
    console.log('test');
}


document.body.addEventListener('mousemove', draw);
document.body.addEventListener('mousedown', active);
document.body.addEventListener('mouseup', active);