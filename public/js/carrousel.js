// Seleciona o contêiner e as imagens
const carrossel = document.getElementById('carrossel-images');
const images = carrossel.querySelectorAll('img');
const totalImages = images.length;

let currentIndex = 0; // Índice inicial
let interval = 3000; // Tempo entre mudanças (3 segundos)

// Função para alternar imagens
function slideImages() {
  // Incrementa o índice
  currentIndex = (currentIndex + 1) % totalImages;

  // Calcula a nova posição
  const translateX = -currentIndex * 100;

  // Aplica a transformação
  carrossel.style.transform = `translateX(${translateX}%)`;
}

// Inicia o loop
setInterval(slideImages, interval);
