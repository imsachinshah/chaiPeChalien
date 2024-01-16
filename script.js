let yesButton = document.querySelector('#yes');
let noButton = document.querySelector('#no');

yesButton.addEventListener('click', function(e){
    location.href = 'yes.html'
});

function moveNoButton(){
    let x = Math.random();
    let y = Math.random();
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${(window.innerWidth - noButton.offsetWidth) * x}px`
    noButton.style.top = `${(window.innerHeight - noButton.offsetHeight) * y}px`
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

// clearTimeout(moveFunc);

setTimeout(function(){
    noButton.removeEventListener('mouseover', moveNoButton);
    noButton.removeEventListener('click', moveNoButton);
    noButton.addEventListener('click', (e) => (location.href = 'no.html'));
}, 20000);
