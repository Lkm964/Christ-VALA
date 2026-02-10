const config = {
  recipient: "Chriss",
  love: "Chriss, tu es la plus belle chose qui me soit arrivée. Je t’aime infiniment.",
  rejection: "Je respecte ton choix… même si mon cœur est triste.",
  acceptance: "Tu viens de rendre mon cœur le plus heureux du monde 💕"
};

function showScene(id) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function revealLoveLetter() {
  showScene('scene2');
  typeWriter(config.love, 'love-message');
}

function typeWriter(text, elementId) {
  const el = document.getElementById(elementId);
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
      document.getElementById('signature').classList.remove('hidden');
      document.getElementById('response-buttons').classList.remove('hidden');
      document.getElementById('cursor').style.display = "none";
    }
  }, 40);
}

function showRejection() {
  document.getElementById('rejection-text').textContent = config.rejection;
  showScene('scene3');
}

function showAcceptance() {
  document.getElementById('acceptance-text').textContent = config.acceptance;
  showScene('scene4');
}

function goBack() {
  showScene('scene2');
}