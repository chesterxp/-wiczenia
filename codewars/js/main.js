//wyciaganie z bazy danych

// var data = {
// 	english: 'Welcome',
// 	czech: 'Vitejte',
// 	danish: 'Velkomst',
// 	dutch: 'Welkom',
// 	estonian: 'Tere tulemast',
// 	finnish: 'Tervetuloa',
// 	flemish: 'Welgekomen',
// 	french: 'Bienvenue',
// 	german: 'Willkommen',
// 	irish: 'Failte',
// 	italian: 'Benvenuto',
// 	latvian: 'Gaidits',
// 	lithuanian: 'Laukiamas',
// 	polish: 'Witamy',
// 	spanish: 'Bienvenido',
// 	swedish: 'Valkommen',
// 	welsh: 'Croeso'
// };

// function greet(language){
// 	var welcome = "Welcome";
// 	for (var i in data){
// 		if (i === language){
// 			welcome = data[i];
// 		}
// 	}
// 	return welcome;
// }

// console.log(greet('hh'));


// function welcomee(lang){
// 	return data[lang] || 'Welcome';
// }

// console.log(welcomee('ggg'));

// //------------------------------------------------
// var $screening = $('.screening');
// if($screening)


var button = $('#zmieniacz');

button.click(function(){
	var text = button.text();
	if (text === "Pokaż"){
		text = "Schowaj";
	}
	else{
		text = "Pokaż";
	}
	$(this).text(text);
})