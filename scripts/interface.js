document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', jogada);
    })

})

function jogada(evento) {

    // console.log(evento.target);

    let quadrado = evento.target;
    let posicao = quadrado.id;

    if (movimento(posicao)) {


        setTimeout(() => {
            if (vezJogador == 0) {

                alert("O jogo acabou, o vencedor foi o primeiro Jogador")
                

            } else {
                alert("O jogo acabou, o vencedor foi o segundo Jogador")
            }

        }, 10);
    };
    proxJogada(posicao);
}


function proxJogada(posicao) {

    let quadrado = document.getElementById(posicao.toString());
    let marcador = tabuleiro[posicao];
    quadrado.innerHTML = `<div class="${marcador}"></div>`

    // let quadrados = document.querySelectorAll(".quadrado")

    // quadrados.forEach((quadrado) => {
    //     let posicao = quadrado.id;
    //     let marcador = tabuleiro[posicao];

    //     if (marcador != null) {
    //         quadrado.innerHTML = `<div class="${marcador}"></div>`;
    //     }
    // })
}