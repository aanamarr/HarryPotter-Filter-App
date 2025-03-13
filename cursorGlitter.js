document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");

    function createStar(event) {
        const star = document.createElement("img");
        star.src = "http://localhost:5173/HarryPotter-Filter-App/sparkling.png"; // URL fija
        star.classList.add("star");

        // Posiciona la estrella en el lugar del cursor
        star.style.left = `${event.pageX}px`;
        star.style.top = `${event.pageY}px`;

        body.appendChild(star);

        setTimeout(() => {
            star.remove(); // Elimina la estrella después de un tiempo
        }, 800);
    }

    document.addEventListener("mousemove", createStar);
});

