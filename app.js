const barreClick = () => {
    const barreImage = document.querySelector(".barre-image");
    const barreGrise = document.querySelector(".barre-grise");
    const barreImageX = barreImage.getBoundingClientRect().x;
    const barreGriseX = barreGrise.getBoundingClientRect().x;

    console.log(barreImage.getBoundingClientRect(), barreGrise.getBoundingClientRect());

    barreGrise.addEventListener("click", (e) => {
        barreImage.style.left = e.clientX + "%";
    })
}

barreClick();