console.log('test');

// var image = document.querySelector('img');

// var observer = new IntersectionObserver(function (entries){
//     entries.forEach(function(entry) {
//         if(entry.isIntersecting){
//             console.log('jest w viewport');
//             // observer.disconnect();
//             image.src = image.dataset.src;
//         }
//     })
// })

// observer.observe(image);


// const myImg = document.querySelector('img');

// observer = new IntersectionObserver(function(entries) {
//     entries.forEach(function(element){
//         if(element.isIntersecting){
//             myImg.src = myImg.dataset.src;
//             console.log('intersectionObserver')
//         }
//     })

  

// });

// observer.observe(myImg);

const myImgs = document.querySelectorAll('img');

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log('in the view');
      
    } else {
      console.log('out of view');
    }
  });
});

myImgs.forEach(image => {
  observer.observe(image);
  console.log(image.src);
});