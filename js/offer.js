document.addEventListener("DOMContentLoaded", function () {
    function refreshIcons() {
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId =
                this.getAttribute("href");
            if (!targetId || targetId === "#") {
                return;
            }
            const target =
                document.querySelector(targetId);
            if (!target) {
                return;
            }
            event.preventDefault();
            const offset =
                target.getBoundingClientRect().top +
                window.scrollY -
                85;
            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        });
    });
    const bulkForm =
        document.getElementById("bulkOrderForm");
    if (bulkForm) {
        bulkForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name =
                document.getElementById("bulkName")
                ?.value.trim();
            const company =
                document.getElementById("bulkCompany")
                ?.value.trim();
            const email =
                document.getElementById("bulkEmail")
                ?.value.trim();
            const phone =
                document.getElementById("bulkPhone")
                ?.value.trim();
            const category =
                document.getElementById("bulkCategory")
                ?.value;
            const quantity =
                document.getElementById("bulkQuantity")
                ?.value.trim();
            const message =
                document.getElementById("bulkMessage")
                ?.value.trim();
            /* -----------------------------------------
               REQUIRED FIELDS
            ----------------------------------------- */
            if (!name || !email || !phone || !message) {
                showOfferMessage(
                    "Please complete all required fields."
                );
                return;
            }
            /* -----------------------------------------
               EMAIL VALIDATION
            ----------------------------------------- */
            if (!isValidEmail(email)) {
                showOfferMessage(
                    "Please enter a valid email address."
                );
                document
                    .getElementById("bulkEmail")
                    ?.focus();
                return;
            }
            /* -----------------------------------------
               PHONE VALIDATION
            ----------------------------------------- */
            const cleanPhone =
                phone.replace(/[\s\-()+]/g, "");
            if (!/^\d{8,15}$/.test(cleanPhone)) {
                showOfferMessage(
                    "Please enter a valid phone number."
                );
                document
                    .getElementById("bulkPhone")
                    ?.focus();
                return;
            }
            /* -----------------------------------------
               SAVE DEMO ENQUIRY
            ----------------------------------------- */
            const enquiry = {
                name: name,
                company: company,
                email: email,
                phone: phone,
                category: category,
                quantity: quantity,
                message: message,
                submittedAt:
                    new Date().toISOString()
            };
            localStorage.setItem(
                "bloomnestBulkEnquiry",
                JSON.stringify(enquiry)
            );
            /* -----------------------------------------
               SUCCESS
            ----------------------------------------- */
            bulkForm.reset();
            showOfferMessage(
                "Thank you! Your bulk enquiry has been submitted."
            );
        });
    }
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function showOfferMessage(message) {
        let box =
            document.getElementById("offerMessage");
        if (!box) {
            box =
                document.createElement("div");
            box.id =
                "offerMessage";
            box.style.position =
                "fixed";
            box.style.right =
                "20px";
            box.style.bottom =
                "20px";
            box.style.zIndex =
                "99999";
            box.style.maxWidth =
                "340px";
            box.style.padding =
                "13px 18px";
            box.style.borderRadius =
                "12px";
            box.style.background =
                "var(--primary)";
            box.style.color =
                "#fff";
            box.style.fontFamily =
                "Manrope, sans-serif";
            box.style.fontSize =
                "13px";
            box.style.fontWeight =
                "700";
            box.style.lineHeight =
                "1.5";
            box.style.boxShadow =
                "var(--shadow-lg)";
            box.style.opacity =
                "0";
            box.style.transform =
                "translateY(10px)";
            box.style.transition =
                "opacity .3s ease, transform .3s ease";
            document.body.appendChild(box);
        }
        box.textContent =
            message;
        box.style.opacity =
            "1";
        box.style.transform =
            "translateY(0)";
        clearTimeout(
            box._timer
        );
        box._timer =
            setTimeout(function () {
                box.style.opacity =
                    "0";
                box.style.transform =
                    "translateY(10px)";
            }, 3200);
    }
    document
        .querySelectorAll(
            ".offer-category-card .text-link"
        )
        .forEach(function (link) {
            link.addEventListener(
                "click",
                function () {
                    localStorage.setItem(
                        "bloomnestSelectedOffer",
                        this.textContent.trim()
                    );
                }
            );
        });
    document
        .querySelectorAll(
            ".offer-hero-actions a, .offer-final-actions a"
        )
        .forEach(function (link) {
            link.addEventListener(
                "click",
                function () {
                    localStorage.setItem(
                        "bloomnestOfferAction",
                        this.textContent.trim()
                    );
                }
            );
        });
    refreshIcons();
});