// Typing effect
const text = "Te iubesc muuuuuuuuult de tot! 💖";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Floating hearts
const container = document.querySelector('.hearts-container');
for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(heart);
}
