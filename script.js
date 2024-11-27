let yesButton = document.querySelector('#yes');
let noButton = document.querySelector('#no');

yesButton.addEventListener('click', function(e){
    location.href = 'yes.html'
});

function moveNoButton(){
        let x = Math.random();
        let y = Math.random();
        
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
    
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
    
        noButton.style.position = 'absolute';
        noButton.style.left = `${maxX * x}px`; 
        noButton.style.top = `${maxY * y}px`;  
    
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

// clearTimeout(moveFunc);

setTimeout(function(){
    noButton.removeEventListener('mouseover', moveNoButton);
    noButton.removeEventListener('click', moveNoButton);
    noButton.addEventListener('click', (e) => (location.href = 'no.html'));
}, 20000);
