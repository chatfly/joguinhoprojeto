var quantidademadeira = parseInt(0)
var mpedraBoolean = Boolean(false)

function confirmarnickname(){
    var nickname = document.getElementById("nomedousuario").value;
    
    document.getElementById("buttonconfirmarnickname").style.display = "none"
    document.getElementById("nomedousuario").style.display = "none"
    document.getElementById("welcome").innerHTML = `┌─────────•✧✧•─────────────┐
    <br>
                                                     -Olá, ${nickname} seja bem vindo ao nosso jogo!!!-
    <br>
                                                    └─────────•✧✧•─────────────┘`
    document.getElementById("buttoncoletarmadeira").style.display = "block"
    document.getElementById("selectmachado").style.display = "block"
    document.getElementById("arvoreprincipal").style.display = "block"
    document.getElementById("menuselecionar").style.display = "block"

    document.getElementById("divnome").remove()
}


function coletarmadeira(){
    var machadoselecionadovalor = parseInt(document.getElementById("selectmachado").value)
    quantidademadeira = quantidademadeira+machadoselecionadovalor
    document.getElementById("quantidademadeira").innerHTML = `Você possui: ${quantidademadeira} Madeiras`
    if (quantidademadeira>=100 && mpedraBoolean == false){
        document.getElementById("botaomachadopedra").style.display = "block"
    }
}

function comprarmachadopedra(){
    quantidademadeira = quantidademadeira-100
    document.getElementById("botaomachadopedra").style.display = "none"
    document.getElementById("machadopedra").style.display = "block"
    mpedraBoolean = true
}