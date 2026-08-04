
document.addEventListener("DOMContentLoaded", () => {
    if(typeof lucide !== "undefined"){
        lucide.createIcons();
    }
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {
            if(otherItem !== item){
                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        const target = document.querySelector(
            this.getAttribute("href")
        );
        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }
    });
});

const images = document.querySelectorAll("img");
images.forEach(img => {
    img.setAttribute(
        "loading",
        "lazy"
    );
});

const revealElements = document.querySelectorAll(
`
.service-detail-hero-content,
.service-detail-hero-image,
.overview-image,
.overview-content,
.benefit-card,
.plant-card,
.process-card,
.pricing-card,
.faq-item,
.cta-box
`
);
const revealObserver = new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
    if(entry.isIntersecting){
        entry.target.classList.add(
            "show"
        );
        revealObserver.unobserve(
            entry.target
        );
    }
});
},
{
threshold:0.15
}
);
revealElements.forEach(el=>{
    el.classList.add(
        "reveal"
    );
    revealObserver.observe(el);
});

const pricingCards =
document.querySelectorAll(".pricing-card");
pricingCards.forEach(card=>{
card.addEventListener(
"mouseenter",
()=>{
pricingCards.forEach(item=>{
    item.classList.remove(
        "active"
    );
});
card.classList.add(
    "active"
);
});
card.addEventListener(
"mouseleave",
()=>{
card.classList.remove(
    "active"
);
});
});

window.addEventListener(
"scroll",
()=>{
if(window.scrollY > 500){
document.body.classList.add(
    "scroll-active"
);
}
else{
document.body.classList.remove(
    "scroll-active"
);
}
});
