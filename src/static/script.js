document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".team-card, .timeline-entry, .info-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.classList.remove("visible");
    observer.observe(card);
  });

  document.querySelectorAll(".team-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
      card.style.transform = "scale(1)";
    });
  });

  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) link.classList.add('active');
  });

  const guessInput = document.getElementById('guessInput');
  if (guessInput) {
    const gameResult = document.getElementById('gameResult');

    function checkAnswer() {
      const val = guessInput.value.trim().toLowerCase();
      if (val === 'git') {
        gameResult.textContent = '✅ Верно! Без Git-а в проде никуда.';
        gameResult.style.color = '#00ff99';
      } else {
        gameResult.textContent = '❌ Не угадал. Попробуй снова.';
        gameResult.style.color = '#ff6666';
      }
    }

    guessInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkAnswer();
      }
    });

    const guessButton = document.querySelector('.button');
    if (guessButton) {
      guessButton.addEventListener('click', checkAnswer);
    }
  }

  const resumeForm = document.getElementById("resumeForm");
  if (resumeForm) {
    resumeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const allFilled = [...formData.values()].every(v => v.trim() !== "");

      if (!allFilled) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      fetch("/generate", {
        method: "POST",
        body: formData,
      })
        .then(res => {
          if (!res.ok) throw new Error("Ошибка сервера");
          return res.json();
        })
        .then(data => {
          if (data.success && data.fileUrl) {
            window.location.href = `/success?file=${encodeURIComponent(data.fileUrl)}`;
          } else {
            alert("❌ Не удалось создать резюме.");
          }
        })
        .catch(err => {
          console.error("Ошибка при отправке:", err);
          alert("🚨 Произошла ошибка при отправке формы.");
        });
    });
  }
});
