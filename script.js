// Modo escuro/claro com persistência no localStorage
const botaoTema = document.getElementById("toggle-tema");
const temaAtual = localStorage.getItem("tema");

if (temaAtual === "dark") {
  document.body.classList.add("dark-mode");
  botaoTema.textContent = "☀️";
}

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const modoEscuro = document.body.classList.contains("dark-mode");
  localStorage.setItem("tema", modoEscuro ? "dark" : "light");
  botaoTema.textContent = modoEscuro ? "☀️" : "🌙";
});
window.addEventListener('load', () => {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const tipoUsuario = localStorage.getItem("tipoUsuario");

  if (tipoUsuario === "funcionario") {
    const painel = document.getElementById("painel-funcionario");
    if (painel) {
      painel.style.display = "block";
    }
  }
});

// Função de logout
function logoutFuncionario() {
  localStorage.removeItem("tipoUsuario");
  alert("Você saiu do sistema.");
  window.location.href = "login.html";
}
