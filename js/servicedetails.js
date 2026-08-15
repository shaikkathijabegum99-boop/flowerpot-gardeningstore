document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    function refreshIcons() {
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    function hideLoader() {
        const loader =
            document.getElementById("pageLoader");
        if (!loader) {
            return;
        }
        loader.classList.add("loaded");
        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }
    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader);
    }
    const plantCards =
        document.querySelectorAll(".plant-card");
    plantCards.forEach(function (card) {
        const minusButton =
            card.querySelector(
                ".minus, .qty-minus"
            );
        const plusButton =
            card.querySelector(
                ".plus, .qty-plus"
            );
        const quantityElement =
            card.querySelector(
                ".qty, .qty-value"
            );
        if (!quantityElement) {
            return;
        }
        let quantity = parseInt(
            quantityElement.textContent.trim(),
            10
        );
        if (Number.isNaN(quantity)) {
            quantity = 1;
        }
        function updateQuantity() {
            quantityElement.textContent =
                quantity;
        }
        if (minusButton) {
            minusButton.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (quantity > 1) {
                        quantity--;
                        updateQuantity();
                    }
                }
            );
        }
        if (plusButton) {
            plusButton.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (quantity < 20) {
                        quantity++;
                        updateQuantity();
                    }
                }
            );
        }
        updateQuantity();
    });
    const addCartButtons =
        document.querySelectorAll(
            ".plant-card .add-cart"
        );
    addCartButtons.forEach(function (button) {
        button.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
                const card =
                    button.closest(".plant-card");
                if (!card) {
                    return;
                }
                const titleElement =
                    card.querySelector("h3");
                const priceElement =
                    card.querySelector(".price");
                const imageElement =
                    card.querySelector(".plant-image img");
                const quantityElement =
                    card.querySelector(
                        ".qty, .qty-value"
                    );
                const title =
                    titleElement
                        ? titleElement.textContent.trim()
                        : "Plant";
                const price =
                    priceElement
                        ? priceElement.textContent.trim()
                        : "";
                const image =
                    imageElement
                        ? imageElement.getAttribute("src")
                        : "";
                const quantity =
                    quantityElement
                        ? parseInt(
                            quantityElement.textContent.trim(),
                            10
                        ) || 1
                        : 1;
                const cart =
                    JSON.parse(
                        localStorage.getItem(
                            "bloomnestCart"
                        )
                    ) || [];
                const productId =
                    title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "");
                const existing =
                    cart.find(
                        function (item) {
                            return item.id === productId;
                        }
                    );
                if (existing) {
                    existing.quantity += quantity;
                } else {
                    cart.push({
                        id: productId,
                        name: title,
                        price: price,
                        image: image,
                        quantity: quantity
                    });
                }
                localStorage.setItem(
                    "bloomnestCart",
                    JSON.stringify(cart)
                );
                card.classList.add(
                    "cart-added"
                );
                const originalHTML =
                    button.innerHTML;
                button.innerHTML = `
                    <i data-lucide="check"></i>
                    Added
                `;
                refreshIcons();
                setTimeout(function () {
                    card.classList.remove(
                        "cart-added"
                    );
                    button.innerHTML =
                        originalHTML;
                    refreshIcons();
                }, 1800);
                showToast(
                    title + " added to your cart."
                );
            }
        );
    });
    function showToast(message) {
        let toast =
            document.querySelector(
                ".service-detail-toast"
            );
        if (!toast) {
            toast =
                document.createElement("div");
            toast.className =
                "service-detail-toast";
            document.body.appendChild(toast);
        }
        toast.textContent =
            message;
        toast.classList.add("show");
        clearTimeout(
            toast.timer
        );
        toast.timer =
            setTimeout(function () {
                toast.classList.remove(
                    "show"
                );
            }, 2500);
    }
    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );
    faqItems.forEach(function (item) {
        const question =
            item.querySelector(
                ".faq-question"
            );
        const answer =
            item.querySelector(
                ".faq-answer"
            );
        const icon =
            item.querySelector(
                ".faq-icon"
            );
        if (!question || !answer) {
            return;
        }
        question.setAttribute(
            "type",
            "button"
        );
        question.addEventListener(
            "click",
            function () {
                const wasActive =
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
                if (!wasActive) {
                    item.classList.add(
                        "active"
                    );
                }
                refreshIcons();
            }
        );
        question.setAttribute(
            "aria-expanded",
            item.classList.contains(
                "active"
            )
                ? "true"
                : "false"
        );
        if (icon) {
            icon.textContent =
                "+";
        }
    });
    faqItems.forEach(function (item) {
        const question =
            item.querySelector(
                ".faq-question"
            );
        if (!question) {
            return;
        }
        const observer =
            new MutationObserver(
                function () {
                    question.setAttribute(
                        "aria-expanded",
                        item.classList.contains(
                            "active"
                        )
                            ? "true"
                            : "false"
                    );
                }
            );
        observer.observe(
            item,
            {
                attributes: true,
                attributeFilter: ["class"]
            }
        );
    });
    document.querySelectorAll(
        'a[href="#overview"]'
    ).forEach(function (link) {
        link.addEventListener(
            "click",
            function (event) {
                const target =
                    document.getElementById(
                        "overview"
                    );
                if (!target) {
                    return;
                }
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });
    document.querySelectorAll(
        ".booknow-trigger"
    ).forEach(function (trigger) {
        trigger.addEventListener(
            "click",
            function (event) {
                /*
                 * booknow.js normally handles
                 * the popup. We intentionally do
                 * not prevent the click here.
                 */
                setTimeout(function () {
                    refreshIcons();
                }, 100);
            }
        );
    });
    document.querySelectorAll(
        '.cta-content .btn-light'
    ).forEach(function (button) {
        button.addEventListener(
            "click",
            function () {
                /*
                 * Normal anchor behaviour is kept.
                 * This exists only to refresh icons
                 * after navigation-related UI changes.
                 */
                setTimeout(function () {
                    refreshIcons();
                }, 100);
            }
        );
    });
    document.querySelectorAll(
        ".plant-image img, .overview-image img, .cta-image img"
    ).forEach(function (image) {
        image.addEventListener(
            "error",
            function () {
                image.style.visibility =
                    "hidden";
            }
        );
    });
    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );
    if (reducedMotion.matches) {
        document.documentElement.classList.add(
            "reduce-motion"
        );
    }
    refreshIcons();
});