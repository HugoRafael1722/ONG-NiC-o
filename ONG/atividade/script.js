// ======= EFEITO DE ENTRADA SUAVE NAS SEÇÕES =======
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, article, form");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

// ======= ANIMAÇÃO DO BOTÃO AO PASSAR O MOUSE =======
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.05)";
    button.style.transition = "0.2s";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});

// ======= ALERTA SIMPLES AO ENVIAR FORMULÁRIO =======
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("Obrigado por se cadastrar! Entraremos em contato em breve ❤️");
    form.reset();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const botaoVoluntario = document.getElementById("botaoVoluntario");
  const voluntarioSimples = document.getElementById("voluntarioSimples");
  const form = document.getElementById("cadastroForm");
  const formMessage = document.getElementById("formMessage");

  if (botaoVoluntario && voluntarioSimples) {
    botaoVoluntario.addEventListener("click", () => {
      const isHidden = voluntarioSimples.style.display === "none" || voluntarioSimples.style.display === "";
      if (isHidden) {
        voluntarioSimples.style.display = "block";
        botaoVoluntario.setAttribute("aria-expanded", "true");
        // opcional: foco no primeiro campo de voluntariado
        document.getElementById("disponibilidade").focus();
      } else {
        voluntarioSimples.style.display = "none";
        botaoVoluntario.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

     
      if (!form.checkValidity()) {
        form.reportValidity();
        formMessage.textContent = "Por favor, preencha os campos obrigatórios.";
        formMessage.style.color = "#b22222";
        return;
      }

   
      formMessage.textContent = "Obrigado! Cadastro recebido — entraremos em contato em breve.";
      formMessage.style.color = "#1a7f1a";

      
      form.reset();
      if (voluntarioSimples) {
        voluntarioSimples.style.display = "none";
        botaoVoluntario.setAttribute("aria-expanded", "false");
      }

  
    });
  }
});

