const apps = document.querySelectorAll('.app-card');
let currentIndex = 0;

document.addEventListener('keydown', (event) => {
    // 1. Quitar el foco de la tarjeta actual
    apps[currentIndex].classList.remove('focused');

    // 2. Detectar la tecla (Derecha, Izquierda o OK)
    switch(event.key) {
        case 'ArrowRight':
            if (currentIndex < apps.length - 1) currentIndex++;
            break;
        case 'ArrowLeft':
            if (currentIndex > 0) currentIndex--;
            break;
        case 'Enter':
            descargarApp();
            break;
    }

    // 3. Poner el foco en la nueva tarjeta
    apps[currentIndex].classList.add('focused');
});

function descargarApp() {
    const url = apps[currentIndex].getAttribute('data-url');
    // Obtenemos el texto del nombre de la app (el h3) para que el mensaje sea claro
    const nombreApp = apps[currentIndex].querySelector('h3').innerText;
    
    // Mostramos el aviso al usuario
    alert("Iniciando descarga de: " + nombreApp);
    
    console.log("Iniciando descarga de:", url);
    
    // Iniciamos la descarga real
    window.location.href = url;
}