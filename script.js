/* ==========================================
   NUESTROS RECUERDOS
   Script principal
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // ELEMENTOS
    // ===============================

    const welcomeScreen = document.getElementById("welcome-screen");
    const enterButton = document.getElementById("enterButton");
    const app = document.getElementById("app");
    const cards = document.querySelectorAll(".card");

    // ===============================
    // ESTADO INICIAL
    // ===============================

    app.style.display = "none";

    // ===============================
    // BOTÓN ENTRAR
    // ===============================

    enterButton.addEventListener("click", () => {

        // Desvanecer pantalla de bienvenida

        welcomeScreen.style.opacity = "0";

        welcomeScreen.style.pointerEvents = "none";

        setTimeout(() => {

            welcomeScreen.style.display = "none";

            app.style.display = "block";

            // Esperar un instante para iniciar transición

            setTimeout(() => {

                app.style.opacity = "1";
                app.style.transform = "translateY(0px)";

            }, 100);

            mostrarTarjetas();

        }, 900);

    });

    // ===============================
    // ANIMACIÓN TARJETAS
    // ===============================

    function mostrarTarjetas() {

        cards.forEach((card, index) => {

            card.style.opacity = "0";

            card.style.transform = "translateY(25px)";

            setTimeout(() => {

                card.style.transition = "0.6s";

                card.style.opacity = "1";

                card.style.transform = "translateY(0px)";

            }, index * 120);

        });

    }

    // ===============================
    // EFECTO CLICK
    // ===============================

    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(.97)";

            setTimeout(() => {

                card.style.transform = "";

            }, 120);

        });

    });

    // ===============================
    // MENSAJE DE CONSOLA
    // ===============================

    console.log("❤️ Proyecto Nuestros Recuerdos cargado correctamente.");

});
