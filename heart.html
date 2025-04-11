<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coração Python</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: black;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        
        canvas {
            display: block;
            width: 250px;
            height: 250px;
        }
    </style>
</head>
<body>
    <canvas id="heartCanvas" width="250" height="250"></canvas>
    
    <script>
        // Configuração do canvas
        const canvas = document.getElementById('heartCanvas');
        const ctx = canvas.getContext('2d');
        
        let currentStep = 0;
        let currentHeart = 1;
        const totalHearts = 15;
        const stepsPerHeart = 50; // Número de passos para desenhar cada coração
        
        // Função para desenhar um passo do coração
        function drawHeartStep(i, step) {
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 1.5;
            
            // Começar do centro
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            ctx.moveTo(centerX, centerY);
            
            // Calcular quantos pontos desenhar neste passo
            const pointsToDraw = Math.min(step, stepsPerHeart);
            
            // Desenhar o coração progressivamente
            for (let n = 0; n < pointsToDraw; n++) {
                const t = (n / stepsPerHeart) * Math.PI * 2;
                const x = 16 * Math.pow(Math.sin(t), 3);
                const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
                
                // Escalar e posicionar, com fator reduzido para um coração menor
                const scaledX = x * (i * 0.5) + centerX;
                const scaledY = -y * (i * 0.5) + centerY;
                
                ctx.lineTo(scaledX, scaledY);
            }
            
            ctx.stroke();
        }
        
        // Função para animar os corações
        function animate() {
            // Limpar o canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Desenhar todos os corações completos anteriores
            for (let i = 1; i < currentHeart; i++) {
                drawHeartStep(i, stepsPerHeart);
            }
            
            // Desenhar o coração atual em progresso
            drawHeartStep(currentHeart, currentStep);
            
            // Avançar para o próximo passo
            currentStep++;
            
            // Se completou o coração atual, avançar para o próximo
            if (currentStep > stepsPerHeart) {
                currentStep = 0;
                currentHeart++;
                
                // Se completou todos os corações, reiniciar
                if (currentHeart > totalHearts) {
                    currentHeart = 1;
                    // Pequena pausa antes de reiniciar
                    setTimeout(() => {
                        requestAnimationFrame(animate);
                    }, 1000);
                    return;
                }
            }
            
            // Continuar a animação
            requestAnimationFrame(animate);
        }
        
        // Iniciar a animação
        animate();
    </script>
</body>
</html>
