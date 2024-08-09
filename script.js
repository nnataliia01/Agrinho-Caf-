
const btnInicio = document.getElementById('btnInicio');
const btnHistoria = document.getElementById('btnHistoria');
const btnImportancia = document.getElementById('btnImportancia');
const btnTecnologia = document.getElementById('btnTecnologia');
const btnCuriosidades = document.getElementById('btnCuriosidades');
const btnReceita = document.getElementById('btnReceita');

btnInicio.addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

btnHistoria.addEventListener('click', function() {
    window.location.href = 'historia.html'; 
});

btnImportancia.addEventListener('click', function() {
    window.location.href = 'importancia.html'; 
});

btnTecnologia.addEventListener('click', function() {
    window.location.href = 'tecnologia.html'; 
});

btnCuriosidades.addEventListener('click', function() {
    window.location.href = 'curiosidades.html';
});

btnReceita.addEventListener('click', function() {
    window.location.href = 'receita.html'; 
});
