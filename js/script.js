document.addEventListener("DOMContentLoaded", () => {
  const perguntas = document.querySelectorAll(".pergunta-container");
  const resultado = document.getElementById("resultado");
  let atual = 0;

  // esconde todas as perguntas, mostra só a primeira
  perguntas.forEach(p => p.style.display = "none");
  perguntas[atual].style.display = "block";

  perguntas.forEach((pergunta, i) => {
    const botao = pergunta.querySelector("button");
    const feedback = document.createElement("div");
    pergunta.appendChild(feedback);

    botao.onclick = () => {
      let ok = false;

      if (i === 0) {
        const r = pergunta.querySelector("input[type=text]").value.toLowerCase();
        ok = r === "pangeia";
      }

      if (i === 1) {
        const r = pergunta.querySelector("input[type=radio]:checked");
        ok = r && r.value === "Wegener";
      }

      if (i === 2) {
        const r = pergunta.querySelector("input[type=text]").value.toLowerCase();
        ok = r.includes("encaixe") || r.includes("fósseis") || r.includes("fosseis") || r.includes("clima");
      }

      if (ok) {
        feedback.innerHTML = "<p style='color:green'> Acertou!</p>";
        setTimeout(() => {
          pergunta.style.display = "none";
          atual++;
          if (atual < perguntas.length) {
            perguntas[atual].style.display = "block";
          } else {
            resultado.innerHTML = "<p> Você terminou o quiz!</p>";
          }
        }, 1500);
      } else {
        feedback.innerHTML = "<p style='color:red'>❌ Tente novamente!</p>";
      }
    };
  });
});
