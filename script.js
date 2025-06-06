// Confetti setup
function startConfetti() {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  script.onload = () => {
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
  };
  document.head.appendChild(script);
}

// Background music setup
const music = new Audio("rcb_theme.mp3");  // Put your music file in same folder
music.loop = true;
music.volume = 0.5;

function toggleMusic() {
  if (music.paused) {
    music.play();
    document.getElementById('music-btn').textContent = "🔊";
  } else {
    music.pause();
    document.getElementById('music-btn').textContent = "🔇";
  }
}

// Theme toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-mode");
  const themeBtn = document.getElementById("theme-toggle");
  themeBtn.textContent = body.classList.contains("light-mode") ? "🌞 Light" : "🌙 Dark";
}

// On Page Load
window.addEventListener('load', () => {
  // Animate trophies and message
  document.querySelectorAll('.trophy-big').forEach(trophy => trophy.classList.add('pop'));
  document.querySelector('.message').classList.add('show');

  // Start confetti celebration
  startConfetti();

  // Try to auto-play music (some browsers block auto play)
  music.play().catch(() => {});

  // Auto scroll to hero section after 4 seconds
  setTimeout(() => {
    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
  }, 4000);
});

// DOM ready: Setup filters, buttons
document.addEventListener('DOMContentLoaded', () => {
  // Player filters
  document.querySelectorAll('.filter-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.getAttribute('data-filter');
      document.querySelectorAll('.player-card').forEach(card => {
        card.style.display = (role === 'all' || card.dataset.role === role) ? 'block' : 'none';
      });
    });
  });

  // Music toggle button
  document.getElementById('music-btn').addEventListener('click', toggleMusic);

  // Theme toggle button
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
