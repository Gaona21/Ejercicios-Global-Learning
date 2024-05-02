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
const btnX = modal.querySelector(".cont-x")
const btnCancelar = modal.querySelector(".btn-cancelar")
const btnAceptar = modal.querySelector(".btn-aceptar")

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

                const usuarioObj = {
                    nombre : nombre,
                    apellido : apellido,
                    usuario : usuario,
                    contrasenia : contrasenia,
                    fechaNacimiento : fechaNacimiento,
                    suscribirseNewsletter : suscribirseNewsletter
                };

                const usuarioJSON = JSON.stringify(usuarioObj);
                const resultado = localStorage.setItem("usuario", usuarioJSON);
                console.log(resultado)

                if(resultado != null){
                    mostrarModal("exito", "Registro completado exitosamente");
                }else{
                    mostrarModal("error", "No se pudo registrar al usuario. Intente nuevamente mas tarde");
                }

                console.log("Registro completado exitosamente")
                // mostrarModal("exito", "Registro completado exitosamente");
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

btnX.addEventListener("click", cerrarModal);
btnCancelar.addEventListener("click", cerrarModal);
btnAceptar.addEventListener("click", cerrarModal);


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
    // modal.style.display = "none";
    modal.classList.add("cerrar-modal")

    setTimeout(() => {
        modal.classList.remove("cerrar-modal");
        modal.style.display = "none";
    }, 1000);
}

function errorEfecto(contenedor){
    contenedor.classList.add("error-efecto");

    setTimeout(() => {
        contenedor.classList.remove("error-efecto");
    },1000);
}