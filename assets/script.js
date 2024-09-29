// caminho das fotos
const images = [
    'img.jpg',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg',
    'img6.jpeg',
    'img7.jpeg',
    'img8.jpeg',
    'img9.jpeg',
    'img10.jpeg'
];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById('slideshow');
    // imgElement.style.opacity = 0; // Adiciona efeito de transição
    setTimeout(() => {
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % images.length;
    }); // Espera a animação de fade out terminar
}

setInterval(changeImage, 5000); // Troca a cada 3 segundos

// Inicializa com a primeira imagem
changeImage();

function calculateTimeTogether() {
    // trocar a data, ano, mês e dia
    const startDate = new Date('2023-10-22T00:00:00'); // Data de início do relacionamento
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('time-together').innerText =
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(calculateTimeTogether, 1000);

function createHeart() {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');

    // Define uma posição horizontal aleatória
    heart.style.left = Math.random() * 100 + 'vw';

    // Define uma posição vertical aleatória inicial
    heart.style.top = Math.random() * 100 + 'vh';

    // Define uma duração de animação aleatória
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    // Define um tamanho aleatório para o ícone
    heart.style.fontSize = Math.random() * 2 + 1 + 'rem';

    document.querySelector('.hearts-container').appendChild(heart);

    // Remove o coração após o tempo da animação para evitar acumulação
    setTimeout(() => {
        heart.remove();
    }, 5000); // Tempo máximo da animação
}

// Cria um coração a cada 300 milissegundos
setInterval(createHeart, 300);

document.getElementById('background-music').volume = 0.5;
