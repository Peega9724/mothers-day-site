document.getElementById('sendLoveBtn').addEventListener('click', () => {
    const heart = document.createElement('div');
    heart.innerText = '❤';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.fontSize = '2rem';
    heart.style.opacity = 1;
    document.body.appendChild(heart);

    let fade = setInterval(() => {
        heart.style.top = (parseFloat(heart.style.top) - 1) + 'px';
        heart.style.opacity -= 0.01;
        if (heart.style.opacity <= 0) {
            clearInterval(fade);
            heart.remove();
        }
    }, 10);
})