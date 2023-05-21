document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    let isJumping = false;
    let isGameOver = false;
    let gravity = 0.9;
    let obstacleInterval;
  
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space' && !isJumping && !isGameOver) {
        isJumping = true;
        jump();
      }
    });
  
    function jump() {
      let position = 0;
      const jumpInterval = setInterval(() => {
        if (position >= 150) {
          clearInterval(jumpInterval);
          fall();
        } else {
          position += 10;
          player.style.bottom = position + 'px';
        }
      }, 20);
    }
  
    function fall() {
      let position = 150;
      const fallInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(fallInterval);
          isJumping = false;
        } else {
          position -= 10;
          player.style.bottom = position + 'px';
        }
      }, 20);
    }
  
    function generateObstacle() {
      if (isGameOver) return;
  
      const obstacle = document.createElement('div');
      obstacle.classList.add('obstacle');
      obstacle.style.left = '100%';
  
      let obstaclePosition = 1000;
      let randomTime = Math.random() * 4000 + 1000;
  
      obstacle.style.bottom = obstaclePosition + 'px';
      document.body.appendChild(obstacle);
  
      const obstacleInterval = setInterval(() => {
        if (obstaclePosition <= 0) {
          clearInterval(obstacleInterval);
          document.body.removeChild(obstacle);
        } else if (
          obstaclePosition > 0 &&
          obstaclePosition < 60 &&
          position < 60
        ) {
          clearInterval(obstacleInterval);
          isGameOver = true;
          document.body.innerHTML = '<h1>Game Over</h1>';
        } else {
          obstaclePosition -= 10;
          obstacle.style.left = obstaclePosition + 'px';
        }
      }, 20);
  
      if (!isGameOver) {
        setTimeout(generateObstacle, randomTime);
      }
    }
  
    generateObstacle();
  });
  