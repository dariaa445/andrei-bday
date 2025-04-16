// Typing effect for the message
const typingText = document.getElementById("typingText");
const secondLine = document.getElementById("secondLine");
const message = "Te iubesc muuuuuuuuult de tot! 💖";
const secondMessage = "Am vrut pun un gif drăguț, dar ăsta e singurul care a mers :)";

let i = 0;
function typeWriter() {
  if (i < message.length) {
    typingText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      secondLine.innerText = secondMessage;
    }, 500);
  }
}
typeWriter();

// Bunny click animation (hearts creation)
const bunny = document.getElementById("bunny");
const heartsContainer = document.querySelector(".hearts-container");

bunny.addEventListener("click", function() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
});
