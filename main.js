var jogador = "x";

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;

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
