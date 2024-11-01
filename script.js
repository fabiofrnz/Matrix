const matrix = document.querySelector('.matrix');

// Função para criar um caractere aleatório
function getRandomChar() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return characters.charAt(Math.floor(Math.random() * characters.length));   

}

// Função para criar uma coluna de caracteres
function createColumn() {
  const column = document.createElement('div');
  column.classList.add('column');
  matrix.appendChild(column);

  for (let i = 0; i < 200; i++) {
    const char = document.createElement('span');
    char.textContent = getRandomChar();
    column.appendChild(char);
  }
}

// Função para animar os caracteres
function animate() {
  const columns = document.querySelectorAll('.column');
  columns.forEach(column => {
    column.style.top = `${Math.random() * 100}%`;
    column.style.animationDelay = `${Math.random() * 3}s`;
  });
}

// Criar múltiplas colunas
for (let i = 0; i < 100; i++) {
  createColumn();
}

// Iniciar a animação
animate();s