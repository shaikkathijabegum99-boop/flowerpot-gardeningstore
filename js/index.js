"use strict";
document.addEventListener("DOMContentLoaded", () => {
    initCounters();
    initWishlist();
    initQuickView();
    initCompare();
    initAddToCart();
    initNewsletter();
    refreshIcons();
});

function refreshIcons() {
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const counter = entry.target;
            const target = Number(counter.dataset.count);
            let current = 0;
            const increment = Math.ceil(target / 100);
            function update() {
                current += increment;
                if (current < target) {
                    counter.textContent = current.toLocaleString();
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            }
            update();
            observer.unobserve(counter);
        });
    });
    counters.forEach(counter => observer.observe(counter));
}

function initWishlist() {
    document.querySelectorAll(".wishlist-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            alert(
                button.classList.contains("active")
                    ? "Added to Wishlist ❤️"
                    : "Removed from Wishlist"
            );
        });
    });
}

function initQuickView() {
    document.querySelectorAll(".quick-view").forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".product-card");
            const title = card.querySelector(".product-title").textContent;
            const price = card.querySelector(".current-price").textContent;
            alert(`${title}\nPrice: ${price}`);
        });
    });
}

function initCompare() {
    document.querySelectorAll(".compare-btn").forEach(button => {
        button.addEventListener("click", () => {
            const product = button
                .closest(".product-card")
                .querySelector(".product-title")
                .textContent;
            alert(`${product} added for comparison.`);
        });
    });
}

function initAddToCart() {
    document.querySelectorAll(".add-cart").forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".product-card");
            const id = card.dataset.id;
            const title = card.querySelector(".product-title").textContent;
            const price = card.dataset.price;
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({
                id,
                title,
                price,
                qty: 1
            });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${title} added to cart.`);
        });
    });
}

function initNewsletter() {
    const form = document.querySelector(".newsletter-form");
    if (!form) return;
    form.addEventListener("submit", e => {
        e.preventDefault();
        const email = form.querySelector("input").value.trim();
        if (!email) return;
        alert("Thank you for subscribing!");
        form.reset();
    });
}
/*=========================================
ADD TO CART
=========================================*/

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", function () {

        this.innerHTML = `
            <i data-lucide="check"></i>
            Added
        `;

        this.disabled = true;

        this.style.background = "#2e7d32";

        lucide.createIcons();

        setTimeout(() => {

            this.innerHTML = "Add To Cart";

            this.disabled = false;

            this.style.background = "";

        }, 2000);

    });

});