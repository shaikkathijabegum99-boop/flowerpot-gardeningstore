document.addEventListener("DOMContentLoaded",()=>{
    initIcons();
    initCounters();
    initReveal();
    initNewsletter();
    initImageAnimation();
});
function initIcons(){
    if(window.lucide){
        lucide.createIcons();
    }
}
function initCounters(){
const counters=document.querySelectorAll("[data-counter]");
if(!counters.length) return;
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const counter=entry.target;
const target=parseInt(
counter.getAttribute("data-counter")
);
animateCounter(counter,target);
observer.unobserve(counter);
}
});
},{
threshold:.5
});
counters.forEach(counter=>{
observer.observe(counter);
});
}
function animateCounter(element,target){
let current=0;
const speed=Math.max(
20,
2000 / target
);
const update=()=>{
current+=Math.ceil(
target/80
);
if(current>=target){
element.textContent=
target.toLocaleString("+");
return;
}
element.textContent=
current.toLocaleString();
requestAnimationFrame(update);
};
update();
}
function initReveal(){
const elements=document.querySelectorAll(
`
.about-hero-content,
.about-hero-image,
.story-image,
.story-content,
.mission-card,
.stat-card,
.why-image,
.why-content,
.timeline-item,
.team-card,
.testimonial-card,
.cta-box,
.newsletter-box
`
);
elements.forEach(el=>{
el.classList.add("reveal");
});
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
observer.unobserve(entry.target);
}
});
},{
threshold:.15
});
elements.forEach(el=>{
observer.observe(el);
});
}
function initNewsletter(){
const form=document.querySelector(
".newsletter-form"
);
if(!form) return;
form.addEventListener(
"submit",
(e)=>{
e.preventDefault();
const input=form.querySelector("input");
if(input.value.trim()===""){
input.focus();
return;
}
alert(
"Thank you for joining BloomNest Community 🌱"
);
input.value="";
});
}
function initImageAnimation(){
const images=document.querySelectorAll(
"img"
);
images.forEach(img=>{
img.addEventListener(
"load",
()=>{
img.classList.add(
"image-loaded"
);
}
);
});
}


/* =========================================================
   BLOOMNEST JOURNEY TIMELINE
   DOT ALWAYS CENTERED ON TIMELINE LINE
   LTR + RTL
========================================================= */

