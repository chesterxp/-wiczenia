//alert('dom');

//var book = {
//  title: 'Pan Tadeusz', author: 'Adam Mickiewicz', publish:2016, publishHouse:'PWN',
//  title: 'Komputeru 2017', author: 'DotNet Killers', publish:2000, publishHouse:'PWN',
//  title: 'JavaScripts - new Design', author: 'John Brown', publish:2017, publishHouse:'CSS',
//  title: 'Java', author: 'Jan Kowlski', publish:2014, publishHouse:'PWN',
//  title: 'CSS', author: 'Marian Zawadzki', publish:2017, publishHouse:'MArki',
//  title: 'HTML', author: 'Rysiek Komorowski', publish:2015, publishHouse:'PWN',
//  title: 'PHP - Podstawy programowania', author: 'Łukasz Ksiązka', publish:2017, publishHouse:'Ziomki'
//
//};
//
////var template = 'test';
//
//
//
//var template = 
//    '{{#each book}}'+
//    '<div class="listOfBooks">'+
//    '<div class="book">'+
//     ' <div class="title">{{title}}</div>'+
//      '<div class="author">{{author}}</div>'+
//      '<div class="publish">{{publish}}</div>'+
//      '<div class="publishingHouse">{{publishHouse}}</div>'+
//    '</div>'+
//  '</div>'+
//  '{{/each}}';

// var zawartosc = Mustache.render(template,book);

// document.getElementById('books').innerHTML = zawartosc;

// function numberToPower(number, power){
//   var result = number;
//   for (var i = 0; i<power; i++){
//     result *= number;
//   }
//   return result;
// }

// console.log(numberToPower(3,3));

// function booleanToString(b){
//   return String(b);
// }

// console.log(booleanToString(true));


//function formatMoney(amount){
//  var StringAmount = String(amount);
//  // console.log(StringAmount);//233,4
//  var indexOf = StringAmount.indexOf('.');
//  // console.log(indexOf);//3
//  var newAmunt = '';
//
//
//  if(indexOf==-1){
//    newAmunt = '$'+String(amount) + '.00';
//  }
//  else{
//    var cents = StringAmount.slice(indexOf+1);
//    console.log(cents);//3
//    if (cents.length==1){
//      newAmunt = '$'+String(amount) + '0';
//    }
//  }
//  return newAmunt;
//
//}
//
//console.log(formatMoney(233.2));


// var xx = 34.55;

// var yy = String(xx);
// var zz = '$'+yy;
// console.log(yy.indexOf('.'));
// console.log(zz);

//function formatMoney(amount){
//  var StringAmount = String(amount);
//  var indexOf = StringAmount.indexOf('.');
//  var newAmunt = '';
//  var cents = StringAmount.slice(indexOf+1);
//
//  if(indexOf==-1){
//    newAmunt = '$'+String(amount) + '.00';
//  }
//  else if(cents.length==1){
//      newAmunt = '$'+String(amount) + '0';
//    }
//  else{
//    newAmunt = '$'+String(amount);
//  }  
//  return newAmunt;
//}
//
//console.log(formatMoney(233));
//console.log(formatMoney(233.1));
//console.log(formatMoney(233.12));
//
//
//function formatMoney2(amount){
//  return '$' + amount.toFixed(2);
//}
//
//console.log(formatMoney2(233));
//console.log(formatMoney2(233.1));
//console.log(formatMoney2(233.12));



var x = '-3';

var y = x.slice(1);
console.log(x);
console.log(y);

//function invert(array) {
//  var newArray = []; 
//   array.map(function(ele){
//     var index = String(ele).indexOf('-');
//     if(ele == 0){
//       newArray.push(ele);
//     }
//     else if(index!=-1 ){ 
//       newArray.push(Number(String(ele).slice(1)));
//     }
//     else{
//       newArray.push(Number("-"+String(ele)));
//     }
//   });
//  return newArray;
//}


function invert(array) {
   return array.map( function(ele){
     if (ele === 0){
       return ele;
     }
     else{
       return -ele;
     }
   });
}


console.log(invert([0,-2,3,4,5]));