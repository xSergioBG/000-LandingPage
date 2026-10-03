document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.getElementById("ctaButton");
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");

    ctaButton.addEventListener("click", function() {
        alert("Descubre más sobre nuestro producto innovador.");
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageTextarea.value;
        alert(`Gracias, ${name}.\nVista previa de tu mensaje: "${message}"\nEste formulario de demostración no envía mensajes. Email indicado: ${email}`);
        contactForm.reset();
    });
});
