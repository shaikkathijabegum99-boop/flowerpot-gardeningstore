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