(function () {

    "use strict";

    function updateTimeline() {

        const timelines = document.querySelectorAll(
            ".journey-section .timeline"
        );

        if (!timelines.length) return;

        const rtl =
            document.documentElement.dir === "rtl";

        const width = window.innerWidth;

        timelines.forEach(function (timeline) {

            const items = timeline.querySelectorAll(
                ".timeline-item"
            );

            if (!items.length) return;

            const timelineRect =
                timeline.getBoundingClientRect();

            let lineX;
            let dotSize;

            /* =================================================
               DESKTOP
            ================================================= */

            if (width >= 1024) {

                /*
                 * RTL and LTR use EXACTLY the same
                 * center line.
                 */

                lineX =
                    timelineRect.left +
                    timelineRect.width / 2;

                dotSize = 16;

                timeline.style.setProperty(
                    "--timeline-line-left",
                    "50%"
                );

            }

            /* =================================================
               TABLET
            ================================================= */

            else if (width >= 640) {

                dotSize = 16;

                if (rtl) {

                    /*
                     * RIGHT side line.
                     */

                    lineX =
                        timelineRect.right - 28;

                    timeline.style.setProperty(
                        "--timeline-line-left",
                        "auto"
                    );

                    timeline.style.setProperty(
                        "--timeline-line-right",
                        "28px"
                    );

                } else {

                    /*
                     * LEFT side line.
                     */

                    lineX =
                        timelineRect.left + 28;

                    timeline.style.setProperty(
                        "--timeline-line-left",
                        "28px"
                    );

                    timeline.style.setProperty(
                        "--timeline-line-right",
                        "auto"
                    );
                }

            }

            /* =================================================
               MOBILE
            ================================================= */

            else {

                dotSize =
                    width < 400
                        ? 13
                        : 14;

                const offset =
                    width < 400
                        ? 19
                        : 22;

                if (rtl) {

                    /*
                     * RIGHT side line.
                     */

                    lineX =
                        timelineRect.right - offset;

                    timeline.style.setProperty(
                        "--timeline-line-left",
                        "auto"
                    );

                    timeline.style.setProperty(
                        "--timeline-line-right",
                        offset + "px"
                    );

                } else {

                    /*
                     * LEFT side line.
                     */

                    lineX =
                        timelineRect.left + offset;

                    timeline.style.setProperty(
                        "--timeline-line-left",
                        offset + "px"
                    );

                    timeline.style.setProperty(
                        "--timeline-line-right",
                        "auto"
                    );
                }
            }


            /* =================================================
               POSITION DOTS
            ================================================= */

            items.forEach(function (item) {

                const itemRect =
                    item.getBoundingClientRect();

                /*
                 * IMPORTANT:
                 *
                 * lineX = center of line
                 *
                 * subtract half of dot size
                 *
                 * Result = LEFT edge of dot
                 *
                 * Therefore dot CENTER = line CENTER.
                 */

                const dotLeft =
                    lineX -
                    itemRect.left -
                    (dotSize / 2);

                item.style.setProperty(
                    "--exact-dot-left",
                    dotLeft + "px"
                );

            });

        });

        injectTimelineCSS();
    }


    /* =========================================================
       FINAL CSS OVERRIDE
    ========================================================= */

    function injectTimelineCSS() {

        let style =
            document.getElementById(
                "timeline-final-fix"
            );

        if (!style) {

            style =
                document.createElement("style");

            style.id =
                "timeline-final-fix";

            document.head.appendChild(style);
        }

        style.textContent = `

            /* =================================================
               TIMELINE LINE
            ================================================= */

            .journey-section
            .timeline::before {

                left:
                    var(--timeline-line-left, 50%)
                    !important;

                right:
                    var(--timeline-line-right, auto)
                    !important;

                transform:
                    translateX(-50%)
                    !important;
            }


            /* =================================================
               DESKTOP
            ================================================= */

            @media (min-width:1024px) {

                .journey-section
                .timeline::before {

                    left:50% !important;

                    right:auto !important;

                    transform:
                        translateX(-50%)
                        !important;
                }

                .journey-section
                .timeline-item::after {

                    left:
                        var(--exact-dot-left)
                        !important;

                    right:auto !important;

                    top:18px !important;

                    width:16px !important;

                    height:16px !important;

                    margin:0 !important;

                    transform:none !important;

                    box-sizing:border-box;

                    border:
                        3px solid var(--surface);

                    border-radius:50%;

                    background:
                        var(--primary);

                    box-shadow:
                        0 0 0 4px var(--primary-soft);

                    z-index:50;
                }

            }


            /* =================================================
               TABLET
            ================================================= */

            @media (min-width:640px)
            and (max-width:1023px) {

                .journey-section
                .timeline::before {

                    transform:none !important;

                }

                .journey-section
                .timeline-item::after {

                    left:
                        var(--exact-dot-left)
                        !important;

                    right:auto !important;

                    top:16px !important;

                    width:16px !important;

                    height:16px !important;

                    margin:0 !important;

                    transform:none !important;

                    box-sizing:border-box;

                    border:
                        3px solid var(--surface);

                    border-radius:50%;

                    background:
                        var(--primary);

                    box-shadow:
                        0 0 0 4px var(--primary-soft);

                    z-index:50;
                }

            }


            /* =================================================
               MOBILE
            ================================================= */

            @media (max-width:639px) {

                .journey-section
                .timeline::before {

                    transform:none !important;

                }

                .journey-section
                .timeline-item::after {

                    left:
                        var(--exact-dot-left)
                        !important;

                    right:auto !important;

                    top:14px !important;

                    width:14px !important;

                    height:14px !important;

                    margin:0 !important;

                    transform:none !important;

                    box-sizing:border-box;

                    border:
                        3px solid var(--surface);

                    border-radius:50%;

                    background:
                        var(--primary);

                    box-shadow:
                        0 0 0 4px var(--primary-soft);

                    z-index:50;
                }

            }


            /* =================================================
               SMALL MOBILE
            ================================================= */

            @media (max-width:399px) {

                .journey-section
                .timeline-item::after {

                    width:13px !important;

                    height:13px !important;

                }

            }

        `;
    }


    /* =========================================================
       INITIAL LOAD
    ========================================================= */

    function initTimeline() {

        updateTimeline();

        setTimeout(updateTimeline, 100);
        setTimeout(updateTimeline, 300);
        setTimeout(updateTimeline, 700);
    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initTimeline
        );

    } else {

        initTimeline();

    }


    /* =========================================================
       RESIZE
    ========================================================= */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(resizeTimer);

            resizeTimer =
                setTimeout(
                    updateTimeline,
                    100
                );
        }
    );


    /* =========================================================
       RTL CHANGE
    ========================================================= */

    const observer =
        new MutationObserver(
            function () {

                requestAnimationFrame(
                    updateTimeline
                );

            }
        );

    observer.observe(
        document.documentElement,
        {
            attributes:true,
            attributeFilter:["dir"]
        }
    );


})();