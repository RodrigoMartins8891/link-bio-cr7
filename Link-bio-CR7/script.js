const audio = document.getElementById('meuAudio');
const botao = document.getElementById('botaoAudio');

function tocarOuPausarAudio() {
    if (audio.paused) {
    audio.play();
    botao.innerHTML = '⏸️ PAUSAR A MENSAGEM';
    } else {
    audio.pause();
    botao.innerHTML = '▶️ CR7 <img src="assets/R (1).png" style="width: 20px; vertical-align: middle;"> TEM UMA MENSAGEM PARA VOCÊ';
    }
}
