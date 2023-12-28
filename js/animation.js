"use strict"
window.addEventListener('load', function () {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    let spekearLeft = this.document.querySelector(".spekear-left")
    let spekearRight = this.document.querySelector(".spekear-right")
    let grassLeft = this.document.querySelector(".grass-left")
    let grassRight = this.document.querySelector(".grass-right")
    let title = this.document.querySelector(".title")
    let h1 = this.document.querySelector(".h1")
    let background = this.document.querySelector(".background-1")

    window.addEventListener('scroll', function () {
        let scrollY = window.scrollY;

        //backgroun parallax
        let backgroundValue = 18 - (scrollY / window.innerHeight) * 10; // Ajusta el divisor según necesites
        backgroundValue = Math.max(8, Math.min(18, backgroundValue));
        background.style.top = backgroundValue + '%'

        //title parallax
        //title parallax
        let titleValue;
        if (window.innerWidth < 700) {
            // Ajusta el cálculo para pantallas con ancho menor a 700px
            titleValue = 19 + (scrollY / window.innerHeight) * 30; // Ajusta el divisor según necesites
            titleValue = Math.max(19, Math.min(40, titleValue));
            h1.style.top = (titleValue - 2) + '%';
        } else {
            titleValue = 17 + (scrollY / window.innerHeight) * 30; // Ajusta el divisor según necesites
            titleValue = Math.max(17, Math.min(40, titleValue));
            h1.style.top = (titleValue) + '%';
        }
        title.style.top = titleValue + '%';



        //grass parallax
        let grassValue = -5 - (scrollY / window.innerHeight) * 15; // Ajusta el divisor según necesites
        grassValue = Math.max(-20, Math.min(-5, grassValue));
        grassLeft.style.left = grassValue + '%'
        grassRight.style.right = grassValue + '%'

        //spekears parallax
        let leftValue = -20 + (scrollY / window.innerHeight) * 15; // Ajusta el divisor según necesites
        leftValue = Math.max(-20, Math.min(-5, leftValue));
        spekearLeft.style.left = leftValue + '%';
        spekearRight.style.right = leftValue + '%';



    });

});

