// Obter referências aos botões de navegação
const btnInicio = document.getElementById('btnInicio');
const btnHistoria = document.getElementById('btnHistoria');
const btnImportancia = document.getElementById('btnImportancia');
const btnTecnologia = document.getElementById('btnTecnologia');
const btnReceita = document.getElementById('btnReceita');

// Adicionar eventos de clique aos botões para redirecionamento
btnInicio.addEventListener('click', function() {
    window.location.href = 'index.html'; // Altere para o caminho correto da página inicial
});

btnHistoria.addEventListener('click', function() {
    window.location.href = 'historia.html'; // Altere para o caminho correto da página de história
});

btnImportancia.addEventListener('click', function() {
    window.location.href = 'importancia.html'; // Altere para o caminho correto da página de importância
});

btnTecnologia.addEventListener('click', function() {
    window.location.href = 'tecnologia.html'; // Altere para o caminho correto da página de tecnologia
});

btnReceita.addEventListener('click', function() {
    window.location.href = 'receita.html'; // Altere para o caminho correto da página de receita
});

// Adicionar evento de clique para o botão de acessibilidade
document.getElementById('accessibilityButton').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
    document.body.classList.toggle('large-font');
});

// Obter referência ao botão de voltar ao topo
const backToTopButton = document.getElementById('backToTop');

// Mostrar o botão quando o usuário rolar para baixo
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Ajuste o valor conforme necessário
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Adicionar evento de clique para rolar para o topo
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});