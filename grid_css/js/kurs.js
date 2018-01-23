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

// console.log(pp);

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
var htm = '<div class="tytul">'+
            '<p class="pierwszy">Przykładowy tytuł modułu</p>'+
            '<p class="drugi">(Niewidoczne)</p>'+
            '<div class="btn">Kliknij</div>'+
        	'</div>'+
        	'<div class="tekst">'+
	            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quibusdam quaerat placeat minima maxime asperiores aliquid assumenda facere ipsum dolore quas laudantium quos nulla nisi saepe dolorem, eligendi non dignissimos.</p>'+
	        '</div>';
var newEle = document.createElement('div');
newEle = $(newEle);
newEle.addClass('box');
newEle.attr('title', 'Nowy Element');
newEle.html(htm);
boxy.append(newEle);




// (function(parent, event) {
//   const observer = new IntersectionObserver((entries) => {
//     event.innerHTML = 'test';
//     entries
//       .filter(entry => entry.isIntersecting)
//       .forEach(entry => event.innerHTML = (entry.target.id + ': ' + entry.intersectionRatio));
//   }, {
//     root: parent,
//     threshold: new Array(101).fill(0).map((zero, index) => {
//       return index * 0.01;
//     })
//   });

//   // var child = $('.child');
//   // observer.observe(child);

//   // for (const position of['Above', 'Giant', 'Below']) {
//   //   const child = document.createElement('div');
//   //   child.id = position;
//   //   child.innerHTML = position;
//   //   parent.appendChild(child);

//   //   observer.observe(child);
//   // }
// })(document.getElementById('parent'), document.getElementById('event'));


// $('.lazy').Lazy();


// $('.lazy').Lazy({
//     // your configuration goes here
//     scrollDirection: 'vertical',
//     effect: 'fadeIn',
//     visibleOnly: true,
//     onError: function(element) {
//         console.log('error loading ' + element.data('src'));
//     }

// });

var zad2 = $('#zad2');
var ele = $('#zadanie2');
var numberOf = 0;

zad2.on('click', function(){
    console.log('test');
    for(var i = 0; i< 5; i++){
        numberOf++;
        var elem = '<div class="elem">Inny Numer '+ numberOf +' </div>';
        ele.before(elem);
    }
    
});

$('#zad3').on('click', function(){
    $('#doWywalenia').remove();
    var eleme = $('.elem');
    eleme.first().remove();
})

$('#zad4').on('click', function(){
    $('.mainTitle').replaceWith('<h1 class="bigTitle">Zabawa z JQuery :)</h1>');
})

var list2 = $('.list2');
var numOfList = 0;

for(var i=1; i<6; i++){
    var lielement = '<div></div>';
    lielement = $(lielement);
    lielement.addClass('liElementy');
    lielement.attr('title','Jestem numerem '+i);
    lielement.text('Element :'+i);
    list2.append(lielement);
}
$('#delete2').on('click', function(){
    var liElementy = $('.liElementy');
    if(liElementy.length == 0){
        alert('nie ma co usunąć')
    }
    else{
        $('.liElementy').remove();
    }
    
});

// document.addEventListener("DOMContentLoaded", function(event) {
    
//         console.log("DOM został wczytany");
//         console.log("Tutaj dopiero wyłapujemy elementy");
    
//     });

// $('body').on('click',function(){
//     console.log($(this).text());
// });


var rtc = document.querySelector('.rtc ul');
var r = rtc.querySelectorAll('li');

var reklama = document.createElement('div');
reklama.classList.add('dom');
reklama.innerHTML = 'reklamaaaaaaaaaaaaaaaa';

// r.forEach(function(e, i) {
  
//     if(i%3 == 0 ){
//         console.log(r[i]);
//         r[i].appendChild(reklama);
//     }
    
// });
// for(var i=1; i< r.length; i++){
//     if(i%3 == 0 ){
//         console.log(r[i]);
//         r[i].appendChild(reklama);
//     }
// }


// var rtc = $('.rtc ul');
// var r = rtc.find('li');
// var numbeOfnotice = r.length;

// // reklama = $(reklama);
// // reklama.text('Reklamaaaa!!!!!!');

// // console.log(reklama.html())
// // var reklama = '<div class="dom">Reklamaaaaaaaaa</div>';

// // console.log(r);

// for(var i=1;i<numbeOfnotice;i++){
//     if (i%3==0){
//         // console.log(r[i-1]);
//         var reklama = document.createElement('li');
//         reklama.classList.add('dom');
//         reklama.innerText = "Reklamaaaa!!!!!!";
//         r[i-1].after(reklama);
//     }
// }

// function addAD(){

// }

//dodaje sie notatka
//numbeOfnotice zwiększa sie
//odpala sie funkcja wrzucająca reklame
//----------------------------------------------------------------

var r = $('.rtc ul').find('li');
console.log(r.length);
var tabela = r.toArray().reverse();
console.log(tabela)

var numbeOfnotice = r.length;
var coIleSlajdow = 10;

checkNote();

function checkNote(){
    var xxx = numbeOfnotice%coIleSlajdow;
    addAD(xxx);
    for(var i=xxx+1;i<numbeOfnotice-xxx;i++){
        if (i%coIleSlajdow==0){
            addAD(i+xxx);
        }
    }
}

function addAD(num){
    var reklama = document.createElement('li');
        reklama.classList.add('domy');
        reklama.innerText = "Reklama";
        r[num].before(reklama);
}


//funkcja doczytujaca dodaje numbeOfnotice+
$('.btn5').on('click', function(){
    
    var li = '<li class="dom">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, perferendis. '+ (numbeOfnotice +1)+'</li>'
    numbeOfnotice ++;

    r = $('.rtc ul').find('li');
    r.first().before(li);

    if(numbeOfnotice%coIleSlajdow == 0){
        addNewAD(numbeOfnotice);
    }
})

function addNewAD(numbeOfnotice){
    r = $('.rtc ul').find('li');
    var reklama = document.createElement('li');
        reklama.classList.add('domy');
        reklama.innerText = "Reklama";
        r.first().before(reklama);
}


//gazeta_rtc2012_body