function submitButton() {
    const inputs = document.querySelectorAll("input, select, textarea");
    const formData = {};
    let valid = true;
    let errorMessages = [];

    inputs.forEach((el) => {
        const label = el.closest('.form-group')?.querySelector('.form-label')?.innerText || el.name || el.id || 'Polje';
        const value = el.value.trim();
        formData[label] = value;

        el.style.border = "";

        if (label.includes('*') && value === "") {
            valid = false;
            el.style.border = "2px solid red";
            errorMessages.push(`${label} je obvezno polje.`);
        }

        if (label.toLowerCase().includes('iban') && label.includes('*')) {
            const numericValue = value.replace(/\D/g, '');
            if (numericValue.length !== 15) {
                valid = false;
                el.style.border = "2px solid red";
                errorMessages.push("IBAN mora vsebovati natanko 15 številk (brez presledkov).");
            }
        }

        if (label.toLowerCase().includes('referenca') && label.includes('*')) {
            const numericValue = value.replace(/\D/g, '');
            if (numericValue.length !== 8) {
                valid = false;
                el.style.border = "2px solid red";
                errorMessages.push("Referenca mora vsebovati natanko 8 številk (brez presledkov).");
            }
        }
    });

    if (!valid) {
        Swal.fire({
            icon: 'error',
            title: 'Napaka pri vnosu!',
            html: `<ul style="text-align:left;">${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`,
            confirmButtonColor: '#d33'
        });
        return;
    }

    let summaryHTML = '<ul style="text-align:left;">';
    for (const [key, value] of Object.entries(formData)) {
        summaryHTML += `<li><strong>${key}:</strong> ${value || '-'}</li>`;
    }
    summaryHTML += '</ul>';

    Swal.fire({
        title: 'Pregled podatkov',
        html: summaryHTML,
        icon: 'success',
        confirmButtonText: 'Potrdi in nadaljuj',
        confirmButtonColor: '#57A939'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("Zbrani podatki:", formData);
            Swal.fire('Oddano!', 'Podatki so bili uspešno poslani.', 'success');
        }
    });
}
document.getElementById("numInput").addEventListener("input", function (e) {
    let value = e.target.value.replace(/-/g, "");
    value = value.replace(/\D/g, "");

    if (value.length > 15) {
        value = value.slice(0, 15);
    }
    const groups = value.match(/.{1,4}/g) || [];

    e.target.value = groups.join("-");
});
