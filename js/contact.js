document.addEventListener("DOMContentLoaded", function () {
    function refreshIcons() {
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    refreshIcons();
    const contactForm =
        document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();
                const nameInput =
                    contactForm.querySelector(
                        'input[type="text"]'
                    );
                const phoneInput =
                    contactForm.querySelector(
                        'input[type="tel"]'
                    );
                const emailInput =
                    contactForm.querySelector(
                        'input[type="email"]'
                    );
                const subjectInput =
                    contactForm.querySelector(
                        "select"
                    );
                const messageInput =
                    contactForm.querySelector(
                        "textarea"
                    );
                const name =
                    nameInput?.value.trim() || "";
                const phone =
                    phoneInput?.value.trim() || "";
                const email =
                    emailInput?.value.trim() || "";
                const subject =
                    subjectInput?.value.trim() || "";
                const message =
                    messageInput?.value.trim() || "";
                if (
                    !name ||
                    !phone ||
                    !email ||
                    !message
                ) {
                    showContactMessage(
                        "Please complete all required fields."
                    );
                    return;
                }
                if (!isValidEmail(email)) {
                    showContactMessage(
                        "Please enter a valid email address."
                    );
                    emailInput?.focus();
                    return;
                }
                const cleanPhone =
                    phone.replace(
                        /[\s\-()+]/g,
                        ""
                    );
                if (
                    !/^\d{8,15}$/.test(
                        cleanPhone
                    )
                ) {
                    showContactMessage(
                        "Please enter a valid phone number."
                    );
                    phoneInput?.focus();
                    return;
                }
                const selectedMethod =
                    contactForm.querySelector(
                        'input[name="contact"]:checked'
                    )?.value || "phone";
                const contactData = {
                    name: name,
                    phone: phone,
                    email: email,
                    subject: subject,
                    preferredContact:
                        selectedMethod,
                    message: message,
                    submittedAt:
                        new Date().toISOString()
                };
                localStorage.setItem(
                    "bloomnestContactMessage",
                    JSON.stringify(contactData)
                );
                contactForm.reset();
                showContactMessage(
                    "Thank you! Your message has been sent successfully."
                );
                refreshIcons();
            }
        );
    }
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            email
        );
    }
    const faqItems =
        document.querySelectorAll(
            ".contact-faq-item"
        );
    faqItems.forEach(function (item) {
        const question =
            item.querySelector(
                ".contact-faq-question"
            );
        const answer =
            item.querySelector(
                ".contact-faq-answer"
            );
        if (!question || !answer) {
            return;
        }
        question.addEventListener(
            "click",
            function () {
                const isActive =
                    item.classList.contains(
                        "active"
                    );
                faqItems.forEach(
                    function (otherItem) {
                        otherItem.classList.remove(
                            "active"
                        );
                    }
                );
                if (!isActive) {
                    item.classList.add(
                        "active"
                    );
                }
                refreshIcons();
            }
        );
    });
    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function (link) {
                link.addEventListener(
                    "click",
                    function (event) {
                        const targetId =
                            this.getAttribute(
                                "href"
                            );
                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }
                        const target =
                            document.querySelector(
                                targetId
                            );
                        if (!target) {
                            return;
                        }
                        event.preventDefault();
                        const offset =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            85;
                        window.scrollTo({
                            top: offset,
                            behavior: "smooth"
                        });
                    }
                );
            }
        );
    const hoursLink =
        document.querySelector(
            'a[href="#hours"]'
        );
    if (hoursLink) {
        hoursLink.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
                showContactMessage(
                    "Store hours: Monday–Saturday 9:00 AM–7:00 PM, Sunday 10:00 AM–5:00 PM."
                );
            }
        );
    }
    document
        .querySelectorAll(
            ".social-links a[href='#']"
        )
        .forEach(
            function (link) {
                link.addEventListener(
                    "click",
                    function (event) {
                        event.preventDefault();
                    }
                );
            }
        );
    function showContactMessage(message) {
        let toast =
            document.getElementById(
                "contactMessageToast"
            );
        if (!toast) {
            toast =
                document.createElement(
                    "div"
                );
            toast.id =
                "contactMessageToast";
            Object.assign(
                toast.style,
                {
                    position: "fixed",
                    left: "50%",
                    bottom: "24px",
                    transform:
                        "translate(-50%, 15px)",
                    zIndex: "99999",
                    width: "min(90%, 430px)",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    background:
                        "var(--primary)",
                    color: "#fff",
                    textAlign: "center",
                    fontFamily:
                        "Manrope, sans-serif",
                    fontSize: "13px",
                    fontWeight: "700",
                    lineHeight: "1.5",
                    boxShadow:
                        "var(--shadow-lg)",
                    opacity: "0",
                    pointerEvents: "none",
                    transition:
                        "opacity .3s ease, transform .3s ease"
                }
            );
            document.body.appendChild(
                toast
            );
        }
        toast.textContent =
            message;
        toast.style.opacity =
            "1";
        toast.style.transform =
            "translate(-50%, 0)";
        clearTimeout(
            toast._timer
        );
        toast._timer =
            setTimeout(
                function () {
                    toast.style.opacity =
                        "0";
                    toast.style.transform =
                        "translate(-50%, 15px)";
                },
                3500
            );
    }
    if (contactForm) {
        const submitButton =
            contactForm.querySelector(
                'button[type="submit"]'
            );
        if (submitButton) {
            contactForm.addEventListener(
                "submit",
                function () {
                    submitButton.classList.add(
                        "is-sending"
                    );
                    const originalText =
                        submitButton.innerText;
                    submitButton.dataset.originalText =
                        originalText;
                    submitButton.innerHTML =
                        `
                        <span class="contact-btn-loader"></span>
                        Sending...
                        `;
                    setTimeout(
                        function () {
                            submitButton.classList.remove(
                                "is-sending"
                            );
                            submitButton.innerHTML =
                                `
                                <i data-lucide="send"></i>
                                Send Message
                                `;
                            refreshIcons();
                        },
                        900
                    );
                }
            );
        }
    }
});