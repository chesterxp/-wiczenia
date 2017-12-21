// $('#nr1').on('click', function(){
//     var box = $('#box1');
//     box.toggleClass('open');
//     // if(box.has('open')){
//     //     $(this).
//     // }
// });

$('.point').on('click', function(){
    $(this).find('.box').toggle(1000);
});


$('.foto').on('click', function(){
    $(this).toggleClass('bigPicture');
});