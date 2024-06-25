function procesarFormulario(evento) {
    evento.preventDefault() //evita que actualice
    //alert('IOOOOOOO')
    //obtener el usuario desde input txtUsuario
    const usuario = document.getElementById("username").value
    //obtener la contraseña desde input txtPassword
    const peso = document.getElementById("weight").value
    //obtener "recordarme" desde input chkRecordar
    const altura = document.getElementById("height").value
    console.log(usuario, peso, altura)
}