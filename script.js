const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((abacate) => {
abacate.forEach( (entry) => {
    if(entry.isIntersecting) {
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
    }
})

});


elements.forEach( (element) => myObserver.observe(element));



function mudarImagem(imagem) {
    imagem.src = 'imagem2.png';
}


function mudarOutraImagem(imagem) {
    imagem.src = 'imagem1.png';
}




const typed = new Typed (".auto-type",{
    strings: ["HTML", "CSS", "Javascript"],
    typeSpeed: 120,
    backSpeed: 30,
    loop: true,
    showCursor: false  // Oculta o cursor de digitação
} );








































