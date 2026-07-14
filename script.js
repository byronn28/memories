const button = document.getElementById("enterButton");

const welcome = document.getElementById("welcome");

const content = document.getElementById("content");

button.onclick = () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

    },1000);

    content.style.opacity = "1";

    content.style.transform = "translateY(0)";

}
