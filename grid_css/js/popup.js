var btn = document.getElementById('btnx');

function test(e){
	var wynik = document.querySelector('.wynik');
	// wynik.css('border','2px solid black');
	// wynik.className += " wynik2";
	// console.log(wynik.className.split(","));
	// var x = wynik.classList.contain('wynik');
	// if(wynik.className.indexOf('wynik') !== -1){
	// 	console.log('Posiada klase: ', wynik.className);
	// }
	// console.log(wynik.classList.contain('wynik'));

	var x = wynik.id;
	console.log(x);
	// var y = btn.getAttribute('id');
	// var y = btn.innerHTML;
	// var y = btn.tagName;

	var y = btn.getAttribute('id');
	wynik.innerHTML = "<strong>Drobna zmiana</strong>";
	console.log(y);
}

btn.addEventListener('click',test);


var link = document.getElementById('linkk');
var b = link.getAttribute('href');
link.setAttribute('href','http://www.wp.pl');
link.setAttribute('data-text','testowy link');
link.removeAttribute('id');

console.log(b);