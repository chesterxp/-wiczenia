var flaga = false;
var color = "#000";
var size = "10";
var board = $('.board');
// var marginBoard = board.css('border-width');
// var marginBoard = 0;
// var border = parseInt(marginBoard);
var border = 0;
var leftBoardStart = board.offset().left + border;
var leftBoardEnd = leftBoardStart + board.width()- border;
var topBoardStart = board.offset().top + border;
var bottomBoardEnd = topBoardStart + board.height() - border;

// console.log(border);

function draw(e){
    if(flaga == false){
        return;
    }
    var div = document.createElement('div');
    div.className = "point";
    var x = e.clientX;
    var y = e.clientY;
    if( x > leftBoardStart && x < leftBoardEnd && y > topBoardStart && y < bottomBoardEnd){
        div.style.top = y + 'px';
        div.style.left = x + 'px';
        div.style.background = color;
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        board.append(div);
    }
    
}

function active(){
    flaga = true;
}
function deactive(){
    flaga = false;
}

$('.kol').on('click', function(){
    var x  = $(this).attr('id');
    color = x;
});

$('.gry').on('click', function(){
    var siz = $(this).attr('id');
    size = siz;
});



document.body.addEventListener('mousemove', draw);
document.body.addEventListener('mousedown', active);
document.body.addEventListener('mouseup', deactive);