/*=========================================================
BloomNest Blog Detail JS
=========================================================*/
document.addEventListener("DOMContentLoaded", () => {
    /*=========================================
    Lucide Icons
    =========================================*/
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
    /*=========================================
    FAQ Accordion
    =========================================*/
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector("i");
        answer.style.display = "none";
        question.addEventListener("click", () => {
            const active = item.classList.contains("active");
            faqItems.forEach(faq => {
                faq.classList.remove("active");
                faq.querySelector(".faq-answer").style.display = "none";
                const faqIcon = faq.querySelector(".faq-question i");
                if (faqIcon) {
                    faqIcon.setAttribute("data-lucide", "plus");
                }
            });
            if (!active) {
                item.classList.add("active");
                answer.style.display = "block";
                if (icon) {
                    icon.setAttribute("data-lucide", "minus");
                }
            }
            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }
        });
    });
    /*=========================================
    Smooth Scroll
    =========================================*/
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
    /*=========================================
    Reading Progress Bar
    =========================================*/
    const progressBar = document.createElement("div");
    progressBar.className = "reading-progress";
    document.body.appendChild(progressBar);
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + "%";
    });
    /*=========================================
    Reveal Animation
    =========================================*/
    const revealItems = document.querySelectorAll(
        ".tip-card,.related-card,.sidebar-widget,.article-image,.article-quote,.author-box,.care-box,.faq-item"
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
    revealItems.forEach(item => {
        item.classList.add("reveal");
        observer.observe(item);
    });
    /*=========================================
    Gallery Image Zoom
    =========================================*/
    document.querySelectorAll(".article-gallery img").forEach(image => {
        image.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.className = "gallery-overlay";
            overlay.innerHTML = `
                <img src="${image.src}" alt="">
            `;
            document.body.appendChild(overlay);
            overlay.addEventListener("click", () => {
                overlay.remove();
            });
        });
    });
});