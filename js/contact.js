
document.addEventListener("DOMContentLoaded", () => {
 
    if (window.lucide) {
        lucide.createIcons();
    }
 
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <i data-lucide="loader-circle"></i>
                Sending...
            `;
            if (window.lucide) {
                lucide.createIcons();
            }
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <i data-lucide="check-circle"></i>
                    Message Sent
                `;
                if (window.lucide) {
                    lucide.createIcons();
                }
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalHTML;
                    if (window.lucide) {
                        lucide.createIcons();
                    }
                }, 2000);
            }, 1500);
        });
    }

    const newsletter = document.querySelector(".newsletter-form");
    if (newsletter) {
        newsletter.addEventListener("submit", function (e) {
            e.preventDefault();
            const input = newsletter.querySelector("input");
            if (input.value.trim() === "") {
                input.focus();
                return;
            }
            alert("Thank you for subscribing to BloomNest!");
            newsletter.reset();
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    const cards = document.querySelectorAll(".contact-card, .sidebar-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
 
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";
        setTimeout(() => {
            heroContent.style.transition = "all .8s ease";
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 200);
    }
 
    const reveals = document.querySelectorAll(
        ".contact-card,.contact-form-card,.sidebar-card,.location-card,.faq-item,.newsletter-box"
    );
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });
    reveals.forEach(item => {
        item.classList.add("reveal");
        observer.observe(item);
    });
});