document.addEventListener("DOMContentLoaded", function () {
    function refreshIcons() {
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    const faqItems =
        document.querySelectorAll(".faq-item");
    faqItems.forEach(function (item) {
        const question =
            item.querySelector(".faq-question");
        if (!question) {
            return;
        }
        question.addEventListener(
            "click",
            function () {
                const isOpen =
                    item.classList.contains("active");
                faqItems.forEach(function (otherItem) {
                    otherItem.classList.remove("active");
                });
                if (!isOpen) {
                    item.classList.add("active");
                }
            }
        );
    });
    const articleLinks =
        document.querySelectorAll(
            '.article-toc a[href^="#"]'
        );
    articleLinks.forEach(function (link) {
        link.addEventListener(
            "click",
            function (event) {
                const id =
                    this.getAttribute("href");
                if (!id || id === "#") {
                    return;
                }
                const target =
                    document.querySelector(id);
                if (!target) {
                    return;
                }
                event.preventDefault();
                const offset =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    95;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
            }
        );
    });
    const articleSections =
        document.querySelectorAll(
            ".article-content .article-section"
        );
    const tocLinks =
        document.querySelectorAll(
            '.article-toc a[href^="#"]'
        );
    function updateActiveToc() {
        if (
            !articleSections.length ||
            !tocLinks.length
        ) {
            return;
        }
        let currentId = "";
        articleSections.forEach(function (section) {
            const position =
                section.getBoundingClientRect();
            if (position.top <= 160) {
                currentId =
                    section.id;
            }
        });
        tocLinks.forEach(function (link) {
            const linkTarget =
                link.getAttribute("href");
            link.classList.toggle(
                "active",
                linkTarget === "#" + currentId
            );
        });
    }
    window.addEventListener(
        "scroll",
        updateActiveToc,
        { passive: true }
    );
    updateActiveToc();
    const shareButtons =
        document.querySelectorAll(
            "[data-share]"
        );
    shareButtons.forEach(function (button) {
        button.addEventListener(
            "click",
            async function () {
                const type =
                    this.dataset.share;
                const pageUrl =
                    window.location.href;
                const pageTitle =
                    document.title;
                /* -----------------------------------------
                   COPY LINK
                ----------------------------------------- */
                if (type === "copy") {
                    try {
                        await navigator.clipboard.writeText(
                            pageUrl
                        );
                        showMessage(
                            "Article link copied."
                        );
                    } catch (error) {
                        showMessage(
                            "Unable to copy the article link."
                        );
                    }
                    return;
                }
                /* -----------------------------------------
                   FACEBOOK
                ----------------------------------------- */
                if (type === "facebook") {
                    const shareUrl =
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                        encodeURIComponent(pageUrl);
                    openShareWindow(
                        shareUrl
                    );
                    return;
                }
                /* -----------------------------------------
                   LINKEDIN
                ----------------------------------------- */
                if (type === "linkedin") {
                    const shareUrl =
                        "https://www.linkedin.com/sharing/share-offsite/?url=" +
                        encodeURIComponent(pageUrl);
                    openShareWindow(
                        shareUrl
                    );
                    return;
                }
                /* -----------------------------------------
                   WEB SHARE
                ----------------------------------------- */
                if (
                    type === "native" &&
                    navigator.share
                ) {
                    try {
                        await navigator.share({
                            title: pageTitle,
                            text:
                                "Read this BloomNest gardening guide.",
                            url: pageUrl
                        });
                    } catch (error) {
                    }
                }
            }
        );
    });
    function openShareWindow(url) {
        window.open(
            url,
            "_blank",
            "noopener,noreferrer,width=650,height=550"
        );
    }
    const newsletterForm =
        document.querySelector(
            "#blogDetailNewsletterForm"
        );
    if (newsletterForm) {
        newsletterForm.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();
                const emailInput =
                    newsletterForm.querySelector(
                        'input[type="email"]'
                    );
                if (!emailInput) {
                    return;
                }
                const email =
                    emailInput.value.trim();
                if (!isValidEmail(email)) {
                    showMessage(
                        "Please enter a valid email address."
                    );
                    emailInput.focus();
                    return;
                }
                localStorage.setItem(
                    "bloomnestNewsletterEmail",
                    email
                );
                newsletterForm.reset();
                showMessage(
                    "Thanks! You are subscribed to BloomNest Notes."
                );
            }
        );
    }
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);
    }
    function showMessage(message) {
        let box =
            document.getElementById(
                "blogDetailMessage"
            );
        if (!box) {
            box =
                document.createElement("div");
            box.id =
                "blogDetailMessage";
            box.style.position =
                "fixed";
            box.style.right =
                "20px";
            box.style.bottom =
                "20px";
            box.style.zIndex =
                "99999";
            box.style.maxWidth =
                "320px";
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
            box.style.transition =
                "opacity .3s ease";
            document.body.appendChild(box);
        }
        box.textContent =
            message;
        box.style.opacity =
            "1";
        clearTimeout(
            box._messageTimer
        );
        box._messageTimer =
            setTimeout(
                function () {
                    box.style.opacity =
                        "0";
                },
                2800
            );
    }
    document
        .querySelectorAll(
            'a[href="#top"]'
        )
        .forEach(function (link) {
            link.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            );
        });
    document
        .querySelectorAll(
            ".blog-detail-hero-image img, .article-content img, .article-gallery img, .author-box img"
        )
        .forEach(function (image) {
            image.addEventListener(
                "error",
                function () {
                    this.style.display =
                        "none";
                }
            );
        });
    document
        .querySelectorAll(
            ".faq-question"
        )
        .forEach(function (button) {
            button.setAttribute(
                "aria-expanded",
                "false"
            );
            button.addEventListener(
                "click",
                function () {
                    const item =
                        this.closest(
                            ".faq-item"
                        );
                    const expanded =
                        item &&
                        item.classList.contains(
                            "active"
                        );
                    this.setAttribute(
                        "aria-expanded",
                        expanded ? "true" : "false"
                    );
                }
            );
        });
    refreshIcons();
});