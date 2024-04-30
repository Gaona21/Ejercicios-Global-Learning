const form = document.querySelector('.formulario');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const usuarioInput = document.getElementById('usuario');
const contraseniaInput = document.getElementById('contrasenia');
const confirmContraseniaInput = document.getElementById('confir-contrasenia');
const fechaNacimientoInput = document.getElementById('cumpleanios');
const newsletterCheckbox = document.getElementById('newsletter');


const modal = document.querySelector(".cont-modal");
const mensajeModal = modal.querySelector(".mensaje");

// console.log(mensajeModal.innerText = "hola");


//Esta expresión regular incluye los caracteres mayúsculas, minúsculas, también espacios en blanco (\s), 
const soloTexto = /^[a-zA-Z\s]+$/;

form.addEventListener('submit',(event) => {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const usuario = usuarioInput.value.trim();
    const contrasenia = contraseniaInput.value;
    const confirmcontrasenia = confirmContraseniaInput.value;
    const fechaNacimiento = fechaNacimientoInput.value;
    const suscribirseNewsletter = newsletterCheckbox.checked;

    if(soloTexto.test(nombre) && soloTexto.test(apellido)){
        if(contrasenia.length >= 8){
            if(contrasenia === confirmcontrasenia){
                console.log("Registro completado exitosamente")
                mostrarModal("exito", "Registro completado exitosamente");
                form.reset();
            }else{
                console.log("Las contraseñas no coinciden")
                mostrarModal("advertencia", "Las contraseñas no coinciden");
            }
        }else{
            console.log("La contraseña debe tener minimo 8 caracteres");
            mostrarModal("advertencia", "La contraseña debe tener minimo 8 caracteres");
        }
    }else{
        console.log("Los campos de nombre y apellido solo deben contener letras")
        mostrarModal("advertencia", "Los campos de nombre y apellido solo deben contener letras");
    }
});


function mostrarModal(tipo, mensaje){
    modal.style.display = "block"
    mensajeModal.innerText = mensaje;

    modal.classList.remove("advertencia");
    modal.classList.remove("error");
    modal.classList.remove("defecto");
    modal.classList.remove("exito");
    modal.classList.add(tipo)

    setTimeout(cerrarModal, 7000);
}

function cerrarModal(){
    modal.style.display = "none";
}