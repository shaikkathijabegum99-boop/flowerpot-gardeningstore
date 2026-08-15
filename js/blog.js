/* =========================================================
   BLOOMNEST BLOG
   CATEGORY FILTER + SEARCH
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    /* =====================================================
       MAIN ELEMENTS
    ===================================================== */
    const blogGrid = document.getElementById("blogGrid");
    const categoryList =
        document.querySelector(".blog-category-list");
    const searchInput =
        document.getElementById("blogSearch");
    const clearButton =
        document.getElementById("clearBlogFilter");
    const emptyState =
        document.getElementById("blogEmpty");
    const resultCount =
        document.getElementById("blogResultCount");
    /* =====================================================
       CHECK BLOG GRID
    ===================================================== */
    if (!blogGrid) {
        console.error(
            "BloomNest Blog: #blogGrid was not found."
        );
        return;
    }
    /* =====================================================
       GET BLOG CARDS
    ===================================================== */
    const blogCards = Array.from(
        blogGrid.querySelectorAll(".blog-card")
    );
    console.log(
        "BloomNest Blog: Found",
        blogCards.length,
        "blog cards."
    );
    /* =====================================================
       STATE
    ===================================================== */
    let activeCategory = "all";
    let searchTerm = "";
    /* =====================================================
       NORMALIZE VALUE
    ===================================================== */
    function normalize(value) {
        return String(value || "")
            .trim()
            .toLowerCase();
    }
    /* =====================================================
       FILTER BLOG CARDS
    ===================================================== */
    function filterBlogCards() {
        let visibleCards = 0;
        const selectedCategory =
            normalize(activeCategory);
        const search =
            normalize(searchTerm);
        blogCards.forEach(function (card) {
            const cardCategory =
                normalize(
                    card.getAttribute(
                        "data-category"
                    )
                );
            const cardText =
                normalize(
                    card.textContent
                );
            const matchesCategory =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;
            const matchesSearch =
                search === "" ||
                cardText.includes(search);
            const shouldShow =
                matchesCategory &&
                matchesSearch;
            if (shouldShow) {
                card.hidden = false;
                card.style.display = "";
                visibleCards++;
            } else {
                card.hidden = true;
                card.style.display = "none";
            }
        });
        /* =================================================
           RESULT COUNT
        ================================================= */
        if (resultCount) {
            resultCount.textContent =
                visibleCards +
                (
                    visibleCards === 1
                        ? " Article"
                        : " Articles"
                );
        }
        /* =================================================
           EMPTY STATE
        ================================================= */
        if (emptyState) {
            if (visibleCards === 0) {
                emptyState.style.display = "flex";
            } else {
                emptyState.style.display = "none";
            }
        }
        /* =================================================
           LUCIDE
        ================================================= */
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    /* =====================================================
       CATEGORY CLICK
       EVENT DELEGATION
    ===================================================== */
    if (categoryList) {
        categoryList.addEventListener(
            "click",
            function (event) {
                const button =
                    event.target.closest(
                        ".blog-category-btn"
                    );
                if (!button) {
                    return;
                }
                event.preventDefault();
                activeCategory =
                    normalize(
                        button.getAttribute(
                            "data-category"
                        )
                    ) || "all";
                /* -----------------------------------------
                   ACTIVE BUTTON
                ----------------------------------------- */
                categoryList
                    .querySelectorAll(
                        ".blog-category-btn"
                    )
                    .forEach(
                        function (item) {
                            item.classList.remove(
                                "active"
                            );
                        }
                    );
                button.classList.add(
                    "active"
                );
                /* -----------------------------------------
                   FILTER
                ----------------------------------------- */
                filterBlogCards();
                /* -----------------------------------------
                   SCROLL TO ARTICLE GRID
                ----------------------------------------- */
                const articleSection =
                    document.querySelector(
                        ".blog-articles"
                    );
                if (articleSection) {
                    setTimeout(
                        function () {
                            const top =
                                articleSection.getBoundingClientRect().top +
                                window.scrollY -
                                80;
                            window.scrollTo({
                                top: top,
                                behavior: "smooth"
                            });
                        },
                        50
                    );
                }
            }
        );
    }
    /* =====================================================
       SEARCH
    ===================================================== */
    if (searchInput) {
        searchInput.addEventListener(
            "input",
            function () {
                searchTerm =
                    this.value;
                filterBlogCards();
            }
        );
        searchInput.addEventListener(
            "keydown",
            function (event) {
                if (
                    event.key === "Escape"
                ) {
                    this.value = "";
                    searchTerm = "";
                    filterBlogCards();
                }
            }
        );
    }
    /* =====================================================
       CLEAR FILTER
    ===================================================== */
    if (clearButton) {
        clearButton.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
                activeCategory = "all";
                searchTerm = "";
                if (searchInput) {
                    searchInput.value = "";
                }
                categoryList
                    ?.querySelectorAll(
                        ".blog-category-btn"
                    )
                    .forEach(
                        function (button) {
                            button.classList.remove(
                                "active"
                            );
                        }
                    );
                const allButton =
                    categoryList?.querySelector(
                        '.blog-category-btn[data-category="all"]'
                    );
                if (allButton) {
                    allButton.classList.add(
                        "active"
                    );
                }
                filterBlogCards();
            }
        );
    }
    /* =====================================================
       INITIALIZE
    ===================================================== */
    filterBlogCards();
    /* =====================================================
       ICONS
    ===================================================== */
    if (window.lucide) {
        lucide.createIcons();
    }
});