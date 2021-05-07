const barreVerte = function() {

    //on se positionne sur le slider
    const slider = document.querySelector(".slider");
    let x;

    slider.addEventListener("mousemove", function(e) {
        //on donne a x la valeur du slider
        x = slider.value;
        // on ajoute un background avec la valeur de x en %
        slider.style.background = "linear-gradient(90deg, hsl(174, 86%, 45%)" + x + "% , hsl(224, 65%, 95%) " + x +"%)"
        //on envoie a calculPageViews la valeur de x
        calculPageViews(x);

    })

}

const activeBoutton = function () {

    //on se positionne sur le button et sur le slider
    const button = document.querySelector(".abonnement button");
    const slider = document.querySelector(".slider");

    // au click on ajoute la class button-active et on appel la function calculPageViews avec en parametre la valeur du slider
    button.addEventListener("click", function (e) {
        if (button.className == "") {
            button.classList.add("button-active");
            x = slider.value;
            calculPageViews(x)
        } else {
            button.classList.remove("button-active");
            x = slider.value;
            calculPageViews(x);
        }
    })

}

barreVerte();
activeBoutton();

const calculPageViews = function(x){
    //creation tableau % et objets visitsPrix
    const tableauPourcent = [0, 20, 40, 60, 80];
    const visitPrix = {
        visits: [10, 50, 100, 500, 1],
        prix: [8, 12, 16, 24, 36]
    }
    //on se positionne
    const pageViews = document.querySelector(".page-views");
    const money = document.querySelector(".money");
    const button = document.querySelector(".abonnement button")
    const buttonActive = button.className

    //on boucle sur le tableau%
    for(let i = 0; i < tableauPourcent.length; i++){

        //si le button n'a pas de class et si on est entre 2 valeurs du tableau (je sais pas si je peux enlever le else if)
        if(buttonActive === "") {
            if(x >= tableauPourcent[i] && x <= tableauPourcent[i+1]){
                pageViews.innerHTML = visitPrix.visits[i] + "K";
                money.innerHTML = "$" + visitPrix.prix[i] + ".00";
            } else if (x >= tableauPourcent[4]) {
                pageViews.innerHTML = visitPrix.visits[4] + "M";
                money.innerHTML = "$" + visitPrix.prix[4] + ".00";
                break
            }
        } 
        // si le button a la class alors * 0.75 qui fait 25% sur le prix
        else {
            if(x >= tableauPourcent[i] && x <= tableauPourcent[i+1]){
                pageViews.innerHTML = visitPrix.visits[i] + "K";
                money.innerHTML = "$" + visitPrix.prix[i] * 0.75 + ".00";
            } else if (x >= tableauPourcent[4]) {
                pageViews.innerHTML = visitPrix.visits[4] + "M";
                money.innerHTML = "$" + visitPrix.prix[4] * 0.75 + ".00";
                break
            }
        }
        

    }

}

