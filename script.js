// Obter referências aos botões de navegação
const btnInicio = document.getElementById('btnInicio');
const btnHistoria = document.getElementById('btnHistoria');
const btnImportancia = document.getElementById('btnImportancia');
const btnTecnologia = document.getElementById('btnTecnologia');
const btnCuriosidades = document.getElementById('btnCuriosidades');

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

btnCuriosidades.addEventListener('click', function() {
    window.location.href = 'curiosidades.html'; // Altere para o caminho correto da página de curiosidades
});
