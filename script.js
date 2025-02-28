





















document.getElementById("contact-btn").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "block";
});


document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "none";
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const templateParams = {
        recipient_email: document.getElementById("recipient-email").value,
        objet: document.getElementById("objet").value,
        message: document.getElementById("message").value,
        user_email: "woodkaly68@gmail.com" //
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            alert("Message envoyé avec succès !");
            document.getElementById("contact-form").reset();
            document.getElementById("contact-modal").style.display = "none";
        }, function(error) {
            alert("Échec de l'envoi du message : " + error.text);
        });
});















function showAbout() {
    document.getElementById("about-content").style.display = "block";
}

function hideAbout() {
    document.getElementById("about-content").style.display = "none";
}


// Lorsque l'utilisateur clique sur l'image
document.getElementById('image-bouton').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = "flex"; // Affiche la fenêtre modale
    modal.style.opacity = 1; // Assure que la fenêtre s'affiche en douceur
});

// Lorsque l'utilisateur clique sur le bouton pour fermer la modale
document.getElementById('fermer').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // Cache la fenêtre modale
});

// Ferme la modale si l'utilisateur clique en dehors de la fenêtre modale
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none"; // Cache la fenêtre modale si l'on clique en dehors
    }
});
