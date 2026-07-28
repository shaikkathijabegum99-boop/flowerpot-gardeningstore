/* ==========================================================
   BLOOMNEST GLOBAL JS
   FIXED VERSION
   Features:
   - Component Loader
   - Dark Mode
   - RTL
   - Icons
   - Sticky Header
========================================================== */
"use strict";
/* ==========================================================
   COMPONENT LOADER
========================================================== */
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
/* ==========================================================
   BODY LOCK
========================================================== */
function lockBody(){
    document.body.style.overflow="hidden";
}
function unlockBody(){
    document.body.style.overflow="";
}
/* ==========================================================
   FIXED DARK MODE SYSTEM
========================================================== */
function initTheme(){
    const root =
        document.documentElement;
    const button =
        document.getElementById(
            "themeToggle"
        );
    const savedTheme =
        localStorage.getItem(
            "theme"
        );
    if(savedTheme==="dark"){
        root.classList.add(
            "dark-mode"
        );
    }
    else{
        root.classList.remove(
            "dark-mode"
        );
    }
    updateThemeIcon();
    if(!button) return;
    button.onclick = ()=>{
        const enabled =
            root.classList.toggle(
                "dark-mode"
            );
        localStorage.setItem(
            "theme",
            enabled
            ?
            "dark"
            :
            "light"
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
/* ==========================================================
   RTL SYSTEM
========================================================== */
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
/* ==========================================================
   ICON REFRESH
========================================================== */
function refreshIcons(){
    if(
        typeof lucide !== "undefined"
        &&
        lucide.createIcons
    ){
        lucide.createIcons();
    }
}/* ==========================================================
   STICKY HEADER
========================================================== */
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
/* ==========================================================
   MOBILE MENU
========================================================== */
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
/* ==========================================================
   MOBILE DROPDOWN
========================================================== */
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
/* ==========================================================
   DESKTOP DROPDOWN
========================================================== */
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
/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */
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
/* ==========================================================
   SEARCH MODAL
========================================================== */
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
}/* ==========================================================
   ESCAPE KEY CLOSE
========================================================== */
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
/* ==========================================================
   SCROLL TO TOP
========================================================== */
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
/* ==========================================================
   SMOOTH SCROLL
========================================================== */
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
/* ==========================================================
   REVEAL ANIMATION
========================================================== */
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
/* ==========================================================
   COUNTER ANIMATION
========================================================== */
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
/* ==========================================================
   LAZY IMAGE LOADING
========================================================== */
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
/* ==========================================================
   CARD HOVER EFFECT
========================================================== */
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
}/* ==========================================================
   RESIZE HANDLER
========================================================== */
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
/* ==========================================================
   PAGE LOADER
========================================================== */
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
/* ==========================================================
   PERFORMANCE SETTINGS
========================================================== */
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
/* ==========================================================
   REDUCED MOTION
========================================================== */
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
/* ==========================================================
   INITIALIZE WEBSITE
========================================================== */
document.addEventListener(
"DOMContentLoaded",
async ()=>{
    /* LOAD COMPONENTS */
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
    /* ICONS */
    refreshIcons();
    /* CORE SYSTEM */
    initTheme();
    initRTL();
    initStickyHeader();
    initMobileMenu();
    initMobileDropdown();
    initDropdown();
    initActiveMenu();
    initSearchModal();
    initEscapeClose();
    /* UI EFFECTS */
    initScrollTop();
    initSmoothScroll();
    initRevealAnimation();
    initCounter();
    initLazyImages();
    initCardHover();
    /* SYSTEM */
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
/* ==========================================================
   PAGE LOAD STATUS
========================================================== */
window.addEventListener(
"load",
()=>{
    document.body
    .classList
    .add(
        "page-loaded"
    );
});
/* ==========================================================
   VISIBILITY STATUS
========================================================== */
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
/* ==========================================================
   ONLINE STATUS
========================================================== */
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
/* ==========================================================
   HELPERS
========================================================== */
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
/* ==========================================================
   GLOBAL OBJECT
========================================================== */
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
/*========================================
 DARK MODE
========================================*/
const themeBtn = document.getElementById("theme-btn");
if(themeBtn){
themeBtn.addEventListener("click",()=>{
document.documentElement.classList.toggle("dark-mode");
const isDark =
document.documentElement.classList.contains("dark-mode");
localStorage.setItem(
"theme",
isDark ? "dark" : "light"
);
themeBtn.innerHTML = isDark
? '<i data-lucide="sun"></i>'
: '<i data-lucide="moon"></i>';
lucide.createIcons();
});
}
/* LOAD SAVED THEME */
const savedTheme =
localStorage.getItem("theme");
if(savedTheme==="dark"){
document.documentElement.classList.add(
"dark-mode"
);
const btn =
document.getElementById("theme-btn");
if(btn){
btn.innerHTML =
'<i data-lucide="sun"></i>';
}
}
lucide.createIcons();
/*==================================================
GLOBAL HERO ANIMATION JS
BloomNest Premium Hero Effects
==================================================*/
document.addEventListener("DOMContentLoaded", () => {
    const heroes = document.querySelectorAll(".animated-hero");
    heroes.forEach((hero) => {
        // Add loaded animation class
        setTimeout(() => {
            hero.classList.add("hero-loaded");
        }, 100);
        // Create extra floating leaves dynamically
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
    // Smooth mouse movement effect
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