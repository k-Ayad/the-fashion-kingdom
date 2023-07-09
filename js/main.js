const textElement = document.getElementById('animated-text');
const texts = ['TFK ', 'OPIO ']; // Array of strings to display
const delay = 500; // Delay between writing and erasing in milliseconds

let textIndex = 0;
let charIndex = 0;
let isWriting = true;

function writeAndEraseText() {
  if (isWriting) {
    textElement.textContent += texts[textIndex][charIndex];
    charIndex++;

    if (charIndex >= texts[textIndex].length) {
      isWriting = false;
      setTimeout(writeAndEraseText, delay);
    } else {
      setTimeout(writeAndEraseText, delay / 2);
    }
  } else {
    textElement.textContent = textElement.textContent.slice(0, -1);

    if (textElement.textContent === '') {
      isWriting = true;
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(writeAndEraseText, delay / 2);
  }
}

writeAndEraseText();