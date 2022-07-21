//iniciar variaveis
let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let vezJogador = 0;
let fimDeJogo = false;

let marcador = ['x', 'o'];
let estadoVencedor = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
]

function movimento(posicao) {

    if (fimDeJogo) {
        return;
    }

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = marcador[vezJogador];

        fimDeJogo = vencedor();

        if (fimDeJogo == false) {

            vezJogador = (vezJogador == 0) ? 1 : 0;

            // if (vezJogador == 0) {
            //     vezJogador = 1;
            // } else {
            //     vezJogador = 0;
            // }

        }

    }
    return fimDeJogo;
}

function vencedor() {


    for (let i = 0; i < estadoVencedor.length; i++) {
        let sequecia = estadoVencedor[i];

        let pos1 = sequecia[0];
        let pos2 = sequecia[1];
        let pos3 = sequecia[2];

        if (tabuleiro[pos1] == tabuleiro[pos2] &&
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != '') {

            return true;
        }
    }

    return false;
} 

