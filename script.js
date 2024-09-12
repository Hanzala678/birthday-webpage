// Function to create balloons and add them to the document
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random balloon color
    balloon.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.body.appendChild(balloon);

    setTimeout(() => {
        document.body.removeChild(balloon);
    }, 10000); // Remove balloon after 10 seconds
}

// Function to create confetti and add it to the document
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)];
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random confetti fall duration
    document.body.appendChild(confetti);

    setTimeout(() => {
        document.body.removeChild(confetti);
    }, 3000); // Remove confetti after 3 seconds
}

// Generate balloons
for (let i = 0; i < 10; i++) {
    createBalloon();
}

// Generate confetti
setInterval(createConfetti, 100); // Create confetti every 100ms
