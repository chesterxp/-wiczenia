var szablon = 
    
'    {{#each book}}'+
'    <div class="listOfBooks">'+
'      <div class="book">'+
'        <div class="title">{{title}}</div>'+
'        <div class="author">{{author}}</div>'+
'        <div class="publish">{{publish}}</div>'+
'        <div class="publishingHouse">{{publishHouse}}</div>'+
'        {{#if copy}}'+
'        <div class="title">ilosc kopi wynosi: {{copy}}</div>'+  
'        {{else}}'+
'        <div class="title">Brak wolnych egzemplarzy</div>'+  
'        {{/if}}'+   
'      </div>'+
'    </div>'+
'    {{/each}}';
    

var kompilator = Handlebars.compile(szablon);


var dane = {
  book : [
    {title: 'Pan Tadeusz', author: 'Adam Mickiewicz', publish:2016, publishHouse:'PWN', copy:10},
    {title: 'Komputeru 2017', author: 'DotNet Killers', publish:2000, publishHouse:'PWN', copy:20},
    {title: 'JavaScripts - new Design', author: 'John Brown', publish:2017, publishHouse:'CSS', copy:0},
    {title: 'Java', author: 'Jan Kowlski', publish:2014, publishHouse:'PWN', copy:30},
    {title: 'CSS', author: 'Marian Zawadzki', publish:2017, publishHouse:'MArki', copy:40},
    {title: 'HTML', author: 'Rysiek Komorowski', publish:2015, publishHouse:'PWN', copy:0},
    {title: 'PHP - Podstawy programowania', author: 'Łukasz Ksiązka', publish:2017, publishHouse:'Ziomki', copy:50}
  ]
};

var html = kompilator(dane);
var wynik = Mustache.render(szablon,dane);

document.getElementById("output").innerHTML = html;
