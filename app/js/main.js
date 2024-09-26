function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

$('.write__body-item-bot-block-info').on('click', function(e){
    $(this).prev('.write__body-item-bot-block-desc').toggleClass('active')
})
var splide = new Splide( '.splide', {
    arrows : false,
    pagination: false
  } );
  
  splide.mount();