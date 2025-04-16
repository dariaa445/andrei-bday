// Typing effect for the message
const typingText = document.getElementById("typingText");
const message = "Te iubesc muuuuuuuuult de tot! 💖";

let i = 0;
function typeWriter() {
  if (i < message.length) {
    typingText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Bunny click animation
const bunny = document.getElementById("bunny");
const heartsContainer = document.querySelector(".hearts-container");

bunny.addEventListener("click", function() {
  // Create heart element
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  
  // Position the heart in the container
  heartsContainer.appendChild(heart);
  
  // Remove heart after animation is complete
  setTimeout(() => {
    heart.remove();
  }, 2000);
});

