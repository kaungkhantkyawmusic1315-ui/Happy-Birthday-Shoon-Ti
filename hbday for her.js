const envelope = document.getElementById('envelope');
const btn = document.getElementById('openBtn');
const cake = document.getElementById('cake');
const gallery = document.querySelector('.container');
const banner = document.getElementById('banner');
const balloons = document.getElementById('balloons');
const streamersContainer = document.getElementById('streamers');
const confettiContainer = document.getElementById('confetti');
const cornerImg = document.getElementById('cornerImage');

btn.addEventListener('click', () => {
  // Open envelope
  envelope.classList.add('open');
  btn.disabled = true;
  btn.textContent = 'Opened';

  // PARTICLES SURPRISE
  const burst = document.createElement('div');
  burst.className = 'particles';
  document.body.appendChild(burst);

  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = (window.innerWidth * Math.random()) + 'px';
    p.style.top = (window.innerHeight * Math.random()) + 'px';
    p.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    p.style.width = p.style.height = (4 + Math.random() * 4) + 'px';
    burst.appendChild(p);

    const angle = Math.random() * 2 * Math.PI;
    const distance = 60 + Math.random() * 100;

    p.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0.5)`, opacity: 0 }
    ], {
      duration: 1500 + Math.random() * 1000,
      iterations: 1,
      easing: 'ease-out'
    });

    setTimeout(() => p.remove(), 2000);
  }

  setTimeout(() => burst.remove(), 2500);

  // 1️⃣ Fade out envelope & button after 4 seconds
  setTimeout(() => {
    envelope.style.opacity = '0';
    btn.style.opacity = '0';

    // 2️⃣ Show corner image immediately after envelope disappears
    if (cornerImg) {
      cornerImg.style.opacity = '1';
      cornerImg.style.transform = 'scale(1)';
    }

    // 3️⃣ After corner image appears, show cake, gallery, banner, balloons, confetti
    setTimeout(() => {
      if (cake) cake.classList.add('show');
      if (gallery) gallery.classList.add('show');
      if (banner) banner.classList.add('show');
      if (balloons) balloons.classList.add('show');

      // STREAMERS
      if (streamersContainer) {
        for (let i = 0; i < 10; i++) {
          const s = document.createElement('div');
          s.className = 'streamer';
          s.style.left = Math.random() * 100 + '%';
          s.style.animationDuration = (3 + Math.random() * 2) + 's';
          streamersContainer.appendChild(s);
        }
      }

      // CONFETTI
      if (confettiContainer) {
        for (let i = 0; i < 50; i++) {
          const c = document.createElement('div');
          c.className = 'confetti-piece';
          c.style.left = Math.random() * 100 + '%';
          c.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
          c.style.animationDelay = (Math.random() * 3) + 's';
          confettiContainer.appendChild(c);
        }
      }

      // PLAY MUSIC AND "YAYY" SOUND
      const bgMusic = document.getElementById('bgMusic');
      if (bgMusic) {
        bgMusic.volume = 0.3;
        bgMusic.loop = true;
        bgMusic.play();
      }

      const yayy = document.getElementById('yayy');
      if (yayy) {
        yayy.volume = 0.4;
        yayy.currentTime = 0;
        yayy.play();
      }

    }, 500); // 0.5s after envelope disappears

  }, 4000); // envelope fade-out duration
});
