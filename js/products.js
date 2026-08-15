document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const categoryButtons = document.querySelectorAll(
        ".product-category-link"
    );
    const serviceCards = Array.from(
        document.querySelectorAll(
            ".store-product-card"
        )
    );
    const searchInput =
        document.getElementById("productSearch");
    const resultCount =
        document.getElementById(
            "productResultCount"
        );
    const emptyState =
        document.getElementById(
            "productsEmpty"
        );
    const clearSearch =
        document.getElementById(
            "clearProductSearch"
        );
    const productsGrid =
        document.getElementById(
            "productsGrid"
        );
    let activeCategory = "all";
    let searchValue = "";
    function refreshIcons() {
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    function normalize(value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");
    }
    const categoryAliases = {
        all: [
            "all"
        ],
        plants: [
            "plants"
        ],
        pots: [
            "pots",
            "pots-&-planters"
        ],
        soil: [
            "soil",
            "soil-&-fertilizer"
        ],
        seeds: [
            "seeds"
        ],
        fertilizers: [
            "fertilizers",
            "soil-&-fertilizer",
            "care"
        ],
        tools: [
            "tools"
        ],
        consultation: [
            "consultation"
        ],
        setup: [
            "setup"
        ],
        care: [
            "care"
        ],
        landscaping: [
            "landscaping"
        ]
    };
    function getCategoryValues(
        selectedCategory
    ) {
        const normalized =
            normalize(
                selectedCategory
            );
        return categoryAliases[
            normalized
        ] || [
            normalized
        ];
    }
    function updateResultCount(
        count
    ) {
        if (!resultCount) {
            return;
        }
        resultCount.textContent =
            count === 1
                ? "1 Gardening Service"
                : `${count} Gardening Services`;
    }
    function filterServices() {
        let visibleCount = 0;
        const query =
            normalize(
                searchValue
            );
        const selectedCategories =
            getCategoryValues(
                activeCategory
            );
        serviceCards.forEach(
            function (card) {
                const cardCategory =
                    normalize(
                        card.dataset.category
                    );
                const cardName =
                    normalize(
                        card.dataset.name
                    );
                const cardContent =
                    normalize(
                        card.textContent
                    );
                /* --------------------------------------
                   CATEGORY MATCH
                -------------------------------------- */
                const categoryMatch =
                    activeCategory === "all" ||
                    selectedCategories.includes(
                        cardCategory
                    );
                /* --------------------------------------
                   SEARCH MATCH
                -------------------------------------- */
                const searchMatch =
                    query === "" ||
                    cardName.includes(query) ||
                    cardCategory.includes(query) ||
                    cardContent.includes(query);
                const shouldShow =
                    categoryMatch &&
                    searchMatch;
                /* --------------------------------------
                   SHOW
                -------------------------------------- */
                if (shouldShow) {
                    card.hidden = false;
                    card.style.display = "";
                    card.classList.remove(
                        "service-hidden"
                    );
                    visibleCount++;
                }
                /* --------------------------------------
                   HIDE
                -------------------------------------- */
                else {
                    card.hidden = true;
                    card.style.display = "none";
                    card.classList.add(
                        "service-hidden"
                    );
                }
            }
        );
        updateResultCount(
            visibleCount
        );
        if (emptyState) {
            emptyState.style.display =
                visibleCount === 0
                    ? "flex"
                    : "none";
        }
        refreshIcons();
    }
    function setActiveCategory(
        button
    ) {
        if (!button) {
            return;
        }
        categoryButtons.forEach(
            function (item) {
                item.classList.remove(
                    "active"
                );
            }
        );
        button.classList.add(
            "active"
        );
        activeCategory =
            normalize(
                button.getAttribute(
                    "data-category"
                )
            ) || "all";
        filterServices();
    }
    categoryButtons.forEach(
        function (button) {
            button.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    setActiveCategory(
                        this
                    );
                    if (productsGrid) {
                        setTimeout(
                            function () {
                                const top =
                                    productsGrid
                                        .getBoundingClientRect()
                                        .top +
                                    window.scrollY -
                                    90;
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
    );
    if (searchInput) {
        searchInput.addEventListener(
            "input",
            function () {
                searchValue =
                    this.value;
                filterServices();
            }
        );
        searchInput.addEventListener(
            "keydown",
            function (event) {
                if (
                    event.key === "Escape"
                ) {
                    this.value = "";
                    searchValue = "";
                    filterServices();
                }
            }
        );
    }
    if (clearSearch) {
        clearSearch.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
                if (searchInput) {
                    searchInput.value = "";
                }
                searchValue = "";
                activeCategory = "all";
                categoryButtons.forEach(
                    function (button) {
                        button.classList.remove(
                            "active"
                        );
                    }
                );
                const allButton =
                    document.querySelector(
                        '.product-category-link[data-category="all"]'
                    );
                if (allButton) {
                    allButton.classList.add(
                        "active"
                    );
                }
                filterServices();
                if (searchInput) {
                    searchInput.focus();
                }
            }
        );
    }
    const quickButtons =
        document.querySelectorAll(
            ".product-quick-btn"
        );
    quickButtons.forEach(
        function (button) {
            button.addEventListener(
                "click",
                function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    const card =
                        this.closest(
                            ".store-product-card"
                        );
                    if (!card) {
                        return;
                    }
                    const readMore =
                        card.querySelector(
                            ".product-view-link"
                        );
                    if (readMore) {
                        readMore.classList.add(
                            "quick-focus"
                        );
                        setTimeout(
                            function () {
                                readMore.classList.remove(
                                    "quick-focus"
                                );
                            },
                            1000
                        );
                        readMore.focus();
                    }
                }
            );
        }
    );
    serviceCards.forEach(
        function (card) {
            card.addEventListener(
                "mouseenter",
                function () {
                    this.classList.add(
                        "is-active"
                    );
                }
            );
            card.addEventListener(
                "mouseleave",
                function () {
                    this.classList.remove(
                        "is-active"
                    );
                }
            );
        }
    );
    const readMoreLinks =
        document.querySelectorAll(
            ".product-view-link"
        );
    readMoreLinks.forEach(
        function (link) {
            link.addEventListener(
                "click",
                function () {
                    this.classList.add(
                        "clicked"
                    );
                    setTimeout(
                        function () {
                            link.classList.remove(
                                "clicked"
                            );
                        },
                        250
                    );
                }
            );
        }
    );
    const shopButton =
        document.querySelector(
            '.products-hero-actions a[href="#productsGrid"]'
        );
    if (
        shopButton &&
        productsGrid
    ) {
        shopButton.addEventListener(
            "click",
            function (event) {
                event.preventDefault();
                productsGrid.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    }
    document.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key !== "Escape"
            ) {
                return;
            }
            if (searchInput) {
                searchInput.value = "";
            }
            searchValue = "";
            activeCategory = "all";
            categoryButtons.forEach(
                function (button) {
                    button.classList.remove(
                        "active"
                    );
                }
            );
            const allButton =
                document.querySelector(
                    '.product-category-link[data-category="all"]'
                );
            if (allButton) {
                allButton.classList.add(
                    "active"
                );
            }
            filterServices();
        }
    );
    function applyRTL() {
        const isRTL =
            document.documentElement.dir === "rtl";
        const arrows =
            document.querySelectorAll(
                ".product-view-link svg"
            );
        arrows.forEach(
            function (arrow) {
                arrow.style.transform =
                    isRTL
                        ? "rotate(180deg)"
                        : "";
            }
        );
    }
    applyRTL();
    const html =
        document.documentElement;
    if (
        typeof MutationObserver !==
        "undefined"
    ) {
        const observer =
            new MutationObserver(
                function () {
                    refreshIcons();
                    applyRTL();
                }
            );
        observer.observe(
            html,
            {
                attributes: true,
                attributeFilter: [
                    "dir",
                    "data-theme",
                    "class"
                ]
            }
        );
    }
    const allCategoryButton =
        document.querySelector(
            '.product-category-link[data-category="all"]'
        );
    if (allCategoryButton) {
        categoryButtons.forEach(
            function (button) {
                button.classList.remove(
                    "active"
                );
            }
        );
        allCategoryButton.classList.add(
            "active"
        );
    }
    activeCategory = "all";
    searchValue = "";
    filterServices();
    refreshIcons();
});