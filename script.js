window.onload = () => {
    const btn = document.getElementById('btn');
    const texto = document.getElementById('elTexto');
    
    btn.addEventListener('click', () => {
        texto.innerHTML = "Texto cambiado";
    });
}

