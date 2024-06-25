function procesarFormulario(evento) {
    evento.preventDefault() //evita que actualice
    //alert('IOOOOOOO')
    //obtener el usuario desde input txtUsuario
    const usuario = document.getElementById("username").value
    //obtener el peso desde input weight
    const peso = document.getElementById("weight").value
    //obtener la altura desde input height
    const altura = document.getElementById("height").value
    //obtener el div de la id "result"
    const resultado = document.getElementById("result")
    console.log(usuario, peso, altura)
    let imc = peso/altura**2

    if (imc < 18.5) {
        resultado.innerHTML = `
        <div class="col-12">
            <div class="alert alert-primary" id="result" role="alert" >
               ${usuario}, andai desnutrio pelucho culiao
            </div>
        </div>
            `
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = `
        <div class="col-12">
            <div class="alert alert-primary" id="result" role="alert" >
                ${usuario} estas normal
            </div>
        </div>
        `
    } else if (imc >= 25.0 && imc < 29.9) {
        resultado.innerHTML = `
            <div class="col-12">
                <div class="alert alert-primary" id="result" role="alert" >
                    ${usuario} estas sobrepeso
                </div>
            </div>
            `
    } else {
        resultado.innerHTML = `
            <div class="col-12">
                <div class="alert alert-primary" id="result" role="alert" >
                    ${usuario}tienes obesidad
                </div>
            </div>
            `
    }
}