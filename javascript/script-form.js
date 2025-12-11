 document.addEventListener("DOMContentLoaded", function () {
            const btnPrijava = document.getElementById("prijava");
            const inputUser = document.getElementById("uporabnisko_ime");
            const inputPass = document.getElementById("geslo");
            const correctUsername = "Janez Novak";
            const correctPassword = "JanezN1986";

            btnPrijava.addEventListener("click", function (e) {
                e.preventDefault();

                inputUser.classList.remove("napaka");
                inputPass.classList.remove("napaka");

                const uporabnik = inputUser.value.trim();
                const geslo = inputPass.value.trim();

                const samoCrkeInPresledki = /^[A-Za-z ]+$/;

                if (uporabnik !== correctUsername) {
                    inputUser.classList.add("napaka");

                    Swal.fire({
                        icon: "error",
                        title: "Napaka v uporabniškem imenu",
                        text: "Uporabniško ime je napačno. Prosimo, poskusite znova.",
                        confirmButtonColor: "#57A939"
                    });
                    return;
                }

                if (geslo !== correctPassword) {
                    inputPass.classList.add("napaka");

                    Swal.fire({
                        icon: "error",
                        title: "Napaka v geslu",
                        text: "Geslo je napačno. Prosimo, poskusite znova.",
                        confirmButtonColor: "#57A939"
                    });
                    return;
                }

                Swal.fire({
                    icon: "success",
                    title: "Prijava uspešna!",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = "https://belingar.github.io/obrazec/obrazec.html"; 
                });
            });
        });