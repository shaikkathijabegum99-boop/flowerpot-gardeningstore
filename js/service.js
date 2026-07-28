/*==================================================
BloomNest Service Page
service.js
==================================================*/
document.addEventListener("DOMContentLoaded", () => {
    /*==========================================
    Lucide Icons
    ==========================================*/
    if (window.lucide) {
        lucide.createIcons();
    }
    /*==========================================
    Scroll Animation
    ==========================================*/
    const animatedElements = document.querySelectorAll(
        ".service-card, .why-service-card, .service-process-card, .pricing-service-card, .service-testimonial-card, .faq-item"
    );
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: .15
    });
    animatedElements.forEach(item => {
        item.classList.add("fade-up");
        observer.observe(item);
    });
    /*==========================================
    Counter Animation
    ==========================================*/
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const updateCounter = () => {
            const increment = target / 80;
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
    /*==========================================
    Pricing Card Hover
    ==========================================*/
    document.querySelectorAll(".pricing-service-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });
        card.addEventListener("mouseleave", () => {
            if (!card.classList.contains("featured")) {
                card.style.transform = "";
            } else {
                card.style.transform = "scale(1.04)";
            }
        });
    });
    /*==========================================
    Newsletter Form
    ==========================================*/
    const newsletter = document.querySelector(".newsletter-form");
    if (newsletter) {
        newsletter.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = this.querySelector("input").value.trim();
            if (email === "") {
                alert("Please enter your email.");
                return;
            }
            alert("Thank you for subscribing!");
            this.reset();
        });
    }
    /*==========================================
    Smooth Scroll Buttons
    ==========================================*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    /*==========================================
    Gallery Hover Zoom
    ==========================================*/
    document.querySelectorAll(".gallery-grid img").forEach(image => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.08)";
        });
        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });
    /*==========================================
    Floating Hero Card Animation
    ==========================================*/
    const floatingCard = document.querySelector(".service-floating-card");
    if (floatingCard) {
        let direction = 1;
        setInterval(() => {
            floatingCard.style.transform =
                `translateY(${direction * 8}px)`;
            direction *= -1;
        }, 1800);
    }
    /*==========================================
    Image Reveal
    ==========================================*/
    document.querySelectorAll(".service-hero-image img, .service-cta-image img")
        .forEach(img => {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
            });
        });
});