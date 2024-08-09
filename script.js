// Função genérica para adicionar eventos de clique para redirecionamento
function addRedirectListener(buttonId, url) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function() {
            window.location.href = url;
        });
    } else {
        console.warn(`Botão com ID ${buttonId} não encontrado.`);
    }
}

// Adicionar eventos de clique para cada botão
addRedirectListener('btnInicio', 'index.html');
addRedirectListener('btnHistoria', 'historia.html');
addRedirectListener('btnImportancia', 'importancia.html');
addRedirectListener('btnTecnologia', 'tecnologia.html');
addRedirectListener('btnCuriosidades', 'curiosidades.html');
addRedirectListener('btnReceita', 'receita.html');
