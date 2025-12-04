console.log(" JavaScript carregado com sucesso!");

document.addEventListener('DOMContentLoaded', function() {
    
    console.log(" DOM completamente carregado");
    
    
    const titulo = document.querySelector('.apresentacao__conteudo__titulo');
    if (titulo) {
        titulo.addEventListener('mouseenter', function() {
            this.style.color = '#A27B5C'; 
            this.style.transition = 'color 0.3s';
        });
        
        titulo.addEventListener('mouseleave', function() {
            this.style.color = ''; 
        });
    }
    
 
    const footer = document.querySelector('.rodape');
    if (footer) {
        footer.addEventListener('click', function() {
            alert('Obrigada por visitar meu portfólio!!');
        });
    }
   
    const linksMenu = document.querySelectorAll('.cabecalho__menu__link');
    linksMenu.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    

    const imagem = document.querySelector('.apresentacao__imagem');
    if (imagem) {
        let clicks = 0;
        imagem.addEventListener('click', function() {
            clicks++;
            console.log(`Imagem clicada ${clicks} vezes`);
       
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
   
    if (footer) {
        const textoOriginal = footer.textContent;
        footer.addEventListener('mouseenter', function() {
            this.innerHTML = '<p><strong>💻 Feito com HTML, CSS e JavaScript</strong></p>';
        });
        
        footer.addEventListener('mouseleave', function() {
            this.innerHTML = '<p><strong>Desenvolvido por Karollyne Santos</strong></p>';
        });
    }
});


function mostrarDataHora() {
    const agora = new Date();
    console.log(`📅 Página carregada em: ${agora.toLocaleString('pt-BR')}`);
}


window.onload = mostrarDataHora;