function escribirNumero(numero) {
    const pantalla = document.getElementById('pantalla_operaciones');
    pantalla.value += numero; 
    const mensajeError = document.getElementById('mensaje_error'); 
    mensajeError.textContent = ''; 
}

function borrarUnNumero() { 
    const pantalla = document.getElementById('pantalla_operaciones'); 
    pantalla.value = pantalla.value.slice(0, -1); 
    const mensajeError = document.getElementById('mensaje_error'); 
    mensajeError.textContent = ''; 
}

function borrarTodo() { 
    const pantalla = document.getElementById('pantalla_operaciones'); 
    pantalla.value = '';
    const mensajeError = document.getElementById('mensaje_error'); 
    mensajeError.textContent = ''; 
}

function calcular() {
    const pantalla = document.getElementById('pantalla_operaciones');
    const mensajeError = document.getElementById('mensaje_error')
    const operacion = pantalla.value
    
    
    if (/[+\-*/]{2,}/.test(operacion)) {
        mensajeError.textContent = 'Error: Operación no válida';
    } else {
        try {
            pantalla.value = eval(operacion.replace(/x/g, '*').replace(/÷/g, '/'));
        } catch (e) {
            mensajeError.textContent = 'Error: Operación no válida';
        }
    }
  
    
}


// function calcular() {
//     // const pantalla = document.getElementById('pantalla_operaciones');
//     const mensajeError = document.getElementById('mensaje_error')
//     const operacion = pantalla.value
    
    
//     if (/[+\-*/]{2,}/.test(operacion)) {
//         mensajeError.textContent = 'Error: Operación no válida';
//     } else {
//         try {
//             mensajeError.value = eval(operacion.replace(/x/g, '*').replace(/÷/g, '/'));
//         } catch (e) {
//             mensajeError.textContent = 'Error: Operación no válida';
//         }
//     }
  
    
// }
