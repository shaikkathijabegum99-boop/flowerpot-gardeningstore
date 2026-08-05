/*=========================================
BLOOMNEST BOOKING JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
    Lucide Icons
    =====================================*/

    if (window.lucide) {
        lucide.createIcons();
    }

    /*=====================================
    Delivery Date
    =====================================*/

    const dateInput = document.getElementById("date");

    if (dateInput) {

        const today = new Date().toISOString().split("T")[0];

        dateInput.min = today;

    }

    /*=====================================
    Form Submit
    =====================================*/

    const form = document.querySelector(".bulk-booking-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            if (name === "") {

                alert("Please enter your full name.");

                return;

            }

            if (email === "") {

                alert("Please enter your email address.");

                return;

            }

            if (phone === "") {

                alert("Please enter your phone number.");

                return;

            }

            alert(
                "✅ Thank you!\n\nYour bulk order request has been submitted successfully.\nOur BloomNest team will contact you shortly."
            );

            form.reset();

        });

    }

    /*=====================================
    Reset Confirmation
    =====================================*/

    const resetBtn = form?.querySelector('button[type="reset"]');

    if (resetBtn) {

        resetBtn.addEventListener("click", function (e) {

            const confirmReset = confirm(
                "Are you sure you want to clear the form?"
            );

            if (!confirmReset) {

                e.preventDefault();

            }

        });

    }

});