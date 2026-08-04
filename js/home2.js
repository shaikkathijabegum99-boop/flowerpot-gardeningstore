
"use strict";

document.addEventListener(
"DOMContentLoaded",
()=>{
    initPremiumReveal();
    initCounters();
    initWishlist();
    initCartButtons();
    initFAQ();
    initNewsletter();
    initSmoothScroll();
});

function initPremiumReveal(){
const elements =
document.querySelectorAll(
".premium-reveal, .fade-up, .fade-left, .fade-right"
);
if(!elements.length)
return;
const observer =
new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add(
"show"
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

function initCounters(){
const counters =
document.querySelectorAll(
"[data-counter]"
);
if(!counters.length)
return;
const observer =
new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
if(!entry.isIntersecting)
return;
const counter =
entry.target;
const target =
Number(
counter.dataset.counter
);
let value=0;
const speed =
Math.ceil(
target/100
);
function update(){
value += speed;
if(value>=target){
counter.textContent =
target.toLocaleString();
}
else{
counter.textContent =
value.toLocaleString();
requestAnimationFrame(
update
);
}
}
update();
observer.unobserve(
counter
);
});
},
{
threshold:.5
}
);
counters.forEach(
item=>observer.observe(item)
);
}

function initWishlist(){
const buttons =
document.querySelectorAll(
".wishlist-btn"
);
buttons.forEach(
button=>{
button.addEventListener(
"click",
()=>{
button.classList.toggle(
"active"
);
const icon =
button.querySelector(
"i"
);
if(icon){
icon.setAttribute(
"data-lucide",
button.classList.contains("active")
?
"heart"
:
"heart"
);
lucide.createIcons();
}
showHome2Toast(
button.classList.contains("active")
?
"Added to Wishlist"
:
"Removed from Wishlist"
);
});
});
}

function initCartButtons(){
const buttons =
document.querySelectorAll(
".add-cart"
);
buttons.forEach(
button=>{
button.addEventListener(
"click",
()=>{
showHome2Toast(
"Product added to cart"
);
button.innerHTML =
`
<i data-lucide="check"></i>
 Added
`;
lucide.createIcons();
setTimeout(()=>{
button.innerHTML =
`
<i data-lucide="shopping-cart"></i>
 Add To Cart
`;
lucide.createIcons();
},2000);
});
});
}

function initFAQ(){
const items =
document.querySelectorAll(
".faq-item"
);
items.forEach(
item=>{
const question =
item.querySelector(
".faq-question"
);
question?.addEventListener(
"click",
()=>{
item.classList.toggle(
"active"
);
});
});
}

function initNewsletter(){
const form =
document.querySelector(
".newsletter-form"
);
if(!form)
return;
form.addEventListener(
"submit",
(e)=>{
e.preventDefault();
const input =
form.querySelector(
"input"
);
if(input.value.trim()==="")
{
showHome2Toast(
"Enter your email address"
);
return;
}
showHome2Toast(
"Thank you for subscribing!"
);
input.value="";
});
}

function initSmoothScroll(){
document.querySelectorAll(
'a[href^="#"]'
)
.forEach(
link=>{
link.addEventListener(
"click",
function(e){
const target =
document.querySelector(
this.getAttribute("href")
);
if(!target)
return;
e.preventDefault();
target.scrollIntoView({
behavior:"smooth",
block:"start"
});
});
});
}

function showHome2Toast(
message
){
let toast =
document.querySelector(
".home2-toast"
);
if(!toast){
toast =
document.createElement(
"div"
);
toast.className =
"home2-toast";
document.body.appendChild(
toast
);
}
toast.textContent =
message;
toast.classList.add(
"active"
);
setTimeout(
()=>{
toast.classList.remove(
"active"
);
},
2500
);
}

const images =
document.querySelectorAll(
"img[data-src]"
);
images.forEach(
img=>{
img.src =
img.dataset.src;
img.removeAttribute(
"data-src"
);
});
