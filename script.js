// Reveal lines one by one
const lines = Array.from(document.querySelectorAll('.line'));
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
let idx = 0;

function revealNext() {
  if (idx < lines.length) {
    lines[idx].classList.remove('hidden');
    idx++;
    if (idx >= lines.length) {
      nextBtn.disabled = true;
      nextBtn.style.opacity = 0.6;
      nextBtn.textContent = "끝!";
    }
  }
}

function restart() {
  lines.forEach(l => l.classList.add('hidden'));
  idx = 0;
  nextBtn.disabled = false;
  nextBtn.style.opacity = 1;
  nextBtn.textContent = "다음 문장 보기";
}

nextBtn.addEventListener('click', revealNext);
restartBtn.addEventListener('click', restart);

// Auto reveal first line on load for a gentle start
window.addEventListener('DOMContentLoaded', () => {
  revealNext();
});
