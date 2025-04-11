// ===== CONFIGURAÇÕES (EDITE AQUI) =====
 // Observação: o mês começa em 0, então janeiro=0, fevereiro=1, etc.
 const DATA_INICIO_RELACIONAMENTO = new Date(2021, 1, 16); // Adicionar aqui a data de inicio do relacionamnento

 // Variáveis globais
 let relationshipStartDate = DATA_INICIO_RELACIONAMENTO;
 let heartIntervals = {};

 // Função para mostrar uma página específica
 function showPage(pageNumber) {
     document.querySelectorAll('.page').forEach(page => {
         page.classList.remove('active');
     });
     document.getElementById('page' + pageNumber).classList.add('active');
     
     // Se for a página do coração, recarregar o iframe para garantir que a animação comece
     if (pageNumber === 8) {
         const heartFrame = document.getElementById('python-heart');
         heartFrame.src = heartFrame.src;
     }
     
     // NOVO: Iniciar a animação de corações flutuantes para as páginas 10, 11 e 12
     if (pageNumber === 10 || pageNumber === 11 || pageNumber === 12) {
         // Limpar todos os intervalos de corações existentes
         Object.values(heartIntervals).forEach(interval => clearInterval(interval));
         heartIntervals = {};
         
         // Iniciar a animação para a página atual
         heartIntervals[pageNumber] = startFloatingHearts(pageNumber);
     } else {
         // Para outras páginas, limpar todos os intervalos
         Object.values(heartIntervals).forEach(interval => clearInterval(interval));
         heartIntervals = {};
     }
 }

 // NOVA FUNÇÃO: Criar e animar corações flutuantes
 function startFloatingHearts(pageNumber) {
     const page = document.getElementById(`page${pageNumber}`);
     const heartsContainer = document.getElementById(`hearts-container-${pageNumber}`);
     
     // Limpar corações antigos
     while (heartsContainer && heartsContainer.firstChild) {
         heartsContainer.removeChild(heartsContainer.firstChild);
     }
     
     // Criar novos corações em intervalos regulares
     return setInterval(() => {
         if (!page.classList.contains('active')) return;
         
         // Criar um novo coração
         const heart = document.createElement('div');
         heart.classList.add('floating-heart');
         heart.innerHTML = '❤';
         
         // Variações de cor rosa
         const colors = [
             'rgba(255, 105, 180, 0.4)', // Rosa claro transparente
             'rgba(255, 20, 147, 0.4)',  // Rosa médio transparente
             'rgba(219, 112, 147, 0.4)', // Rosa escuro transparente
             'rgba(255, 182, 193, 0.4)'  // Rosa bebê transparente
         ];
         
         // Tamanho aleatório
         const size = Math.floor(Math.random() * 30) + 15; // 15px a 45px
         
         // Posição aleatória
         const posX = Math.floor(Math.random() * window.innerWidth);
         const posY = Math.floor(Math.random() * window.innerHeight);
         
         // Aplicar estilos
         heart.style.fontSize = `${size}px`;
         heart.style.left = `${posX}px`;
         heart.style.top = `${posY}px`;
         heart.style.color = colors[Math.floor(Math.random() * colors.length)];
         
         // Adicionar à página
         page.appendChild(heart);
         
         // Remover o coração após a animação
         setTimeout(() => {
             if (heart && heart.parentNode) {
                 heart.parentNode.removeChild(heart);
             }
         }, 3000);
         
     }, 500); // Criar um novo coração a cada 500ms
 }

 // Criar estrelas de fundo
 function createStars() {
     const starsContainer = document.getElementById('stars');
     const numberOfStars = 200;

     for (let i = 0; i < numberOfStars; i++) {
         const star = document.createElement('div');
         star.classList.add('star');

         // Tamanho aleatório para as estrelas
         const size = Math.random() * 3;
         star.style.width = size + 'px';
         star.style.

         // Posição aleatória
         star.style.left = Math.random() * 100 + '%';
         star.style.top = Math.random() * 100 + '%';

         // Brilho aleatório
         star.style.opacity = Math.random() * 0.8 + 0.2;

         starsContainer.appendChild(star);
     }
 }

 // Criar meteoros
 function createMeteors() {
     setInterval(() => {
         const meteor = document.createElement('div');
         meteor.classList.add('meteor');

         // Posição inicial aleatória
         const startX = Math.random() * window.innerWidth + window.innerWidth/2;
         const startY = Math.random() * window.innerHeight/2;
         meteor.style.left = startX + 'px';
         meteor.style.top = startY + 'px';

         // Tamanho aleatório
         const size = Math.random() * 150 + 50;
         meteor.style.width = size + 'px';

         // Duração aleatória
         const duration = Math.random() * 2 + 1;
         meteor.style.animationDuration = duration + 's';

         document.body.appendChild(meteor);

         // Remover o meteoro após a animação
         setTimeout(() => {
             meteor.remove();
         }, duration * 1000);
     }, 1000);
 }

// Função para atualizar o contador de tempo
function updateTimeCounter() {
const now = new Date();
const timeDiff = now - relationshipStartDate;

// Calcular unidades de tempo
const seconds = Math.floor(timeDiff / 1000) % 60;
const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 30;
const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7)) % 4;
const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12;
const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

// Atualizar elementos na página
document.getElementById('seconds').textContent = seconds;
document.getElementById('minutes').textContent = minutes;
document.getElementById('hours').textContent = hours;
document.getElementById('days').textContent = days;
document.getElementById('weeks').textContent = weeks;
document.getElementById('months').textContent = months;
document.getElementById('years').textContent = years;
}

// Iniciar o contador quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
// Atualizar o contador imediatamente
updateTimeCounter();

// Configurar atualização a cada segundo
setInterval(updateTimeCounter, 1000);
});

// Completar o código da função createStars que está incompleto
function createStars() {
const starsContainer = document.getElementById('stars');
const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
 const star = document.createElement('div');
 star.classList.add('star');

 // Tamanho aleatório para as estrelas
 const size = Math.random() * 3;
 star.style.width = size + 'px';
 star.style.height = size + 'px';
 
 // Posição aleatória
 const posX = Math.random() * 100;
 const posY = Math.random() * 100;
 star.style.left = posX + '%';
 star.style.top = posY + '%';
 
 // Adicionar brilho variado
 const opacity = Math.random() * 0.8 + 0.2;
 star.style.opacity = opacity;
 
 starsContainer.appendChild(star);
}

// Criar meteoros ocasionais
setInterval(createMeteor, 5000);
}

// Função para criar meteoros
function createMeteor() {
const meteor = document.createElement('div');
meteor.classList.add('meteor');

// Posição inicial aleatória
const startPosX = Math.random() * 100 + 10;
const startPosY = Math.random() * 30;
meteor.style.left = startPosX + '%';
meteor.style.top = startPosY + '%';

// Tamanho aleatório para o meteoro
const width = Math.random() * 100 + 50;
meteor.style.width = width + 'px';

// Velocidade aleatória
const duration = Math.random() * 2 + 1;
meteor.style.animationDuration = duration + 's';

document.body.appendChild(meteor);

// Remover o meteoro após a animação
setTimeout(() => {
 if (meteor.parentNode) {
     meteor.parentNode.removeChild(meteor);
 }
}, duration * 1000);
}

// Inicializar as estrelas quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', createStars);