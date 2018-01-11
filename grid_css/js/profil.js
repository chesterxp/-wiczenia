var class_profile = $('.profile_elem');

var x = class_profile.attr('class').split(' ');

x.filter(function(el, i){
    if(el.match(/GR[0-9]/g)){
        var xx = el;
        console.log(xx)
    }
})

console.log(x);