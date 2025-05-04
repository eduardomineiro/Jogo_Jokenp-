function jogar(escolhaUsuario) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  let resultado = '';

  if (escolhaUsuario === escolhaComputador) {
    resultado = 'Empate!';
  } else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = 'Você venceu!';
  } else {
    resultado = 'Você perdeu!';
  }

  document.getElementById('mensagem').innerHTML =
    `<strong>Sua escolha:</strong> ${escolhaUsuario}<br>
     <strong>Computador:</strong> ${escolhaComputador}<br>
     <strong>Resultado:</strong> ${resultado}`;
}