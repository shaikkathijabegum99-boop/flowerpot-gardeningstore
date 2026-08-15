"use strict";
if(!localStorage.getItem("theme")){
localStorage.setItem(
"theme",
"light"
);
}
"use strict";
async function loadComponent(id,file){
    const element =
        document.getElementById(id);
    if(!element) return;
    try{
        const response =
            await fetch(file,{
                cache:"no-cache"
            });
        if(!response.ok){
            throw new Error(
                "Failed loading "+file
            );
        }
        element.innerHTML =
            await response.text();
    }
    catch(error){
        console.error(error);
        element.innerHTML =
        `
        <div class="component-error">
            Failed to load component.
        </div>
        `;
    }
}
function lockBody(){
    document.body.style.overflow="hidden";
}
function unlockBody(){
    document.body.style.overflow="";
}
function initTheme(){
const root = document.documentElement;
const button = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    root.classList.add("dark-mode");
}
else{
    root.classList.remove("dark-mode");
    localStorage.setItem("theme","light");
}
updateThemeIcon();
if(!button) return;
button.onclick = ()=>{
    const enabled =
    root.classList.toggle("dark-mode");
    localStorage.setItem(
        "theme",
        enabled ? "dark" : "light"
    );
    updateThemeIcon();
};
}
function updateThemeIcon(){
    const button =
        document.getElementById(
            "themeToggle"
        );
    if(!button) return;
    const dark =
        document.documentElement
        .classList
        .contains(
            "dark-mode"
        );
    button.innerHTML =
    dark
    ?
    `<i data-lucide="sun"></i>`
    :
    `<i data-lucide="moon"></i>`;
    refreshIcons();
}
function initRTL(){
    const button =
        document.getElementById(
            "rtlToggle"
        );
    const saved =
        localStorage.getItem(
            "rtl"
        )==="true";
    if(saved){
        document.documentElement
        .setAttribute(
            "dir",
            "rtl"
        );
        document.body
        .classList
        .add(
            "rtl"
        );
    }
    if(!button) return;
    button.onclick=()=>{
        const active =
            document.body
            .classList
            .toggle(
                "rtl"
            );
        document.documentElement
        .setAttribute(
            "dir",
            active
            ?
            "rtl"
            :
            "ltr"
        );
        localStorage.setItem(
            "rtl",
            active
        );
    };
}
function refreshIcons(){
    if(
        typeof lucide !== "undefined"
        &&
        lucide.createIcons
    ){
        lucide.createIcons();
    }
}
function initStickyHeader(){
    const header =
        document.getElementById(
            "siteHeader"
        );
    if(!header) return;
    function update(){
        if(window.scrollY > 80){
            header.classList.add(
                "scrolled"
            );
        }
        else{
            header.classList.remove(
                "scrolled"
            );
        }
    }
    update();
    window.addEventListener(
        "scroll",
        throttle(
            update,
            100
        ),
        {
            passive:true
        }
    );
}
function initMobileMenu(){
    const menu =
        document.getElementById(
            "menuToggle"
        );
    const close =
        document.getElementById(
            "closeMenu"
        );
    const sidebar =
        document.getElementById(
            "mobileSidebar"
        );
    const overlay =
        document.getElementById(
            "mobileOverlay"
        );
    if(
        !menu ||
        !sidebar ||
        !overlay
    )
    return;
    function open(){
        sidebar.classList.add(
            "active"
        );
        overlay.classList.add(
            "active"
        );
        sidebar.setAttribute(
            "aria-hidden",
            "false"
        );
        lockBody();
    }
    function closeMenu(){
        sidebar.classList.remove(
            "active"
        );
        overlay.classList.remove(
            "active"
        );
        sidebar.setAttribute(
            "aria-hidden",
            "true"
        );
        unlockBody();
    }
    menu.onclick=open;
    if(close){
        close.onclick=closeMenu;
    }
    overlay.onclick=closeMenu;
    window.closeSidebar =
        closeMenu;
}
function initMobileDropdown(){
    const items =
        document.querySelectorAll(
            ".mobile-nav details"
        );
    if(!items.length) return;
    items.forEach(item=>{
        item.addEventListener(
            "toggle",
            ()=>{
                if(!item.open)
                return;
                items.forEach(other=>{
                    if(other!==item){
                        other.removeAttribute(
                            "open"
                        );
                    }
                });
            }
        );
    });
}
function initDropdown(){
    const dropdowns =
        document.querySelectorAll(
            ".dropdown"
        );
    dropdowns.forEach(dropdown=>{
        const button =
            dropdown.querySelector(
                ".dropdown-toggle"
            );
        if(!button)
        return;
        dropdown.addEventListener(
            "mouseenter",
            ()=>{
                dropdown.classList.add(
                    "open"
                );
            }
        );
        dropdown.addEventListener(
            "mouseleave",
            ()=>{
                dropdown.classList.remove(
                    "open"
                );
            }
        );
    });
}
function initActiveMenu(){
    const page =
        window.location.pathname
        .split("/")
        .pop()
        ||
        "index.html";
    document
    .querySelectorAll(
        ".nav-menu a,.mobile-nav a"
    )
    .forEach(link=>{
        link.classList.remove(
            "active"
        );
        const href =
            link
            .getAttribute(
                "href"
            )
            ?.split("/")
            .pop();
        if(
            href===page
        ){
            link.classList.add(
                "active"
            );
        }
    });
}
function initSearchModal(){
    const button =
        document.getElementById(
            "searchToggle"
        );
    const modal =
        document.getElementById(
            "searchModal"
        );
    if(
        !button ||
        !modal
    )
    return;
    function openSearch(){
        modal.classList.add(
            "active"
        );
        lockBody();
    }
    function closeSearch(){
        modal.classList.remove(
            "active"
        );
        unlockBody();
    }
    button.onclick =
        openSearch;
    modal.onclick=e=>{
        if(
            e.target===modal
        ){
            closeSearch();
        }
    };
    const close =
        modal.querySelector(
            ".close-search"
        );
    if(close){
        close.onclick =
            closeSearch;
    }
    window.closeSearch =
        closeSearch;
}
function initEscapeClose(){
    document.addEventListener(
        "keydown",
        (event)=>{
            if(
                event.key !== "Escape"
            )
            return;
            if(
                typeof window.closeSidebar
                ===
                "function"
            ){
                window.closeSidebar();
            }
            if(
                typeof window.closeSearch
                ===
                "function"
            ){
                window.closeSearch();
            }
        }
    );
}
function initScrollTop(){
    const button =
        document.getElementById(
            "scrollTop"
        );
    if(!button)
    return;
    window.addEventListener(
        "scroll",
        throttle(()=>{
            button.classList.toggle(
                "show",
                window.scrollY > 400
            );
        },100)
    );
    button.onclick=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
}
function initSmoothScroll(){
    document
    .querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    )
    .forEach(link=>{
        link.onclick=(e)=>{
            const target =
                document.querySelector(
                    link.getAttribute(
                        "href"
                    )
                );
            if(!target)
            return;
            e.preventDefault();
            const header =
                document.getElementById(
                    "siteHeader"
                );
            const offset =
                header
                ?
                header.offsetHeight
                :
                0;
            window.scrollTo({
                top:
                target.offsetTop-offset,
                behavior:"smooth"
            });
        };
    });
}
function initRevealAnimation(){
    const elements =
        document.querySelectorAll(
        `
        .fade-up,
        .fade-down,
        .fade-left,
        .fade-right,
        .zoom-in
        `
        );
    if(!elements.length)
    return;
    const observer =
    new IntersectionObserver(
        entries=>{
            entries.forEach(entry=>{
                if(
                    entry.isIntersecting
                ){
                    entry.target
                    .classList
                    .add(
                        "visible"
                    );
                    observer.unobserve(
                        entry.target
                    );
                }
            });
        },
        {
            threshold:.15
        }
    );
    elements.forEach(
        el=>observer.observe(el)
    );
}
function initCounter(){
    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );
    if(!counters.length)
    return;
    const observer =
    new IntersectionObserver(
        entries=>{
            entries.forEach(entry=>{
                if(
                    !entry.isIntersecting
                )
                return;
                const element =
                    entry.target;
                const target =
                    Number(
                        element.dataset.counter
                    );
                let current=0;
                const step =
                Math.ceil(
                    target/80
                );
                const timer =
                setInterval(()=>{
                    current+=step;
                    if(
                        current>=target
                    ){
                        current=target;
                        clearInterval(
                            timer
                        );
                    }
                    element.textContent =
                        current.toLocaleString();
                },25);
                observer.unobserve(
                    element
                );
            });
        },
        {
            threshold:.5
        }
    );
    counters.forEach(
        c=>observer.observe(c)
    );
}
function initLazyImages(){
    const images =
        document.querySelectorAll(
            "img[data-src]"
        );
    if(!images.length)
    return;
    const observer =
    new IntersectionObserver(
        entries=>{
            entries.forEach(entry=>{
                if(
                    !entry.isIntersecting
                )
                return;
                const img =
                    entry.target;
                img.src =
                    img.dataset.src;
                img.removeAttribute(
                    "data-src"
                );
                observer.unobserve(
                    img
                );
            });
        },
        {
            rootMargin:"200px"
        }
    );
    images.forEach(
        img=>observer.observe(img)
    );
}
function initCardHover(){
    if(
        window.matchMedia(
            "(pointer:coarse)"
        ).matches
    )
    return;
    const cards =
        document.querySelectorAll(
        `
        .product-card,
        .feature-card,
        .category-card,
        .blog-card,
        .testimonial-card,
        .mission-card,
        .team-card
        `
        );
    cards.forEach(card=>{
        card.addEventListener(
            "mousemove",
            e=>{
                const rect =
                    card.getBoundingClientRect();
                const x =
                e.clientX-rect.left;
                const y =
                e.clientY-rect.top;
                const rotateY =
                ((x/rect.width)-.5)*6;
                const rotateX =
                ((rect.height/2-y)
                /
                rect.height)*6;
                card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                `;
            }
        );
        card.addEventListener(
            "mouseleave",
            ()=>{
                card.style.transform="";
            }
        );
    });
}
function initResizeHandler(){
    const resize =
        debounce(()=>{
            initActiveMenu();
            refreshIcons();
        },250);
    window.addEventListener(
        "resize",
        resize
    );
}
function initPageLoader(){
    const loader =
        document.getElementById(
            "pageLoader"
        );
    if(!loader)
    return;
    window.addEventListener(
        "load",
        ()=>{
            loader.classList.add(
                "loaded"
            );
            setTimeout(()=>{
                loader.remove();
            },600);
        }
    );
}
function initPerformance(){
    if(
        "scrollRestoration"
        in history
    ){
        history.scrollRestoration =
            "manual";
    }
    document
    .querySelectorAll(
        "img"
    )
    .forEach(img=>{
        if(
            !img.loading
        ){
            img.loading =
                "lazy";
        }
        img.decoding =
            "async";
    });
}
function initReducedMotion(){
    const reduce =
        window.matchMedia(
        "(prefers-reduced-motion: reduce)"
        );
    if(
        reduce.matches
    ){
        document.documentElement
        .classList
        .add(
            "reduce-motion"
        );
    }
}
document.addEventListener(
"DOMContentLoaded",
async ()=>{
    await Promise.all([
        loadComponent(
            "navbar",
            "../components/navbar.html"
        ),
        loadComponent(
            "footer",
            "../components/footer.html"
        )
    ]);
    refreshIcons();
    initTheme();
    initRTL();
    initStickyHeader();
    initMobileMenu();
    initMobileDropdown();
    initDropdown();
    initActiveMenu();
    initSearchModal();
    initEscapeClose();
    initScrollTop();
    initSmoothScroll();
    initRevealAnimation();
    initCounter();
    initLazyImages();
    initCardHover();
    initResizeHandler();
    initPageLoader();
    initPerformance();
    initReducedMotion();
    refreshIcons();
    document.body
    .classList
    .add(
        "page-ready"
    );
});
window.addEventListener(
"load",
()=>{
    document.body
    .classList
    .add(
        "page-loaded"
    );
});
document.addEventListener(
"visibilitychange",
()=>{
    document.body
    .classList
    .toggle(
        "page-hidden",
        document.hidden
    );
});
window.addEventListener(
"online",
()=>{
    document.body
    .classList
    .remove(
        "offline"
    );
});
window.addEventListener(
"offline",
()=>{
    document.body
    .classList
    .add(
        "offline"
    );
});
function debounce(
callback,
delay=200
){
    let timer;
    return (...args)=>{
        clearTimeout(
            timer
        );
        timer =
        setTimeout(
            ()=>{
                callback(...args);
            },
            delay
        );
    };
}
function throttle(
callback,
delay=100
){
    let waiting=false;
    return (...args)=>{
        if(waiting)
        return;
        callback(...args);
        waiting=true;
        setTimeout(
            ()=>{
                waiting=false;
            },
            delay
        );
    };
}
window.BloomNest = {
    refreshIcons,
    lockBody,
    unlockBody,
    debounce,
    throttle,
    initTheme
};
document.addEventListener("DOMContentLoaded",()=>{
    if(window.lucide){
        lucide.createIcons();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const heroes = document.querySelectorAll(".animated-hero");
    heroes.forEach((hero) => {
        setTimeout(() => {
            hero.classList.add("hero-loaded");
        }, 100);
        const animationBox = hero.querySelector(".hero-animation");
        if(animationBox){
            for(let i = 0; i < 8; i++){
                const leaf = document.createElement("span");
                leaf.classList.add(
                    "dynamic-leaf"
                );
                leaf.style.left =
                Math.random() * 100 + "%";
                leaf.style.top =
                Math.random() * 100 + "%";
                leaf.style.animationDuration =
                (8 + Math.random() * 10) + "s";
                leaf.style.animationDelay =
                Math.random() * 5 + "s";
                animationBox.appendChild(leaf);
            }
        }
    });
    document.querySelectorAll(
        ".animated-hero"
    ).forEach(hero => {
        hero.addEventListener(
        "mousemove",
        (e)=>{
            const x =
            (e.clientX /
            window.innerWidth - .5)
            * 20;
            const y =
            (e.clientY /
            window.innerHeight - .5)
            * 20;
            hero.style.setProperty(
                "--move-x",
                `${x}px`
            );
            hero.style.setProperty(
                "--move-y",
                `${y}px`
            );
        });
        hero.addEventListener(
        "mouseleave",
        ()=>{
            hero.style.setProperty(
                "--move-x",
                "0px"
            );
            hero.style.setProperty(
                "--move-y",
                "0px"
            );
        });
    });
});
(function () {
    "use strict";
    document.addEventListener(
        "DOMContentLoaded",
        function () {
            initializeTheme();
            initializeRTL();
            initializeHeader();
            initializeMobileMenu();
            initializeSearch();
            initializePageLoader();
            initializeBackToTop();
            refreshIcons();
        }
    );
    function refreshIcons() {
        if (
            window.lucide &&
            typeof window.lucide.createIcons === "function"
        ) {
            window.lucide.createIcons();
        }
    }
    function initializeTheme() {
        const themeButton =
            document.getElementById(
                "themeToggle"
            );
        const savedTheme =
            localStorage.getItem(
                "bloomnestTheme"
            );
        if (savedTheme === "dark") {
            document.documentElement
                .setAttribute(
                    "data-theme",
                    "dark"
                );
            document.documentElement
                .classList.add(
                    "dark-mode"
                );
        } else {
            document.documentElement
                .setAttribute(
                    "data-theme",
                    "light"
                );
            document.documentElement
                .classList.remove(
                    "dark-mode"
                );
        }
        updateThemeIcon();
        if (themeButton) {
            themeButton.addEventListener(
                "click",
                function () {
                    const isDark =
                        document.documentElement
                            .getAttribute(
                                "data-theme"
                            ) === "dark";
                    const newTheme =
                        isDark
                            ? "light"
                            : "dark";
                    document.documentElement
                        .setAttribute(
                            "data-theme",
                            newTheme
                        );
                    document.documentElement
                        .classList.toggle(
                            "dark-mode",
                            newTheme === "dark"
                        );
                    localStorage.setItem(
                        "bloomnestTheme",
                        newTheme
                    );
                    updateThemeIcon();
                }
            );
        }
    }
    function updateThemeIcon() {
        const button =
            document.getElementById(
                "themeToggle"
            );
        if (!button) {
            return;
        }
        const isDark =
            document.documentElement
                .getAttribute(
                    "data-theme"
                ) === "dark";
        const icon =
            button.querySelector(
                "[data-lucide]"
            );
        if (icon) {
            icon.setAttribute(
                "data-lucide",
                isDark
                    ? "sun"
                    : "moon"
            );
        }
        button.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
        refreshIcons();
    }
    function initializeRTL() {
        const rtlButton =
            document.getElementById(
                "rtlToggle"
            );
        const savedDirection =
            localStorage.getItem(
                "bloomnestDirection"
            );
        if (
            savedDirection === "rtl"
        ) {
            document.documentElement
                .setAttribute(
                    "dir",
                    "rtl"
                );
        } else {
            document.documentElement
                .setAttribute(
                    "dir",
                    "ltr"
                );
        }
        if (rtlButton) {
            rtlButton.addEventListener(
                "click",
                function () {
                    const currentDirection =
                        document.documentElement
                            .getAttribute(
                                "dir"
                            );
                    const newDirection =
                        currentDirection === "rtl"
                            ? "ltr"
                            : "rtl";
                    document.documentElement
                        .setAttribute(
                            "dir",
                            newDirection
                        );
                    localStorage.setItem(
                        "bloomnestDirection",
                        newDirection
                    );
                    document.dispatchEvent(
                        new CustomEvent(
                            "bloomnestRTLChanged",
                            {
                                detail: {
                                    direction:
                                        newDirection
                                }
                            }
                        )
                    );
                }
            );
        }
    }
    function initializeHeader() {
        const header =
            document.getElementById(
                "siteHeader"
            );
        if (!header) {
            return;
        }
        function updateHeader() {
            if (
                window.scrollY > 20
            ) {
                header.classList.add(
                    "sticky"
                );
            } else {
                header.classList.remove(
                    "sticky"
                );
            }
        }
        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive:true
            }
        );
        updateHeader();
    }
    function initializeMobileMenu() {
        const menuButton =
            document.getElementById(
                "menuToggle"
            );
        const closeButton =
            document.getElementById(
                "closeMenu"
            );
        const sidebar =
            document.getElementById(
                "mobileSidebar"
            );
        const overlay =
            document.getElementById(
                "mobileOverlay"
            );
        if (
            !menuButton ||
            !sidebar
        ) {
            return;
        }
        function openMenu() {
            sidebar.classList.add(
                "active"
            );
            if (overlay) {
                overlay.classList.add(
                    "active"
                );
            }
            document.body.classList.add(
                "mobile-menu-open"
            );
            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );
        }
        function closeMenu() {
            sidebar.classList.remove(
                "active"
            );
            if (overlay) {
                overlay.classList.remove(
                    "active"
                );
            }
            document.body.classList.remove(
                "mobile-menu-open"
            );
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
        menuButton.addEventListener(
            "click",
            openMenu
        );
        if (closeButton) {
            closeButton.addEventListener(
                "click",
                closeMenu
            );
        }
        if (overlay) {
            overlay.addEventListener(
                "click",
                closeMenu
            );
        }
        sidebar
            .querySelectorAll(
                "a"
            )
            .forEach(
                function (link) {
                    link.addEventListener(
                        "click",
                        function () {
                            closeMenu();
                        }
                    );
                }
            );
        document.addEventListener(
            "keydown",
            function (event) {
                if (
                    event.key === "Escape"
                ) {
                    closeMenu();
                }
            }
        );
    }
    function initializeSearch() {
        const searchModal =
            document.getElementById(
                "searchModal"
            );
        if (!searchModal) {
            return;
        }
        const searchInput =
            searchModal.querySelector(
                "input"
            );
        const searchButton =
            searchModal.querySelector(
                "button"
            );
        function openSearch() {
            searchModal.classList.add(
                "active"
            );
            if (searchInput) {
                setTimeout(
                    function () {
                        searchInput.focus();
                    },
                    100
                );
            }
        }
        function closeSearch() {
            searchModal.classList.remove(
                "active"
            );
        }
        /*
         * Open search with Ctrl + K
         */
        document.addEventListener(
            "keydown",
            function (event) {
                if (
                    (event.ctrlKey ||
                     event.metaKey) &&
                    event.key.toLowerCase() === "k"
                ) {
                    event.preventDefault();
                    openSearch();
                }
                if (
                    event.key === "Escape" &&
                    searchModal.classList.contains(
                        "active"
                    )
                ) {
                    closeSearch();
                }
            }
        );
        /*
         * Search submit
         */
        if (searchButton) {
            searchButton.addEventListener(
                "click",
                function () {
                    const query =
                        searchInput
                            ? searchInput.value.trim()
                            : "";
                    if (!query) {
                        return;
                    }
                    /*
                     * Change this later to your
                     * actual products/search page.
                     */
                    window.location.href =
                        "./products.html?search=" +
                        encodeURIComponent(
                            query
                        );
                }
            );
        }
        /*
         * Enter key
         */
        if (searchInput) {
            searchInput.addEventListener(
                "keydown",
                function (event) {
                    if (
                        event.key === "Enter"
                    ) {
                        event.preventDefault();
                        if (searchButton) {
                            searchButton.click();
                        }
                    }
                }
            );
        }
    }
    function initializePageLoader() {
        const loader =
            document.getElementById(
                "pageLoader"
            );
        if (!loader) {
            return;
        }
        window.addEventListener(
            "load",
            function () {
                setTimeout(
                    function () {
                        loader.classList.add(
                            "hidden"
                        );
                        setTimeout(
                            function () {
                                loader.remove();
                            },
                            500
                        );
                    },
                    300
                );
            }
        );
    }
    function initializeBackToTop() {
        let button =
            document.getElementById(
                "backToTop"
            );
        /*
         * Create button if it doesn't
         * already exist.
         */
        if (!button) {
            button =
                document.createElement(
                    "button"
                );
            button.id =
                "backToTop";
            button.className =
                "back-to-top";
            button.type =
                "button";
            button.setAttribute(
                "aria-label",
                "Back to top"
            );
            button.innerHTML =
                '<i data-lucide="arrow-up"></i>';
            document.body.appendChild(
                button
            );
            refreshIcons();
        }
        function updateBackToTop() {
            if (
                window.scrollY > 500
            ) {
                button.classList.add(
                    "show"
                );
            } else {
                button.classList.remove(
                    "show"
                );
            }
        }
        window.addEventListener(
            "scroll",
            updateBackToTop,
            {
                passive:true
            }
        );
        button.addEventListener(
            "click",
            function () {
                window.scrollTo(
                    {
                        top:0,
                        behavior:"smooth"
                    }
                );
            }
        );
        updateBackToTop();
    }
    document.addEventListener(
        "click",
        function (event) {
            const link =
                event.target.closest(
                    'a[href^="#"]'
                );
            if (!link) {
                return;
            }
            const href =
                link.getAttribute(
                    "href"
                );
            if (
                !href ||
                href === "#"
            ) {
                return;
            }
            const target =
                document.querySelector(
                    href
                );
            if (!target) {
                return;
            }
            event.preventDefault();
            const header =
                document.getElementById(
                    "siteHeader"
                );
            const offset =
                header
                    ? header.offsetHeight + 15
                    : 20;
            const targetPosition =
                target.getBoundingClientRect()
                    .top +
                window.scrollY -
                offset;
            window.scrollTo(
                {
                    top:
                        targetPosition,
                    behavior:"smooth"
                }
            );
        }
    );
    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        document.documentElement
            .classList.add(
                "reduced-motion"
            );
    }
})();
document.addEventListener("DOMContentLoaded", function () {
    const heroSections = document.querySelectorAll(
        "section[class*='hero']"
    );
    if (!heroSections.length) {
        return;
    }
    if (
        window.matchMedia &&
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        heroSections.forEach(function (hero) {
            hero.classList.add("hero-animate");
        });
        return;
    }
    requestAnimationFrame(function () {
        setTimeout(function () {
            heroSections.forEach(function (hero) {
                hero.classList.add("hero-animate");
            });
        }, 80);
    });
});
