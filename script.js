"use strict";


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const toggle = document.querySelector(".menu-button");
const links = document.querySelector(".nav-links");


if (toggle && links) {

    const close = () => {

        links.classList.remove("open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        toggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        toggle.textContent = "☰";

    };


    toggle.addEventListener("click", () => {

        const open =
            links.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            String(open)
        );

        toggle.setAttribute(
            "aria-label",
            open
                ? "Close navigation"
                : "Open navigation"
        );

        toggle.textContent =
            open
                ? "×"
                : "☰";

    });


    links
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                close
            );

        });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                close();
            }

        }
    );


    document.addEventListener(
        "click",
        event => {

            if (
                !event.target.closest(".site-nav")
            ) {
                close();
            }

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 900) {
                close();
            }

        }
    );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const items =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver" in window &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold:0.08,
                rootMargin:"0px 0px 35px 0px"
            }
        );


    items.forEach(item => {

        observer.observe(item);

    });

} else {

    items.forEach(item => {

        item.classList.add("visible");

    });

}
