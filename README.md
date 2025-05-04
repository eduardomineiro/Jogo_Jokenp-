# Jogo Jokenpô
Abaixo apresento um **manual descritivo completo e didático** do jogo **Jokenpô (Pedra, Papel e Tesoura)**, desenvolvido utilizando as tecnologias **HTML, CSS e JavaScript**. O conteúdo está redigido em linguagem formal, conforme as normas da escrita acadêmica, adequado para fins educacionais e pode ser adaptado para aulas de introdução à programação front-end.

---

## **MANUAL DESCRITIVO DO JOGO “JOKENPÔ” EM HTML, CSS E JAVASCRIPT**

### **1. Introdução**

O jogo Jokenpô, também conhecido como Pedra, Papel e Tesoura, é uma atividade lúdica tradicionalmente utilizada para tomada de decisões entre duas pessoas. Este projeto visa desenvolver, por meio das linguagens HTML, CSS e JavaScript, um jogo interativo que simula essa dinâmica, promovendo a compreensão prática de conceitos como manipulação do DOM, lógica condicional, funções e eventos em programação web.

---

### **2. Objetivos**

* Desenvolver uma aplicação web simples com HTML, CSS e JavaScript.
* Proporcionar um ambiente lúdico para o aprendizado de lógica de programação.
* Estimular a compreensão do funcionamento de eventos, condicionais e manipulação de elementos na interface.

---

### **3. Tecnologias Utilizadas**

* **HTML5**: Estruturação do conteúdo da página.
* **CSS3**: Estilização visual da interface do jogo.
* **JavaScript (ES6)**: Lógica de funcionamento e interatividade com o usuário.

---

### **4. Estrutura do Projeto**

#### 4.1. **HTML (Estrutura do jogo)**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jokenpô</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Jokenpô - Pedra, Papel ou Tesoura</h1>
    <div class="buttons">
      <button onclick="jogar('pedra')">🪨 Pedra</button>
      <button onclick="jogar('papel')">📄 Papel</button>
      <button onclick="jogar('tesoura')">✂️ Tesoura</button>
    </div>
    <div id="resultado">
      <p id="mensagem"></p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

---

#### 4.2. **CSS (Estilização da Interface)**

```css
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #333;
}

.buttons button {
  font-size: 1.2em;
  margin: 10px;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.buttons button:hover {
  background-color: #cce7ff;
}

#mensagem {
  font-size: 1.3em;
  margin-top: 20px;
}
```

---

#### 4.3. **JavaScript (Lógica do Jogo)**

```javascript
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
```

---

### **5. Funcionamento do Jogo**

Ao clicar em um dos botões (Pedra, Papel ou Tesoura), a função `jogar()` é ativada. A escolha do usuário é passada como argumento, enquanto a escolha do computador é gerada aleatoriamente. Com base nas regras clássicas do jogo, o sistema determina o vencedor e exibe o resultado na tela.

---

### **6. Aplicações Educacionais**

Este projeto pode ser utilizado como recurso didático para:

* **Ensinar lógica de programação básica.**
* **Exercitar operadores condicionais e estruturas de decisão.**
* **Introduzir o conceito de funções e manipulação de eventos.**
* **Mostrar como aplicar interatividade em páginas web.**

---

### **7. Possíveis Expansões**

* Inserção de placar de pontos.
* Animações e efeitos visuais.
* Adição de sons.
* Escolha de avatares personalizados.
* Adaptação para modo multiplayer.

---

### **8. Conclusão**

O desenvolvimento do jogo Jokenpô representa uma excelente estratégia metodológica para a introdução ao pensamento computacional e à lógica de programação. Sua simplicidade estrutural aliada à interatividade proporciona um ambiente motivador e significativo para os estudantes compreenderem conceitos fundamentais da construção de aplicações web.


