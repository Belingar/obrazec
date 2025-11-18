function submitButton() {
    const inputs = document.querySelectorAll("input, select, textarea");
    const formData = {};
    let valid = true;
    let errorMessages = [];

    inputs.forEach((el) => {
        const label = el.closest('.form-group')?.querySelector('.form-label')?.innerText || el.name || el.id || 'Polje';
        const value = el.value.trim();
        formData[label] = value;

        // Reset previous error styles
        el.style.border = "";

        // Basic required-field check (* in label)
        if (label.includes('*') && value === "") {
            valid = false;
            el.style.border = "2px solid red";
            errorMessages.push(`${label} je obvezno polje.`);
        }

        // Additional validation for IBAN
        if (label.toLowerCase().includes('iban') && label.includes('*')) {
            const numericValue = value.replace(/\D/g, ''); // only digits
            if (numericValue.length !== 15) {
                valid = false;
                el.style.border = "2px solid red";
                errorMessages.push("IBAN mora vsebovati natanko 15 številk (brez presledkov).");
            }
        }

        // Additional validation for Referenca
        if (label.toLowerCase().includes('referenca') && label.includes('*')) {
            const numericValue = value.replace(/\D/g, ''); // only digits
            if (numericValue.length !== 8) {
                valid = false;
                el.style.border = "2px solid red";
                errorMessages.push("Referenca mora vsebovati natanko 8 številk (brez presledkov).");
            }
        }
    });

    // If validation fails, show alert
    if (!valid) {
        Swal.fire({
            icon: 'error',
            title: 'Napaka pri vnosu!',
            html: `<ul style="text-align:left;">${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`,
            confirmButtonColor: '#d33'
        });
        return;
    }

    // If everything is valid, show summary
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
        confirmButtonColor: '#3085d6'
    }).then((result) => {
        if (result.isConfirmed) {
            // Future: Send data to backend here
            console.log("Zbrani podatki:", formData);
            Swal.fire('Oddano!', 'Podatki so bili uspešno poslani.', 'success');
        }
    });
}
