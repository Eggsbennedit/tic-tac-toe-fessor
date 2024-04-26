var jogador = "x";
const quadrados = document.getElementsByClassName['quadrado']

var j1 = []
var j2 = []

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;
        for(i in quadrados){
            if(i == celula){
                j1.append(i)
            }
        }
        //console.log(celula)
        if(jogador == "x"){
            jogador = "o";
        } else{
            jogador = "x"
        }
    }

}
function reiniciar(){
    window.location.reload();
}