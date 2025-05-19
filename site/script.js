// script.js — плавные эффекты и фоновая анимация без мыши

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".team-card, .timeline-entry, .info-card");

  // Плавное появление при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.classList.remove("visible"); // сброс
    observer.observe(card);
  });

  // Подсветка карточек по наведению (дополнительно к CSS)
  const hoverCards = document.querySelectorAll(".team-card");
  hoverCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
      card.style.transform = "scale(1)";
    });
  });

  // Подсветка активной ссылки
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) link.classList.add('active');
  });
});

// ==== CANVAS ЛОГОТИПЫ ====

const canvas = document.getElementById("logo-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const logoImage = new Image();
logoImage.src = "logo_maon_big.png";

const logoSize = 80;
const spacing = logoSize * 3;
const speed = 8;
const logos = [];

function spawnLogoRow() {
  const diagAngle = Math.atan2(canvas.height, canvas.width);
  const dx = Math.cos(diagAngle) * speed;
  const dy = Math.sin(diagAngle) * speed;
  const nx = Math.cos(diagAngle + Math.PI / 2);
  const ny = Math.sin(diagAngle + Math.PI / 2);

  const diagonal = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);
  const count = Math.floor(diagonal / spacing);

  const startX = -logoSize;
  const startY = -logoSize;

  for (let i = -Math.floor(count / 2); i <= Math.floor(count / 2); i++) {
    logos.push({
      x: startX + i * spacing * nx,
      y: startY + i * spacing * ny,
      dx,
      dy,
      life: 0
    });
  }

  // Ограничим количество одновременно активных логотипов
  if (logos.length > 50) {
    logos.splice(0, logos.length - 50);
  }
}

function animateLogos() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const logo of logos) {
    logo.x += logo.dx;
    logo.y += logo.dy;
    logo.life += 1;

    ctx.globalAlpha = 0.1;
    ctx.drawImage(logoImage, logo.x, logo.y, logoSize, logoSize);
  }

  requestAnimationFrame(animateLogos);
}

logoImage.onload = () => {
  spawnLogoRow();
  setInterval(spawnLogoRow, 1000); // реже — раз в 2 сек
  requestAnimationFrame(animateLogos);
};
