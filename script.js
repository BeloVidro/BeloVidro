// --- Funções do Modal de Login ---
function abrirLogin() {
    document.getElementById("modal-login").style.display = "block";
}

function fecharLogin() {
    document.getElementById("modal-login").style.display = "none";
    document.getElementById("erro-login").textContent = "";
}

// --- Funções de Autenticação e Painel do Funcionário ---
function fazerLogin() {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const erro = document.getElementById("erro-login");
    const painel = document.getElementById("painel-funcionario");

    if (usuario === "funcionario" && senha === "belo2025") {
        localStorage.setItem("logadoFuncionario", "sim");
        painel.classList.add("aberto");
        fecharLogin();
    } else {
        erro.textContent = "Usuário ou senha incorretos.";
    }
}

function logoutFuncionario() {
    localStorage.removeItem("logadoFuncionario");
    const painel = document.getElementById("painel-funcionario");
    painel.classList.remove("aberto");
    location.reload();
}

// --- Eventos e Lógica na Inicialização da Página ---
window.addEventListener("load", () => {
    const painel = document.getElementById("painel-funcionario");

    if (localStorage.getItem("logadoFuncionario") === "sim") {
        painel.classList.add("aberto");
    }

    document.getElementById("btn-desenho").addEventListener("click", () => {
        const urlRetorno = encodeURIComponent(window.location.href);
        window.open(`desenho/teste.html?retorno=${urlRetorno}`, "_blank");
    });

    const params = new URLSearchParams(window.location.search);
    const arquivoBase64 = params.get("desenho");
    if (arquivoBase64) {
        fetch(arquivoBase64)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "desenho.png", { type: blob.type });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                document.querySelector('input[type="file"]').files = dataTransfer.files;
            });
    }
});

// --- Lógica do Dark Mode ---
const toggleTema = document.getElementById('toggle-tema');
const body = document.body;

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        toggleTema.checked = true;
    } else if (savedTheme === 'light-mode') {
        body.classList.remove('dark-mode');
        toggleTema.checked = false;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        toggleTema.checked = true;
    }
}

applyTheme();

toggleTema.addEventListener('change', () => {
    if (toggleTema.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});