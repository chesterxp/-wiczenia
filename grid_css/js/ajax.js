// alert('test')


//load method
// $('#result').load('../test3.html', function(
//     responseTxt, statusTxt, xhr){
//         if(statusTxt  == "success"){
//             alert('It went fine')
//         } 
//         else if (statusTxt  == "error"){
//             alert('Error');
//         }
// });


//get method
// $.get('../test.html', function(data){
//     $('#result').html(data);
// })

//getJSON method
// $.getJSON('../user,json', function(data){
//     $.each(data, function(i, user){
//         $('#user').append('<li>' + user.firstName + '</li>');
//     });   
// });

//ajax
var dane;

$.ajax({
    method: "GET",
    url: 'http://api.gazeta.pl/rtc/v1/149625/19979498/entries.servlet?mobi=0&asc=1&from=0&withPowerEntry=false&showVoteButtons=true&apikey=fc3d4db6edee42cca2d04c3005e118ed',
    dataType: 'json',
    success: function(data){
        console.log('działa');
        console.log(data);

        $.map(data, function(post, i){
                    if(i == 3){
                        $('#result').append('<h1> Reklama  007 </h1>')
                    }
                    if(i == 6 ){
                        $('#result').append('<h1> Reklama  091</h1>')
                    }
        
                    if(i> 6 && i%5 == 0){
                        $('#result').append('<h1> Reklama 001</h1>')
                    }
                    var htm = '<div class="note">'+ post.body +'</div> ';
                    $('#result').append(htm);
                })
    },
    error:function(){
		alert('blad');
    }
});
    // .done(function(data){
    //     console.log(data.length);
    //     $.map(data, function(post, i){
    //         if(i == 3){
    //             $('#result').append('<h1> Reklama  007 </h1>')
    //         }
    //         if(i == 6 ){
    //             $('#result').append('<h1> Reklama  091</h1>')
    //         }

    //         if(i> 6 && i%5 == 0){
    //             $('#result').append('<h1> Reklama 001</h1>')
    //         }
    //         var htm = '<div class="note">'+ post.body +'</div> ';
    //         $('#result').append(htm);
    //     })
    // });


//http://api.gazeta.pl/rtc/v1/149625/19979498/entries.servlet?mobi=0&asc=1&from=0&withPowerEntry=false&showVoteButtons=true&apikey=fc3d4db6edee42cca2d04c3005e118ed



