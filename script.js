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
        alert(`Gracias, ${name}.\nHemos recibido tu mensaje: "${message}"\nTe contactaremos en ${email}`);
        contactForm.reset();
    });
});
