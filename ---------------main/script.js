const results = {};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carReportForm');
    form.addEventListener('submit', submitForm);
});

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    location.href = 'car_report_success.html'; // Navigate to the success page
}


function toggleDropdown(name) {
    const radioNo = document.querySelector(`input[name="${name}"][value="no"]`);
    const dropdown = document.getElementById(`${name}-dropdown`);
    const otherField = document.getElementById(`${name}-other`);

    dropdown.disabled = !radioNo.checked;

    if (!radioNo.checked) {
        otherField.disabled = true; //  ถ้าไม่ได้เลือก no ให้ disable text field ไว้ดังเดิม
        otherField.value = "";     // Clear the text field
    }

    const selectedValue = document.querySelector(`input[name="${name}"]:checked`).value;
    results[name] = { status: selectedValue, dropdown: dropdown.value, other: otherField.value };
    console.log(results);
}

function updateDropdown(name) {
    const dropdown = document.getElementById(`${name}-dropdown`);
    const otherField = document.getElementById(`${name}-other`);

    // ถ้าผู้ใช้เลือก "อื่นๆ" ให้ enable text field
    if (dropdown.value === "other") {
        otherField.disabled = false;
    } else {
        otherField.disabled = true;
        otherField.value = ""; // Clear the text field if "อื่นๆ" is not selected
    }

    results[name].dropdown = dropdown.value;
    results[name].other = otherField.value;
    console.log(results);
}
function resetForm() {
    document.getElementById('carReportForm').reset();
}
