const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }

  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const newSize = initialSize + i * 10;
    const box = document.createElement('div');
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
