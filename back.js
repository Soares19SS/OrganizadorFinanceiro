// Ano automático
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobile');
burger?.addEventListener('click', () => mobile.classList.toggle('open'));

// Suavizar aparição de elementos
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: .2 });

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// Formulário (demo)
const form = document.getElementById('contato-form');
const status = document.getElementById('form-status');
form?.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const valid = form.checkValidity();
  status.className = 'status';
  if (!valid) {
    status.textContent = 'Por favor, preencha todos os campos corretamente.';
    status.classList.add('err');
    return;
  }
  // Envio fictício
  setTimeout(() => {
    status.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
    status.classList.add('ok');
    form.reset();
  }, 500);
});

// Fechar menu ao clicar em link (mobile)
document.querySelectorAll('#mobile a').forEach(a => {
  a.addEventListener('click', () => mobile.classList.remove('open'));
});
