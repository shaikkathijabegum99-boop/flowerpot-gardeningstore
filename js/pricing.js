/*==================================================
 BLOOMNEST PRICING JAVASCRIPT
==================================================*/
document.addEventListener("DOMContentLoaded",()=>{
    /*==============================================
    LUCIDE ICONS
    ==============================================*/
    if(window.lucide){
        lucide.createIcons();
    }
    /*==============================================
    MONTHLY / YEARLY TOGGLE
    ==============================================*/
    const monthlyBtn =
    document.getElementById("monthly");
    const yearlyBtn =
    document.getElementById("yearly");
    const monthlyPrices =
    document.querySelectorAll(".monthly-price");
    const yearlyPrices =
    document.querySelectorAll(".yearly-price");
    if(monthlyBtn && yearlyBtn){
        monthlyBtn.addEventListener(
        "click",
        ()=>{
            monthlyBtn.classList.add("active");
            yearlyBtn.classList.remove("active");
            monthlyPrices.forEach(price=>{
                price.style.display="inline";
            });
            yearlyPrices.forEach(price=>{
                price.style.display="none";
            });
        });
        yearlyBtn.addEventListener(
        "click",
        ()=>{
            yearlyBtn.classList.add("active");
            monthlyBtn.classList.remove("active");
            monthlyPrices.forEach(price=>{
                price.style.display="none";
            });
            yearlyPrices.forEach(price=>{
                price.style.display="inline";
            });
        });
    }
    /*==============================================
    FAQ ACCORDION
    ==============================================*/
    const faqButtons =
    document.querySelectorAll(".faq-question");
    faqButtons.forEach(button=>{
        button.addEventListener(
        "click",
        ()=>{
            const card =
            button.closest(".faq-card");
            const icon =
            button.querySelector("svg");
            card.classList.toggle("active");
            if(card.classList.contains("active")){
                if(icon){
                    icon.style.transform=
                    "rotate(180deg)";
                }
            }
            else{
                if(icon){
                    icon.style.transform=
                    "rotate(0deg)";
                }
            }
        });
    });
    /*==============================================
    PRICING CARD REVEAL ANIMATION
    ==============================================*/
    const cards =
    document.querySelectorAll(".pricing-card");
    const observer =
    new IntersectionObserver(
    entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add(
                    "show"
                );
            }
        });
    },
    {
        threshold:.2
    });
    cards.forEach(card=>{
        observer.observe(card);
    });
});