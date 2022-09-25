    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    function animaScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
          element.classList.remove(animationClass);
        }
    })
}

animaScroll();

if(target.length){
window.addEventListener('scroll', function(){
    animaScroll();
})
}
