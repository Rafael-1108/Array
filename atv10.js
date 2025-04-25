let rankingJogos = ["Fnaf1", "Fnaf2", "Fnaf3"];
let jogoFavorito = "Fnaf2";
let quantidade = rankingJogos.length;

for (let i = 0; i < quantidade; i++){
    if (jogoFavorito === rankingJogos[i]){
        console.log("O seu jogo favorito está em", i + 1, "lugar no ranking.")
    }
}

//Definindo o lugar no ranking em que seu jogo se encontra se ele tiver no ranking;