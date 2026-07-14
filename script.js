document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");

    const welcome = document.getElementById("welcome-screen");

    const enterButton = document.getElementById("enterButton");

    const loading = document.getElementById("loading");

    const progress = document.querySelector(".progress-bar");

    const cards = document.querySelectorAll(".card");

    app.style.display = "none";

    enterButton.addEventListener("click", () => {

        enterButton.style.display = "none";

        loading.style.display = "block";

        setTimeout(() => {

            progress.style.width = "100%";

        },100);

        setTimeout(()=>{

            welcome.style.opacity="0";

        },2200);

        setTimeout(()=>{

            welcome.style.display="none";

            app.style.display="block";

            app.style.opacity="1";

            app.style.transform="translateY(0px)";

            mostrarTarjetas();

        },3000);

    });

    function mostrarTarjetas(){

        cards.forEach((card,index)=>{

            card.style.opacity="0";

            card.style.transform="translateY(50px)";

            setTimeout(()=>{

                card.style.transition=".6s";

                card.style.opacity="1";

                card.style.transform="translateY(0px)";

            },index*140);

        });

    }

});
