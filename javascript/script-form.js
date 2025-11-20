document.addEventListener("DOMContentLoaded", function () {
    const btnPrijava = document.getElementById("prijava");
    const inputUser = document.getElementById("uporabnisko_ime");
    const inputPass = document.getElementById("geslo");

    btnPrijava.addEventListener("click", function (e) {
        e.preventDefault();

        // odstrani stare rdeče obrobe
        inputUser.classList.remove("napaka");
        inputPass.classList.remove("napaka");

        const uporabnik = inputUser.value.trim();
        const geslo = inputPass.value.trim();

        const samoCrkeInPresledki = /^[A-Za-z ]+$/;

        // preveri uporabniško ime
        if (!samoCrkeInPresledki.test(uporabnik) || uporabnik.length < 8) {
            inputUser.classList.add("napaka");

            Swal.fire({
                icon: "error",
                title: "Napaka v uporabniškem imenu",
                text: "Uporabniško ime mora imeti vsaj 8 znakov in lahko vsebuje samo črke ter presledke."
            });
            return;
        }

        // preveri geslo
        if (geslo.length < 8) {
            inputPass.classList.add("napaka");

            Swal.fire({
                icon: "error",
                title: "Napaka v geslu",
                text: "Geslo mora vsebovati vsaj 8 znakov."
            });
            return;
        }

        // če je vse OK
        Swal.fire({
            icon: "success",
            title: "Prijava uspešna!",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "obrazec.html";
        });
    });
});