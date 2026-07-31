/* ==========================================================
   BLOOMNEST COMPONENT JS
   Part 1
   Helpers • Component Loader • Theme • RTL • Sticky Header
========================================================== */
"use strict";
console.log("🌿 BloomNest Component JS Loaded");
/* ==========================================================
   HELPERS
========================================================== */
const $ = (selector, scope = document) =>
    scope.querySelector(selector);
const $$ = (selector, scope = document) =>
    [...scope.querySelectorAll(selector)];
/* ==========================================================
   REFRESH LUCIDE ICONS
========================================================== */
function refreshIcons() {
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}
/* ==========================================================
   COMPONENT LOADER
========================================================== */
async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) return;
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(file);
        }
        element.innerHTML = await response.text();
        refreshIcons();
    }
    catch (error) {
        console.error(
            "❌ Component Load Error:",
            error
        );
    }
}
/* ==========================================================
   ROOT PATH
========================================================== */
function getRootPath() {
    const page =
        window.location.pathname
            .split("/")
            .pop();
    return (
        page === "" ||
        page === "index.html"
    )
        ? "./"
        : "../";
}
/* ==========================================================
   THEME (LIGHT / DARK)
========================================================== */
function initTheme() {
    const button =
        document.getElementById("themeToggle");
    if (!button) return;
    const savedTheme =
        localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    }
    else {
        document.documentElement.classList.remove("dark");
    }
    updateThemeIcon();
    button.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const dark =
            document.documentElement.classList.contains("dark");
        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );
        updateThemeIcon();
    });
}
/* ==========================================================
   UPDATE THEME ICON
========================================================== */
function updateThemeIcon() {
    const button =
        document.getElementById("themeToggle");
    if (!button) return;
    const dark =
        document.documentElement.classList.contains("dark");
    button.innerHTML = dark
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';
    refreshIcons();
}
/* ==========================================================
   RTL / LTR
========================================================== */
function initRTL() {
    const button =
        document.getElementById("rtlToggle");
    if (!button) return;
    const savedDir =
        localStorage.getItem("dir") || "ltr";
    document.documentElement.setAttribute(
        "dir",
        savedDir
    );
    button.addEventListener("click", () => {
        const current =
            document.documentElement.getAttribute("dir");
        const next =
            current === "ltr"
                ? "rtl"
                : "ltr";
        document.documentElement.setAttribute(
            "dir",
            next
        );
        localStorage.setItem(
            "dir",
            next
        );
    });
}
/* ==========================================================
   STICKY HEADER
========================================================== */
function initStickyHeader() {
    const header =
        document.getElementById("siteHeader");
    if (!header) return;
    function updateHeader() {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        }
        else {
            header.classList.remove("scrolled");
        }
    }
    updateHeader();
    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );
}
/* ==========================================================
   HEADER SHADOW
========================================================== */
function updateHeaderShadow() {
    const header =
        document.getElementById("siteHeader");
    if (!header) return;
    if (window.scrollY > 15) {
        header.classList.add("shadow");
    }
    else {
        header.classList.remove("shadow");
    }
}
window.addEventListener(
    "scroll",
    updateHeaderShadow,
    {
        passive: true
    }
);/* ==========================================================
   BLOOMNEST COMPONENT JS
   Part 2
   Mobile Sidebar • Overlay • Navigation • Dropdowns
========================================================== */
/* ==========================================================
   MOBILE SIDEBAR
========================================================== */
function initMobileMenu() {
    const menuBtn =
        document.getElementById("menuToggle");
    const closeBtn =
        document.getElementById("closeMenu");
    const sidebar =
        document.getElementById("mobileSidebar");
    const overlay =
        document.getElementById("mobileOverlay");
    if (!menuBtn || !sidebar) return;
    function openMenu() {
        sidebar.classList.add("active");
        overlay?.classList.add("active");
        document.body.classList.add("menu-open");
    }
    function closeMenu() {
        sidebar.classList.remove("active");
        overlay?.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
    menuBtn.addEventListener(
        "click",
        openMenu
    );
    closeBtn?.addEventListener(
        "click",
        closeMenu
    );
    overlay?.addEventListener(
        "click",
        closeMenu
    );
    sidebar
        .querySelectorAll("a")
        .forEach(link => {
            link.addEventListener(
                "click",
                closeMenu
            );
        });
}
/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */
function setActiveNavigation() {
    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";
    const links =
        document.querySelectorAll(
            ".nav-menu a, .mobile-nav a"
        );
    links.forEach(link => {
        const href =
            link.getAttribute("href");
        if (!href) return;
        const page =
            href.split("/").pop();
        if (page === currentPage) {
            link.classList.add("active");
            const item =
                link.closest(".nav-item");
            if (item) {
                item.classList.add("active");
            }
        }
    });
}
/* ==========================================================
   DESKTOP DROPDOWN
========================================================== */
function initDropdowns() {
    if (window.innerWidth <= 1024) return;
    const dropdowns =
        document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        const button =
            dropdown.querySelector(
                ".dropdown-toggle"
            );
        const menu =
            dropdown.querySelector(
                ".dropdown-menu"
            );
        if (!button || !menu) return;
        dropdown.addEventListener(
            "mouseenter",
            () => {
                menu.classList.add("show");
                button.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }
        );
        dropdown.addEventListener(
            "mouseleave",
            () => {
                menu.classList.remove("show");
                button.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        );
    });
}
/* ==========================================================
   CLOSE MOBILE MENU ON DESKTOP
========================================================== */
function closeMobileOnDesktop() {
    if (window.innerWidth <= 1024) return;
    const sidebar =
        document.getElementById("mobileSidebar");
    const overlay =
        document.getElementById("mobileOverlay");
    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.classList.remove("menu-open");
}
/* ==========================================================
   WINDOW RESIZE
========================================================== */
window.addEventListener(
    "resize",
    () => {
        closeMobileOnDesktop();
    },
    {
        passive: true
    }
);
/* ==========================================================
   MOBILE DROPDOWN
========================================================== */
function initMobileDropdowns() {
    const details =
        document.querySelectorAll(
            ".mobile-nav details"
        );
    details.forEach(item => {
        item.addEventListener(
            "toggle",
            () => {
                if (!item.open) return;
                details.forEach(other => {
                    if (other !== item) {
                        other.open = false;
                    }
                });
            }
        );
    });
}
/* ==========================================================
   NAVBAR HOVER FIX
========================================================== */
function initNavHover() {
    const items =
        document.querySelectorAll(
            ".nav-item"
        );
    items.forEach(item => {
        item.addEventListener(
            "mouseenter",
            () => {
                item.classList.add("hover");
            }
        );
        item.addEventListener(
            "mouseleave",
            () => {
                item.classList.remove("hover");
            }
        );
    });
}
/* ==========================================================
   BODY CLICK
   Close dropdowns if needed
========================================================== */
document.addEventListener(
    "click",
    e => {
        if (
            e.target.closest(".dropdown")
        ) return;
        document
            .querySelectorAll(".dropdown-menu")
            .forEach(menu => {
                menu.classList.remove("show");
            });
    }
);/* ==========================================================
   BLOOMNEST COMPONENT JS
   Part 3
   Search Modal • Announcement Bar • Keyboard Controls
========================================================== */
/* ==========================================================
   SEARCH MODAL
========================================================== */
function initSearchModal() {
    const modal =
        document.getElementById("searchModal");
    if (!modal) return;
    const input =
        modal.querySelector("input");
    document.addEventListener("keydown", (e) => {
        if (
            e.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {
            e.preventDefault();
            modal.classList.add("active");
            document.body.classList.add("search-open");
            input?.focus();
        }
    });
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeSearchModal();
        }
    });
}
/* ==========================================================
   CLOSE SEARCH
========================================================== */
function closeSearchModal() {
    const modal =
        document.getElementById("searchModal");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.classList.remove("search-open");
}
/* ==========================================================
   ESC KEY
========================================================== */
function initEscapeKey() {
    document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        const sidebar =
            document.getElementById("mobileSidebar");
        const overlay =
            document.getElementById("mobileOverlay");
        sidebar?.classList.remove("active");
        overlay?.classList.remove("active");
        document.body.classList.remove("menu-open");
        closeSearchModal();
    });
}
/* ==========================================================
   ANNOUNCEMENT BAR AUTO SLIDER
========================================================== */
function initAnnouncementBar() {
    const wrapper =
        document.querySelector(".announcement-content");
    if (!wrapper) return;
    const items =
        wrapper.querySelectorAll("p");
    if (items.length <= 1) return;
    if (window.innerWidth > 640) return;
    let index = 0;
    wrapper.style.transition =
        "transform .45s ease";
    setInterval(() => {
        index++;
        if (index >= items.length) {
            index = 0;
        }
        wrapper.style.transform =
            `translateY(-${index * 100}%)`;
    }, 3000);
}
/* ==========================================================
   HEADER SHADOW
========================================================== */
function initHeaderShadow() {
    const header =
        document.getElementById("siteHeader");
    if (!header) return;
    function update() {
        if (window.scrollY > 20) {
            header.classList.add("shadow");
        }
        else {
            header.classList.remove("shadow");
        }
    }
    update();
    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );
}
/* ==========================================================
   SCROLL TO TOP
========================================================== */
function initBackToTop() {
    const button =
        document.querySelector(".back-to-top");
    if (!button) return;
    function toggleButton() {
        if (window.scrollY > 400) {
            button.classList.add("show");
        }
        else {
            button.classList.remove("show");
        }
    }
    window.addEventListener(
        "scroll",
        toggleButton,
        {
            passive: true
        }
    );
    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
/* ==========================================================
   SMOOTH SCROLL LINKS
========================================================== */
function initSmoothScroll() {
    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {
            link.addEventListener("click", function (e) {
                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        });
}
/* ==========================================================
   LAZY IMAGE FADE
========================================================== */
function initLazyImages() {
    const images =
        document.querySelectorAll("img");
    images.forEach(img => {
        if (img.complete) {
            img.classList.add("loaded");
        }
        else {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
            });
        }
    });
}/* ==========================================================
   BLOOMNEST COMPONENT JS
   Part 4
   Accessibility • Layout Loader • Resize • Utilities
========================================================== */
/* ==========================================================
   ACCESSIBILITY
========================================================== */
function initAccessibility() {
    document
        .querySelectorAll("button")
        .forEach(button => {
            if (!button.getAttribute("type")) {
                button.setAttribute(
                    "type",
                    "button"
                );
            }
        });
}
/* ==========================================================
   LOAD NAVBAR & FOOTER
========================================================== */
async function loadLayout() {
    const navbar =
        document.getElementById("navbar");
    const footer =
        document.getElementById("footer");
    const root =
        getRootPath();
    if (navbar) {
        await loadComponent(
            "navbar",
            root + "components/navbar.html"
        );
    }
    if (footer) {
        await loadComponent(
            "footer",
            root + "components/footer.html"
        );
    }
    refreshIcons();
}
/* ==========================================================
   REFRESH COMPONENTS
========================================================== */
function refreshComponents() {
    refreshIcons();
    setActiveNavigation();
}
/* ==========================================================
   WINDOW RESIZE
========================================================== */
function initResizeHandler() {
    window.addEventListener(
        "resize",
        () => {
            if (window.innerWidth > 1024) {
                const sidebar =
                    document.getElementById(
                        "mobileSidebar"
                    );
                const overlay =
                    document.getElementById(
                        "mobileOverlay"
                    );
                sidebar?.classList.remove(
                    "active"
                );
                overlay?.classList.remove(
                    "active"
                );
                document.body.classList.remove(
                    "menu-open"
                );
            }
            refreshIcons();
        },
        {
            passive: true
        }
    );
}
/* ==========================================================
   PAGE LOADER (OPTIONAL)
========================================================== */
function hidePageLoader() {
    const loader =
        document.querySelector(".page-loader");
    if (!loader) return;
    loader.classList.add("hide");
    setTimeout(() => {
        loader.remove();
    }, 500);
}
window.addEventListener(
    "load",
    hidePageLoader
);
/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */
function initRippleEffect() {
    document
        .querySelectorAll(".btn,.icon-btn")
        .forEach(button => {
            button.addEventListener(
                "click",
                function (e) {
                    const ripple =
                        document.createElement("span");
                    const rect =
                        this.getBoundingClientRect();
                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );
                    ripple.style.width =
                        ripple.style.height =
                        size + "px";
                    ripple.style.left =
                        e.clientX -
                        rect.left -
                        size / 2 +
                        "px";
                    ripple.style.top =
                        e.clientY -
                        rect.top -
                        size / 2 +
                        "px";
                    ripple.className = "ripple";
                    this.appendChild(ripple);
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                }
            );
        });
}
/* ==========================================================
   ACTIVE PAGE TITLE
========================================================== */
function updatePageTitle() {
    const page =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html", "");
    document.body.dataset.page =
        page;
}
/* ==========================================================
   INITIALIZE COMMON UTILITIES
========================================================== */
function initUtilities() {
    initAccessibility();
    initResizeHandler();
    initRippleEffect();
    updatePageTitle();
}/* ==========================================================
   BLOOMNEST COMPONENT JS
   Part 5
   DOM Ready • Initialization • Exports
========================================================== */
/* ==========================================================
   DOM READY
========================================================== */
document.addEventListener("DOMContentLoaded", async () => {
    console.log("🌿 Initializing BloomNest...");
    /* ------------------------------------------
       Load Navbar / Footer (Optional)
    ------------------------------------------ */
    await loadLayout();
    /* ------------------------------------------
       Theme
    ------------------------------------------ */
    initTheme();
    /* ------------------------------------------
       RTL Support
    ------------------------------------------ */
    initRTL();
    /* ------------------------------------------
       Sticky Header
    ------------------------------------------ */
    initStickyHeader();
    initHeaderShadow();
    /* ------------------------------------------
       Mobile Sidebar
    ------------------------------------------ */
    initMobileMenu();
    initMobileDropdowns();
    /* ------------------------------------------
       Desktop Navigation
    ------------------------------------------ */
    initDropdowns();
    initNavHover();
    setActiveNavigation();
    /* ------------------------------------------
       Search
    ------------------------------------------ */
    initSearchModal();
    /* ------------------------------------------
       Announcement Bar
    ------------------------------------------ */
    initAnnouncementBar();
    /* ------------------------------------------
       Scroll Features
    ------------------------------------------ */
    initBackToTop();
    initSmoothScroll();
    /* ------------------------------------------
       Images
    ------------------------------------------ */
    initLazyImages();
    /* ------------------------------------------
       Keyboard
    ------------------------------------------ */
    initEscapeKey();
    /* ------------------------------------------
       Utilities
    ------------------------------------------ */
    initUtilities();
    /* ------------------------------------------
       Lucide Icons
    ------------------------------------------ */
    refreshIcons();
    console.log("✅ BloomNest Ready");
});
/* ==========================================================
   WINDOW LOAD
========================================================== */
window.addEventListener("load", () => {
    refreshIcons();
});
/* ==========================================================
   PUBLIC METHODS
========================================================== */
window.BloomNest = {
    refreshIcons,
    refreshComponents,
    loadLayout,
    initTheme,
    initRTL,
    initMobileMenu,
    initDropdowns,
    initSearchModal,
    closeSearchModal
};
/* ==========================================================
   AUTO REFRESH LUCIDE
========================================================== */
const observer = new MutationObserver(() => {
    refreshIcons();
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});
/* ==========================================================
   END OF FILE
========================================================== */
console.log(
    "%c🌿 BloomNest Component.js Loaded Successfully",
    "color:#2e7d32;font-size:14px;font-weight:bold;"
);