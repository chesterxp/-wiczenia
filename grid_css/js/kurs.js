// // var box = document.querySelectorAll('li');
// // box.forEach(function(el){
// //     // el.setAttribute('title', "domy");
// //     el.style.backgroundColor = "pink";
// // });
// var list = document.querySelector('.list');
// list.classList.add('preety');
// var li = list.querySelectorAll('li');
// li[0].classList.add('first');
// li[li.length-1].classList.add('last');
// li[2].style.backgroundColor = "red";
// li[2].innerText = "Jestem czerwonym elementem";
// li[3].style.setProperty("background-color",'green');

// // list.forEach(function(el) {
// //     el.setAttribute("title", "dom");
// // });

// // for (var i = 0; i < li.length; i++){
// //     li[i].setAttribute('title', "testowa");
// // }
// li.forEach(function(el){
//     el.setAttribute('title', "domy");
//     // el.style.backgroundColor = "pink";
// });
// // li.forEach(dom);
// //list2
// var list2 = document.getElementById('list2');
// var list2Li = list2.querySelectorAll('li');
// var trzeci = list2Li[2];
// console.log(list2Li[0]);
// console.log(list2Li[list2Li.length - 1]);
// console.log(trzeci);
// alert('dom')
var p = document.querySelector('#text');
var spr = p.firstChild;
spr.background = "black";

var box = document.getElementById('nr1');
var pp = box.querySelectorAll('p');
var x = box.firstChild;
pp[0].style.border = "1px solid red";

console.log(pp);

// var list = document.querySelector('.list');
// var li = list.querySelector('li');
// var last = document.querySelector('#last');
// last.style.background = 'red';
// last.style.width = '200px';
// var foto1 = document.querySelector('#foto1');
// foto1.style.width = list.clientWidth + 100 + "px";
// foto1.width = "1000px";
// var x = foto1.width;
// console.log(x);

var btn = document.querySelector('.btn');


// btn.addEventListener('click', show);
// var b = document.querySelectorAll

// function show(){
//     var self = this;
//     var box = btn.parentElement.find('.tekxt');

//     box.classList.add('show');
// }

// btn.addEventListener('click',show)

var btn2 = $('.btn');

btn2.on('click', show);

function show(){

    console.log('test');

    var self = $(this);
    var drugi = $('.drugi');

    self.closest('.boxy').find('.tekst').slideUp(500);
    self.closest('.boxy').find('.drugi').text('(Niewidoczne)');

    self.closest('.box').find('.tekst').slideDown(500);
    self.closest('.box').find('.drugi').text('(Widoczne)');

}

var boxy = $('.boxy');  

var htm = '<div class="box">'+
        '<div class="tytul">'+
            "<p class="pierwszy">Przykładowy tytuł modułu</p>"+
            "<p class="drugi">(Niewidoczne)</p>"+
            "<div class="btn">Kliknij</div>"+
        "</div>"+

        "<div class="tekst">"
            "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quibusdam quaerat placeat minima maxime asperiores aliquid assumenda facere ipsum dolore quas laudantium quos nulla nisi saepe dolorem, eligendi non dignissimos.</p>"
        "</div>"
    "</div>"

var newEle = document.createElement('div');
newEle.classList.add('box');
newEle.setAttribute('title', 'Nowy Element');
newEle.html(htm);

boxy.append(newEle);


