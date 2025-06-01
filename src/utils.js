export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor(rgba) {
  if (rgba) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random();
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  } else {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}

export function createMessage(text) {
  let messageElement = document.createElement('div');
  messageElement.id = 'random-message';
  messageElement.style.position = 'fixed';
  messageElement.style.top = '20px';
  messageElement.style.left = '20px';
  messageElement.style.backgroundColor = '#333';
  messageElement.style.color = '#fff';
  messageElement.style.padding = '10px';
  messageElement.style.borderRadius = '10px';
  messageElement.style.zIndex = '1000';
  messageElement.style.opacity = '1';
  messageElement.style.transition = 'opacity 0.8s ease';
  messageElement.innerText = text;

  return messageElement;
}
