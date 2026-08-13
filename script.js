/* MOBILE MENU */

const hamburger =
    document.getElementById("hamburger");

const nav =
    document.getElementById("nav-links");


if (hamburger) {

    hamburger.addEventListener(
        "click",
        function () {

            nav.classList.toggle("open");

        }
    );


    nav.querySelectorAll("a").forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    nav.classList.remove("open");

                }
            );

        }
    );

}


/* PROJECT IMAGE LIGHTBOX */

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");


document
    .querySelectorAll(".lightbox-image")
    .forEach(
        function (image) {

            image.addEventListener(
                "click",
                function () {

                    if (lightbox && lightboxImg) {

                        lightboxImg.src =
                            image.src;

                        lightbox.classList.add(
                            "open"
                        );

                    }

                }
            );

        }
    );


/* CLOSE LIGHTBOX */

function closeLightbox() {

    if (lightbox) {

        lightbox.classList.remove(
            "open"
        );

    }

}


/* ESC KEY */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);
